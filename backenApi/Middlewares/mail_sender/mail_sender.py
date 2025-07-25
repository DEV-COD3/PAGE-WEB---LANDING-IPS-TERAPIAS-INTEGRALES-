import smtplib
from email.message import EmailMessage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os

def enviar_pqrs_generada(json_data,remitente,contraseña_remitente,**kwargs):
    '''Esta funcion se encarga de enviar por correo via smtp un desglose de las pqr generadas\n
Con toda la data suministrada y disponible'''
    try:
        # destinatarios=["gerenciadmon@ipstid.com","calidad@ipstid.com","siau@ipstid.com"]
        destinatarios=["soporteipstid@gmail.com",json_data["cliente"]["contacto"]["correo"]]
        asunto = 'Resgistro PQRS IPSTID'
        # ruta_template="C:\\Users\\Sistemas\\Desktop\\PAGE-WEB---LANDING-IPS-TERAPIAS-INTEGRALES-\\backenApi\\Middlewares\\mail_sender\\mail_templates\\pqr_template.html"
        ruta_template = os.path.abspath(
            os.path.join(os.path.join(os.path.dirname(__file__),"mail_templates"),"pqr_template.html")
            )
        with open(ruta_template,'r',encoding='utf-8') as file:
            cuerpo_html=file.read().format(consecutivo=json_data["solicitud"]["consecutivo_pqrs"],
                                           tipo_solicitud=json_data["solicitud"]["tipo"][0],
                                           programa_atencion=json_data["solicitud"]["programa"][0],
                                           fecha=json_data["solicitud"]["fecha"],
                                           tipo_persona= json_data["cliente"]["tipo_persona"][0],
                                           nombre=json_data["cliente"]["nombre"],
                                           tipo_documento=json_data["cliente"]["documento"]["tipo"][0],
                                           numero_documento= json_data["cliente"]["documento"]["numero"],
                                           celular=json_data["cliente"]["contacto"]["celular"],
                                           telefono=json_data["cliente"]["contacto"]["telefono"],
                                           detalle=json_data["solicitud"]["detalle"]
                                           )
        mensaje = MIMEMultipart('alternative')
        mensaje["From"]=remitente
        mensaje["To"]=", ".join(destinatarios)
        mensaje["subject"]=asunto
        parte_html= MIMEText(cuerpo_html,'html')
        mensaje.attach(parte_html)

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(remitente,contraseña_remitente)
            smtp.sendmail(remitente,destinatarios,mensaje.as_string())
        print("enviado")
        return ["correo enviado exitosaente"], True
    except Exception as e:
        return[f"Error en el envio del correo --> {e}"], False