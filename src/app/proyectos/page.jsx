import { Image } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles.css";

const Proyectos = () => {

    const items1 = [
        "Mensajes del negocio (¿qué se vende?)",
        "Breve catálogo de productos",
        "Vista adaptable a móviles"
        ];
    
    const items2 = [
        "Usa solo una página (Single Page Application)",
        "Usa Local Storage para almacenar los registros",
        "Tiene una sección para crear elementos",
        "Tiene una sección para ver todos los elementos creados",
        "Tiene una sección para modificar elementos",
        "Tiene una sección para borrar elementos"
        ];
    
    const items3 = [
        "Usa un ambiente de desarrollo con Node.js",
        "Utiliza Chart.js para el desarrollo de gráficas",
        "Realiza una conexión a una API externa para extraer datos"
        ];
    
    const items4 = [
        "Una página sobre información principal del restaurante",
        "Una página que muestra el menú completo del restaurante",
        "Un formulario de contacto",
        "Una página de datos de ubicación",
        "Una página que permite reservar on-line una mesa en una hora y fecha específica para uno o más comensales",
        "Una página con artículos (blogs)",
        "Adaptado a móviles"
    ];
    
    const items5 = [
        "Un catálogo de productos",
        "Un carrito de compras",
        "Una pasarela de pago (puntualmente PayPal)",
        "Autenticación (registro de usuario e inicio de sesión a través de JWT)",
        "Autorización (zona privada donde el usuario pueda ver su perfil)",
        "Adaptado a móviles"
    ];

    return (
        <>
            <section id="1" className="pt-[96px]">
                <div className="flex flex-col md:flex-row py-4">
                    <div className="flex pb-4 text-xl justify-center font-bold md:hidden">
                        Landing page de Negocio
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 flex justify-center">
                        <Image className="border-white border-2" src="/01.jpg" alt="Proyecto 1"/>
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 text-medium leading-leading-[0.5rem] flex flex-col justify-between">
                        <div className="hidden md:flex md:mt-0 md:text-xl md:font-bold">
                            Landing page de Negocio
                        </div>
                        <br/>
                        <div className="font-thin">
                            <strong>Este proyecto contiene una sola página que permite:</strong>  <br/>

                            <div className=" mb-4">
                                <ul className="list-none pl-2">
                                    {items1.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex flex-row">
                                            <div className="before:content-['-'] before:mr-1"></div>
                                            <div className="mr-3">
                                                {item}
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-auto flex flex-col">
                            <div className="flex flex-row mx-auto mb-4 gap-2">
                                <Image src="/sk1.jpg" alt="Skill 1" className="max-h-[75px] w-auto"/>
                                <Image src="/sk2.jpg" alt="Skill 2" className="max-h-[75px] w-auto"/>
                            </div>
                            <div className="flex flex-row mt-2 justify-center md:justify-between">
                                <a href="#5" className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowLeft}/>
                                </a>
                                <a href="https://crsantanag.github.io/Landing-de-Venta/" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="w-36 h-10 text-accent font-bold rounded-xl tracking-wider text-center border-2">
                                        Ir al demo
                                    </button>
                                </a>
                                <a href="#2" className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowRight}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-1.5 border-white md:hidden"/>
            </section>

            <section id="2" className="md:pt-[96px]">
                <div className="flex flex-col md:flex-row py-4">
                    <div className="flex pb-4 text-xl justify-center font-bold md:hidden">
                        Aplicación CRUD
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 flex justify-center">
                        <Image className="border-white border-2" src="/02.jpg" alt="Proyecto 2" />
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 text-medium leading-leading-[0.5rem] flex flex-col justify-between">
                        <div className="hidden md:flex md:mt-0 md:text-xl md:font-bold">
                            Aplicación CRUD
                        </div><br/>
                        <div className="font-thin">
                            Este es un proyecto que permite la manipulación de datos.<br/><br/>
                            <strong>Sus características contemplan:</strong><br/>

                            <div className=" mb-4">
                                <ul className="list-none pl-2">
                                    {items2.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex flex-row">
                                            <div className="before:content-['-'] before:mr-1"></div>
                                            <div className="mr-3">
                                                {item}
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-auto flex flex-col">
                            <div className="flex flex-row mx-auto mb-4 gap-2">
                                <Image src="/sk1.jpg" alt="Skill 1" className="max-h-[75px] w-auto"/>
                                <Image src="/sk2.jpg" alt="Skill 2" className="max-h-[75px] w-auto"/>
                                <Image src="/sk3.jpg" alt="Skill 3" className="max-h-[75px] w-auto"/>
                            </div>
                            <div className="flex flex-row mt-2 justify-center md:justify-between">
                                <a href="#1"className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowLeft}/>
                                </a>
                                <a href="https://crsantanag.github.io/CRUD/" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="w-36 h-10 text-accent font-bold rounded-xl tracking-wider text-center border-2">
                                        Ir al demo
                                    </button>
                                </a>
                                <a href="#3" className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowRight}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-1.5 border-white md:hidden"/>
            </section>

            <section id="3" className="md:pt-[96px]">
                <div className="flex flex-col md:flex-row py-4">
                    <div className="flex pb-4 text-xl justify-center font-bold md:hidden">
                        Tablero de Datos (Dashboard)
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 flex justify-center">
                        <Image className="border-white border-2" src="/03.jpg" alt="Proyecto 3" />
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 text-medium leading-leading-[0.5rem] flex flex-col justify-between">
                        <div className="hidden md:flex md:mt-0 md:text-xl md:font-bold">
                            Tablero de Datos (Dashboard)
                        </div><br/>
                        <div className="font-thin">
                            Un dashboard permite visualizar gráficamente distintas variables que
                            nos interese controlar para nuestro negocio o ámbito de acción. <br/><br/>
                            Particularmente, en este caso, nos hemos conectado a la API{" "}
                            <strong>mindicator.cl</strong> y se grafican algunas variables. <br/><br/>
                            <strong>Tecnologías:</strong><br/>

                            <div className=" mb-4">
                                <ul className="list-none pl-2">
                                    {items3.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex flex-row">
                                            <div className="before:content-['-'] before:mr-1"></div>
                                            <div className="mr-3">
                                                {item}
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-auto flex flex-col">
                            <div className="flex flex-row mx-auto mb-4 gap-2">
                                <Image src="/sk4.jpg" alt="Skill 4" className="max-h-[75px] w-auto"/>
                                <Image src="/sk5.jpg" alt="Skill 5" className="max-h-[75px] w-auto"/>
                                <Image src="/sk6.jpg" alt="Skill 6" className="max-h-[75px] w-auto"/>
                            </div>
                            <div className="flex flex-row mt-2 justify-center md:justify-between">
                                <a href="#2" className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowLeft}/>
                                </a>
                                <a href="https://crsantanag.github.io/Dashboard/" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="w-36 h-10 text-accent font-bold rounded-xl tracking-wider text-center border-2">
                                        Ir al demo
                                    </button>
                                </a>
                                <a href="#4" className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowRight}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-1.5 border-white md:hidden"/>
            </section>

            <section id="4" className="md:pt-[96px]">
                <div className="flex flex-col md:flex-row py-4">
                    <div className="flex pb-4 text-xl justify-center text-center font-bold md:hidden ">
                        Aplicación Restaurante<br/>
                        Reserva de Mesas
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 flex justify-center">
                        <Image className="border-white border-2" src="/04.jpg" alt="Proyecto 4" />
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 text-medium leading-leading-[0.5rem] flex flex-col justify-between">
                        <div className="hidden md:flex md:mt-0 md:text-xl md:font-bold">
                            Aplicación Restaurante - Reserva de Mesas
                        </div><br/>
                        <div className="font-thin">
                            <strong>Sus características contemplan:</strong><br/>

                            <div className=" mb-4">
                                <ul className="list-none pl-2">
                                    {items4.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex flex-row">
                                            <div className="before:content-['-'] before:mr-1"></div>
                                            <div className="mr-3">
                                                {item}
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            <strong>Tecnologías:</strong><br/>
                            FRONTEND: Express, Vite + React.js, Componentes bajo Hooks<br/>
                            BASE DE DATOS:  Cloud Firestore
                        </div>
                        <div className="mt-6 md:mt-auto flex flex-col">
                            <div className="flex flex-row mx-auto mb-4 gap-2">
                                <Image src="/sk7.jpg" alt="Skill 7" className="max-h-[75px] w-auto"/>
                                <Image src="/sk8.jpg" alt="Skill 8" className="max-h-[75px] w-auto"/>
                            </div>
                            <div className="flex flex-row mt-2 justify-center md:justify-between">
                                <a href="#3" className="hidden md:flex" >
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowLeft}/>
                                </a>
                                <a href="https://fascinating-lokum-0495a9.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="w-36 h-10 text-accent font-bold rounded-xl tracking-wider text-center border-2">
                                        Ir al demo
                                    </button>
                                </a>
                                <a href="#5" className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowRight}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-1.5 border-white md:hidden"/>
            </section>

            <section id="5" className="md:pt-[96px]">
                <div className="flex flex-col md:flex-row py-4">
                    <div className="flex pb-4 text-xl justify-center font-bold md:hidden">
                        Aplicación e-Commerce
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 flex justify-center">
                        <Image className="border-white border-2" src="/05.jpg" alt="Proyecto 5" />
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-16 text-medium leading-leading-[0.5rem] flex flex-col justify-between">
                        <div className="hidden md:flex md:mt-0 md:text-xl md:font-bold">
                            Aplicación e-Commerce
                        </div><br/>
                        <div className="text-medium font-thin">
                            <strong>Sus características contemplan:</strong>

                            <div className=" mb-4">
                                <ul className="list-none pl-2">
                                    {items5.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex flex-row">
                                            <div className="before:content-['-'] before:mr-1"></div>
                                            <div className="mr-3">
                                                {item}
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            <strong>Tecnologías:</strong><br/>
                            FRONTEND: ReactJS, Context API (Manejo de estados)<br/>
                            BACKEND: Node con ExpressJS<br/>
                            BASE DE DATOS: MongoDB
                        </div>
                        <div className="mt-6 md:mt-auto flex flex-col">
                            <div className="flex flex-row mx-auto gap-2 mb-4">
                                <Image src="/sk7.jpg" alt="Skill 7" className="max-h-[75px] w-auto"/>
                                <Image src="/sk9.jpg" alt="Skill 8" className="max-h-[75px] w-auto"/>
                                <Image src="/sk4.jpg" alt="Skill 4" className="max-h-[75px] w-auto"/>
                                <Image src="/sk10.jpg" alt="Skill 10" className="max-h-[75px] w-auto"/>
                            </div>
                            <div className="flex flex-row mt-2 justify-center md:justify-between">
                                <a href="#4" className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowLeft}/>
                                </a>
                                <a href="https://adorable-fudge-b56602.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="w-36 h-10 text-accent font-bold rounded-xl tracking-wider text-center border-2">
                                        Ir al demo
                                    </button>
                                </a>
                                <a href="#1" className="hidden md:flex">
                                    <FontAwesomeIcon className="w-10 h-10" icon={faArrowRight}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-1.5 border-white md:hidden"/>
            </section>
    </>
    );
};

export default Proyectos;
