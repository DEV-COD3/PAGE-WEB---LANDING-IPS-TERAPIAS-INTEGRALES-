from backenApi.APIs.db_pqrs import Conexion_pqrs

conn = Conexion_pqrs()

def gen_rad(fecha):
    '''retorna string y boolean'''
    msj, ret=conn.buscar_ultimo_consecutivo_pqr()
    if not ret:
        return "Consecutivo no encontrado",False
    return f"TID-{fecha}-000-{msj[0]+1}",True