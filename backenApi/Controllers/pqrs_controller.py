from flask import Flask, request
from datetime import datetime

def crear_pqrs ():
    peticion = request.get_json()
    nombre_completo = peticion.get("nombre_completo")
    solicitud  = [peticion.get("tipo_solicitud"),datetime.no]
    documento = [peticion.get("tipo_documento"), peticion.get("numero_documento")]
    contacto= [peticion.get("correo"),peticion.get("telefono"),peticion.get("celular")]

    pass