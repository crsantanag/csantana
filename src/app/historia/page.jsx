import { Image }  from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles.css'

const Store = () => {

    const texto1 = [
        "Durante el año 2023 comencé a actualizar mis conocimientos en el área informática, decidiéndome por el desarrollo de aplicaciones como una forma de aportar al desarrollo de las empresas e instituciones con una mirada hacia los clientes, de lo que desean y -a mi parecer- de lo que necesitan.",
        "Adicionalmente, comienzo con el desarrollo de una escuela de programación para jóvenes, de manera de entregarles herramientas digitales que les permitan el desarrollo de aplicaciones web."
        ];
    
    const texto2 = [
        "Durante este periodo me dediqué a la gestión de pequeñas y medianas empresas, siendo gerente de operaciones de desarrollo y gerente general de diferentes empresas de servicios en las áreas de transporte, obras civiles, minería (6 años), logística (2 años), tecnologías de la información (8 años) y deportes y recreación (11 años).",
        "En el año 2021 renuncié voluntariamente a mi último trabajo para dedicarme a diversos proyectos de crecimiento personal."
        ];
    
    const texto3 = [
        "Durante esos años fui Ingeniero de Sistemas (4 años) y posteriormente Jefe de Procesamiento de Datos en la Universidad de Concepción (6 años). A comienzos de los años noventa trabajé en la incorporación de esta universidad como nodo secundario de la Internet en Chile. Asistí a diversos congresos en USA de la Internet Society, donde -entre otros- se mostró el primer prototipo del NCSA Mosaic.",
        "** El navegador Mosaic o NCSA Mosaic fue el primer navegador web gráfico disponible para visualizar páginas web en sistemas operativos como Mac, Windows u otros. Este navegador web fue creado en enero de 1993, en el National Center for Supercomputing Applications.",
        ];

    return (
    <>
        <section id="1" className="pt-[96px]">
            <div className="flex flex-col md:flex-row py-4">
                <div className="flex pb-4 text-xl justify-center font-bold md:hidden">
                    Por qué Full Stack Developer
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-16 flex justify-center">
                    <Image src="/spot1.jpg" alt="Historia 1"/>
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-16 text-medium leading-leading-[0.5rem] flex flex-col justify-between">
                    <div className="hidden md:flex md:mt-0 md:text-xl md:font-bold">
                        Por qué Full Stack Developer
                    </div>
                    <br/>
                    <div className="font-thin">
                        <div className="text-justify mb-4">
                            <ul className="list-none pl-2">
                                {texto1.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        {item}
                                    </div>
                                    <br/>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:mt-auto md:flex md:flex-col">
                        <div className="flex flex-row justify-between">
                            <a href="#3" >
                                <FontAwesomeIcon className="w-10 h-10" icon={faArrowLeft}/>
                            </a>
                            <a href="#2" className="flex w-60 h-10 text-accent font-bold rounded-xl tracking-wider justify-center items-center text-center border-2">
                                Continuar leyendo
                            </a>
                            <a href="#2" >
                                <FontAwesomeIcon className="w-10 h-10" icon={faArrowRight}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="2"  className="md:pt-[96px]">
            <div className="flex flex-col md:flex-row py-4">
                <div className="flex pb-4 text-xl justify-center font-bold md:hidden">
                    1994 2021
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-16 flex justify-center">
                    <Image  src="/spot2.jpg" alt="Historia 2"/>
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-16 text-medium leading-leading-[0.5rem] flex flex-col justify-between">
                    <div className="hidden md:flex md:mt-0 md:text-xl md:font-bold">
                        1994 - 2021
                    </div>
                    <br/>
                    <div className="font-thin">
                        <div className="text-justify mb-4">
                            <ul className="list-none pl-2">
                                {texto2.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        {item}
                                    </div>
                                    <br/>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:mt-auto md:flex md:flex-col">
                            <div className="flex flex-row justify-between">
                                <a href="#1" >
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowLeft}/>
                                </a>
                                <a href="#3" className="flex w-60 h-10 text-accent font-bold rounded-xl tracking-wider justify-center items-center text-center border-2">
                                    Continuar leyendo
                                </a>
                                <a href="#3" >
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowRight}/>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        

        <section id="3"  className="md:pt-[96px]">
            <div className="flex flex-col md:flex-row py-4">
                <div className="flex pb-4 text-xl justify-center font-bold md:hidden">
                    1983 - 1994
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-16 flex justify-center">
                    <Image  src="/spot3.jpg" alt="Historia 3"/>
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-16 text-medium leading-leading-[0.5rem] flex flex-col justify-between">
                    <div className="hidden md:flex md:mt-0 md:text-xl md:font-bold">
                    1983 - 1994
                    </div>
                    <br/>
                    <div className="font-thin">
                        <div className="text-justify mb-4">
                            <ul className="list-none pl-2">
                                {texto3.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        {item}
                                    </div>
                                    <br/>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:mt-auto md:flex md:flex-col">
                            <div className="flex flex-row justify-between">
                                <a href="#2" >
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowLeft}/>
                                </a>
                                <a href="#1" className="flex w-60 h-10 text-accent font-bold rounded-xl tracking-wider justify-center items-center text-center border-2">
                                    Continuar leyendo
                                </a>
                                <a href="#1" >
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowRight}/>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Store
