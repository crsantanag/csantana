'use client'
import { Image }  from "@nextui-org/react"
import React from 'react';
import CredlyBadge from './credlyBadge';
import './assets/styles.css'

export default function Homepage() {
    return (
    <>
        <section className="mt-[96px]">
            <div className="py-4">
                <div className="flex flex-col md:flex-row">

                    <div className="w-full md:w-1/2 px-2 md:px-16 centrar-contenedor">
                        <Image className="w-full h-auto object-contain" src="/homepage.jpg" alt="Portada"/>
                    </div>

                    <div className="w-full md:w-1/2 px-2 lg:px-16 flex flex-col justify-between">

                        <div className="mt-5 lg:mt-0 text-4xl font-semibold">
                            Carlos Santana<span className="text-accent">.</span>{/* Comentado {windowWidth} */}
                        </div>

                        <div className="w-full text-xl font-thin text-justify tracking-wide">
                            Profesional con más de 30 años de experiencia en la dirección y gestión estratégica de pequeñas y
                            medianas empresas (entre 20 y 150 personas).
                        </div>


                        <div className="mt-5 lg:mt-auto flex flex-col sm:flex-row pantalla1">
                            <div className="w-full md:block md:w-1/2 text-lg font-bold">
                                Formación académica: <br/>
                                <div className="text-base font-thin">
                                - Ingeniero en Computación e informática (Universidad de Concepción - 1984)<br/>
                                - Ingeniero Civil Industrial (Universidad de Concepción - 1994)<br/>
                                - Master on Business Administration - MBA (Universidad del Desarrollo - 2005)<br/>
                                - Full Stack Developer (Universidad del Desarrollo - 2023)
                                </div>
                            </div>
                            <div className="w-full mt-5 lg:mt-0 md:block md:w-1/2 p-0 m-0 bg-white centrar-contenedor">
                                <CredlyBadge />
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col sm:flex-row pantalla2 mx-2 mt-5">
                    <div className="w-full md:block md:w-1/2 text-lg">
                        <strong>Formación académica: </strong>
                        <div className="text-base font-thin">
                        - Ingeniero en Computación e informática (Universidad de Concepción - 1984)<br/>
                        - Ingeniero Civil Industrial (Universidad de Concepción - 1994)<br/>
                        - Master on Business Administration - MBA (Universidad del Desarrollo - 2005)<br/>
                        - Full Stack Developer (Universidad del Desarrollo - 2023)
                        </div>
                    </div>
                    <div className="w-full md:block md:w-1/2 px-0 mx-0 bg-white centrar_contendedor">
                        <CredlyBadge />
                    </div>
                </div>
            </div>

        </section>
    </>
    );
}

