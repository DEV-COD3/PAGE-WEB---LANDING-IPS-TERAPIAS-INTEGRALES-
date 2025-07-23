from flask import Flask, request, jsonify
from datetime import datetime
from dotenv import load_dotenv
from os import getenv
from backenApi.Middlewares.mail_sender.mail_sender import enviar_pqrs_generada
from backenApi.Middlewares.data_parser.data_parser import parse_dataid_to_realdata
from backenApi.APIs.db_pqrs import Conexion_pqrs

load_dotenv()
conexion_pqrs=Conexion_pqrs()
def crear_pqrs ():
    peticion = request.get_json()
    print(peticion)
    datos = {
        "cliente":{"nombre":peticion.get("nombre_completo"),
                        "documento":{"tipo":peticion.get("tipo_documento"),
                                     "numero":peticion.get("docuemnto_identidad")
                                     },
                        "tipo_persona":peticion.get("tipo_persona"),
                        "contacto":{"correo":peticion.get("correo_electronico"),
                                    "telefono":peticion.get("telefono"),
                                    "celular":peticion.get("celular")
                                    }
                        },
            "solicitud":{"tipo":peticion.get("tipo_solicitud"),
                         "programa":peticion.get("programa_atencion"),
                         "fecha":datetime.now().date(),
                         "consecutivo_pqrs":None,
                         "detalle":peticion.get("detalle")
                         }
            }
    msj,ret =conexion_pqrs.buscar_ultimo_consecutivo_pqr()
    if not ret:
        return jsonify(msg=msj),400
    datos["solicitud"]["consecutivo"]=msj[0]
    pqr_msg, pqr_ret =conexion_pqrs.generar_pqrs(datos["solicitud"]["fecha"],datos["solicitud"]["consecutivo_pqrs"],
                               datos["solicitud"]["tipo"],datos["cliente"]["tipo_persona"],
                               datos["solicitud"]["programa"],datos["cliente"]["documento"]["tipo"],
                               datos["cliente"]["contacto"]["celular"],
                               datos["cliente"]["contacto"]["telefono"],
                               datos["cliente"]["contacto"]["correo"],
                               datos["cliente"]["documento"]["numero"],datos["cliente"]["nombre"])
    print(pqr_msg)
    json_datos= parse_dataid_to_realdata(datos)
    pqr_creds=[getenv("EMAIL"),getenv("password")]
    enviar_pqrs_generada(json_datos["solicitud"]["tipo"],json_datos["solicitud"]["consecutivo_pqrs"],json_datos["cliente"]["contacto"]["correo"],remitente=pqr_creds[0],contraseña_remitente=pqr_creds[1])
    
    

    pass
