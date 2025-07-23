import mysql.connector
from backenApi.Middlewares.SaaS import Saas

class Conexion_pqrs(mysql.connector.MySQLConnection):
    def __init__(self):
        config = {'host':'localhost',
            'user':'root',
            'password':'',
            'database':'PQRS_WEB'}
        super().__init__(**config)
    
    def revisar_conexion(funcion_envuelta):
        def envoltura(self,*args,**kwargs):
            # Saas()
            if not self.is_connected():
                self.connect()
            resultado =funcion_envuelta(self,*args,**kwargs)
            self.disconnect()
            return resultado
        return envoltura
    
    @revisar_conexion
    def buscar_ultimo_consecutivo_pqr(self):
        '''Retorna [mensaje] y Boolean '''
        try: 
            with self.cursor() as cursor:
                cursor.execute("select * from PQRS order by consecutivo_solicitud ASC")
                ultimo_consecutivo = cursor.fetchone()
                cursor.fetchall()
                if not ultimo_consecutivo:
                    return ["No se encuentra el ultimo consecutivo"],False
                return [ultimo_consecutivo[0]],True
        except Exception as e:
            return [f"Error --> {e}"], False   
    @revisar_conexion
    def buscar_x_consecutivo(self,consecutivo):
        '''retorna {} con la informacion de la pqr y boolean'''
        with self.cursor(dictionary=True) as cursor:
            cursor.execute("""select consecutivo_solicitud consecutivo,ts.tipo tipo_solicitud,pa.programa programa,nombre_completo nombre,td.tipo tipo_documento,documento_identidad documento,tp.tipo tipo_persona,fecha_solicitud fecha,celular, telefono, correo_electronico, detalle from pqrs
                            INNER JOIN tipos_solicitud as ts on ts.id=pqrs.tipo_solicitud
                            INNER JOIN tipos_persona as tp on tp.id=pqrs.tipo_persona
                            INNER JOIN programas_atencion as pa on pa.id=pqrs.programa_atencion
                            INNER JOIN tipos_documento as td on td.id=pqrs.tipo_documento
                            where pqrs.consecutivo_solicitud=%s
                            """,(consecutivo,)
                            )
            res = cursor.fetchall()
            if not res:
                return {"msj":"No se encontró consecutivo asignado"}, False
            return res, True  
    @revisar_conexion
    def obtener_tipo_documento(self,tipo_documento_id):
        '''retorna [] y Boolean'''
        with self.cursor() as cursor:
            cursor.execute("select tipo from tipos_documento where id=%s",(tipo_documento_id,))
        tipo = cursor.fetchall()
        if not tipo:
            return ["No se encontró tipo documento asignado"], False
        return [tipo[0][0]], True
    @revisar_conexion
    def obtener_tipo_persona(self,tipo_persona_id):
        '''retorna [] y Boolean'''
        with self.cursor() as cursor:
            cursor.execute("select tipo from tipos_persona where id=%s",(tipo_persona_id,))
        tipo = cursor.fetchall()
        if not tipo:
            return ["No se encontró tipo documento asignado"], False
        return [tipo[0][0]], True
    @revisar_conexion
    def obtener_tipo_solicitud(self,tipo_solicitud_id):
        '''retorna [] y Boolean'''
        with self.cursor() as cursor:
            cursor.execute("select tipo from tipos_solicitud where id=%s",(tipo_solicitud_id,))
        tipo = cursor.fetchall()
        if not tipo:
            return ["No se encontró tipo documento asignado"], False
        return [tipo[0][0]], True
    @revisar_conexion
    def obtener_programa_atencion(self,tipo_solicitud_id):
        '''retorna [] y Boolean'''
        with self.cursor() as cursor:
            cursor.execute("select tipo from tipos_solicitud where id=%s",(tipo_solicitud_id,))
        tipo = cursor.fetchall()
        if not tipo:
            return ["No se encontró tipo documento asignado"], False
        return [tipo[0][0]], True
    


    @revisar_conexion
    def generar_pqrs(self,fecha_solicitud, consecutivo_solicitud,
                    tipo_solicitud,tipo_persona_id,programa_atencion_id, tipo_documento,celular,telefono,correo_electronico, documento_identidad,
                    nombre_completo, detalle):
        '''Retorna [] y Boolean\n
        Estado del fetch (Correto-Incorrecto)'''
        try:
            with self.cursor() as cursor:
                cursor.execute("""insert into pqrs 
                               (fecha_solicitud,consecutivo_solicitud,tipo_solicitud,
                               tipo_persona,programa_atencion,tipo_documento,celular,telefono,
                               clasificacion,correo_electronico,
                               documento_identidad,nombre_completo,detalle)
                               values
                               (%s,%s,%s,%s,%s,%s,%s,%s,null,%s,%s,%s,%s)""",(fecha_solicitud,consecutivo_solicitud,
                                                                              tipo_solicitud,tipo_persona_id,programa_atencion_id,
                                                                              tipo_documento,celular,telefono,correo_electronico,
                                                                              documento_identidad,nombre_completo,detalle)
                                )
                self.commit()
                return ["PQRS Generada exitosamente"], True
        except Exception as e:
            return ["Error en metodo generar pqrs"], False 

        pass


