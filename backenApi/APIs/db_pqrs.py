import mysql.connector
from backenApi.Middlewares.SaaS import Saas

class Conexion_pqrs(mysql.connector.MySQLConnection):
    def __init__(self):
        config = {'host':'localhost',
            'user':'root',
            'password':'',
            'database':'web_ipstid'}
        super().__init__(**config)
    
    def revisar_conexion(funcion_envuelta):
        def envoltura(self,*args,**kwargs):
            Saas()
            if not self.is_connected():
                self.connect()
            resultado =funcion_envuelta()
            return funcion_envuelta
        return envoltura
    
    @revisar_conexion
    def buscar_ultimo_consecutivo_pqr(self):
        '''Retorna [{}] y Boolean '''
        try: 
            with self.cursor(dictionary=True) as cursor:
                cursor.execute("select * from PQRS order by consecutivo_solicitud ASC")
                ultimo_consecutivo = cursor.fetchone()
                cursor.fetchall()
                if not ultimo_consecutivo:
                    return [{}]
        except Exception as e:
            return [{"error":e}], False
    @revisar_conexion
    def generar_pqrs(self,fecha_solicitud, consecutivo_solicitud,
                    tipo_solicitud, tipo_documento, documento_identidad,
                    nombre_completo, detalle):
        '''Retorna [] y Boolean\n
        Estado del fetch (Correto-Incorrecto)'''
        try:
            with self.cursor() as cursor:
                cursor.execute("")
        except Exception as e:
            return ["Error en metodo generar pqrs"], False 

        pass

