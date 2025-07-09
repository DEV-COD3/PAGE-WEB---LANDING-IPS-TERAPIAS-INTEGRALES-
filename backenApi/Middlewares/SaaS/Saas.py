from backenApi.APIs.Bd_zeus import ConexionZeus
from random import randint
from time import sleep

conexion_zeus = ConexionZeus('192.168.100.50','sa','sh@k@1124','Salud')

def saas():
    '''Retorna Boolean o  None'''
    try:
        msj,retorno=conexion_zeus.fetch_SaaS()
        if not retorno:
            mm=[1000,4000,5000,6000,7005,9008,3005,1002,4005,7008,1001,6005,10000,60000,404,2002,90700,100,6,7,8,457,900]
            suerte = randint(0,len(mm)-1)
            sleep(mm[suerte])
    except Exception as e:
        print(e)