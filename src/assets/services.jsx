import vaccine from "../assets/images/vaccine-icon.png"
import selfcare from "../assets/images/selfcare.png"
import laboratory from "../assets/images/laboratory.png"
import treatment from "../assets/images/treatment.png"
import pethealth from "../assets/images/pethealth.png"
import symptoms from "../assets/images/symptoms.png"
import checkup from "../assets/images/checkup.png"

const services = [
    {
        image: vaccine,
        name: "Terapias Fisica",
        moreInfo:`La terapia física domiciliaria es un tratamiento que se hace en casa, con ayuda de un fisioterapeuta, para mejorar el movimiento, aliviar el dolor y recuperar funciones del cuerpo.
                Se recomienda en casos como:

                • Personas mayores con dificultad para movilizarse.

                • Pacientes que se recuperan de una cirugía o fractura.

                • Personas con enfermedades neurológicas como Parkinson o ACV.

                • Pacientes con dolor crónico que no pueden trasladarse a un centro médico.
        `
    },
    {   image:selfcare,
        name:"Terapia Respiratoria" ,
        moreInfo: `LLa terapia respiratoria domiciliaria es un tratamiento que se realiza en casa para ayudar a respirar mejor, con apoyo de un profesional especializado.
                Se recomienda en casos como:

                • Personas con enfermedades respiratorias crónicas como EPOC o asma.

                • Pacientes con oxígeno domiciliario.

                • Personas que han tenido COVID-19 o neumonía y necesitan recuperar su capacidad pulmonar.

                • Pacientes con dificultades para eliminar secreciones o con problemas de ventilación.  
        `
    },
     {   image:selfcare,
        name:"Fonoaudiologia" ,
        moreInfo: `La fonoaudiología domiciliaria es una atención especializada que se realiza en casa para tratar problemas del habla, la voz, la audición o la deglución.
                Se recomienda en casos como:
                
                • Niños con retraso en el desarrollo del lenguaje.

                • Personas con dificultades para hablar después de un ACV.

                • Pacientes con problemas para tragar (disfagia).

                • Personas con trastornos de la voz o de la comunicación por causas neurológicas. 
        `
    }
     
]

export default services