import Image from 'next/image'

const Proyectos = () => {
    return (
        <>
        <section id="1" style={{backgroundColor: "white"}}>
            <div className="flex">
                <div className="flex">
                    <div className="w-1/2 px-20" style={{fontSize: "18px"}}>
                        <br />
                        <h2>Landing page de Negocio</h2>
                        <br />
                        Este proyecto contiene una sola página que permite:<br /><br />
                        - Mensajes del negocio (¿qué se vende?) <br />
                        - Breve catálogo de productos<br />
                        - Vista adaptable a móviles<br /><br />
                        <div style={{fontSize: "14px"}}>
                            <strong>El proyecto contiene las siguientes secciones:</strong><br />
                            a. Header Sección que involucra el logo y las áreas principales del sitio.<br />
                            b. Sección de presentación del producto al usuario. Incluye título, descripción y un elemento para introducir un e-mail.<br />
                            c. Blog o catálogo Sección para mostrar los artículos del sitio web. O en este caso, propiedades<br />
                            d. Footer Sección que incluye todas las áreas del sitio, incluyendo redes sociales.<br />
                        </div>
                        <br/>
                        <div>
                            <Image src="/p1.jpg" alt="Skill 1" width={140} height={75}/>
                        </div>
                        <br/>
                        <button type="button" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-start" style={{width: "180px"}}>
                        Ir al demo
                        </button> 
                        <br/> 
                        <br/>
                        <a href="#2" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" >
                            Siguiente proyecto
                        </a>
                    </div>
                    <div className="w-1/2 pr-20">
                        <br/>
                        <Image src="/01.jpg" alt="Proyecto 1" width={640} height={570}/>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <br />
        </section>

        <section id="2" style={{backgroundColor: "white"}}>
            <br />
            <br />
            <br />
            <div className="flex">
                <div className="flex">
                    <div className="w-1/2 px-20" style={{fontSize: "18px"}}>
                        <br />
                        <h2>Aplicación CRUD</h2>
                        <br />
                        Este es un proyecto que permite la manipulación de datos, teniendo las siguientes características:
                        <br />
                        <br />
                        - Usa solo una página (Single Page Application)<br />
                        - Tiene una sección para crear elementos (productos, tareas, usuarios, etc.)<br />
                        - Tiene una sección para borrar elementos<br />
                        - Tiene una sección para modificar elementos<br />
                        - Tiene una sección para ver todos los elementos creados<br />
                        <br/>
                        <br/>
                        <br/>
                        <div>
                            <Image src="/p2.jpg" alt="Skill 2" width={215} height={75}/>
                        </div>
                        <br/>
                        <button type="button" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-start" style={{width: "180px"}}>
                            Ir al demo
                        </button>
                        <br/>
                        <br/>
                        <a href="#3" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" >
                            Siguiente proyecto
                        </a>                    
                        <br/>
                        <br/>
                    </div>
                    <div className="w-1/2 pr-20">
                        <br/>
                        <Image src="/02.jpg" alt="Proyecto 2" width={640} height={570}/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </section>

        <section id="3" style={{backgroundColor: "white"}}>
            <br />
            <br />
            <br />
            <div className="flex">
                <div className="flex">
                <div className="w-1/2 px-20" style={{fontSize: "18px"}}>
                        <br />
                        <h2>Tablero de Datos (Dashboard)</h2>
                        <br />
                        Un dashboard permite visualizar gráficamente distintas variables que nos interese controlar para nuestro
                        negocio o ámbito de acción.<br />
                        <br />
                        Particularmente, en este caso, nos hemos conectado a la API <strong>mindicator.cl</strong> y se grafican
                        algunas variables.
                        <br />
                        <br />
                        Este proyecto contempla:<br />
                        - Usa un ambiente de desarrollo con React.js<br />
                        - Utiliza Chart.js para el desarrollo de gráficas.<br />
                        - Realiza una conexión a una API externa para extraer datos.<br />
                        <br />
                        <br />
                        <div>
                            <Image src="/p3.jpg" alt="Skill 3" width={215} height={75}/>
                        </div>
                        <br/>
                        <button type="button" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-start" style={{width: "180px"}}>
                            Ir al demo
                        </button>
                        <br/>
                        <br/>
                        <a href="#4" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" style={{width: "200px"}}>Siguiente proyecto</a>
                    </div>
                    <div className="w-1/2 pr-20">
                        <br/>
                        <Image src="/03.jpg" alt="Historia 3" width={640} height={570}/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </section>

        <section id="4" style={{backgroundColor: "white"}}>
            <br />
            <br />
            <br />
            <div className="flex">
                <div className="flex">
                    <div className="w-1/2 px-20" style={{fontSize: "18px"}}>
                        <br />
                        <h2>Aplicación Restaurante</h2>
                        <br />
                        <div style={{fontSize: "14px"}}>
                            Sus características contemplan:
                            <br />
                            - Una página sobre información principal del restaurante.<br />
                            - Una página que  muestra el menú completo del restaurante<br />
                            - Un formulario de contacto<br />
                            - Una página de datos de ubicación<br />
                            - Una página que permite reservar on-line una mesa en una hora y fecha específica para uno o más comensales<br />
                            - Una página con artículos (blogs)<br />
                            - Adaptado a móviles<br />
                            <br />
                            Tecnología: Express, Vite + React.js, Componentes bajo Hooks, CSS, Cloud Firestore para el manejo de datos<br />
                            <br />
                        </div>
                        <div>
                            <Image src="/p4.jpg" alt="Skill 4" width={215} height={75}/>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <button type="button" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-start" style={{width: "180px"}}>
                            Ir al demo
                        </button>
                        <br/>
                        <br/>
                        <a href="#5" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" style={{width: "200px"}}>Siguiente proyecto</a>
                    </div>
                    <div className="w-1/2 pr-20">
                        <br/>
                        <Image src="/04.jpg" alt="Proyecto 4" width={640} height={570}/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </section>

        <section id="5" style={{backgroundColor: "white"}}>
            <br />
            <br />

            <div className="flex">
                <div className="flex">
                    <div className="w-1/2 px-20" style={{fontSize: "18px"}}>
                        <br />
                        <h2>Aplicación e-Commerce</h2>
                        <br />
                        <div style={{fontSize: "14px"}}>
                        Sus características contemplan:<br />
                        <br />
                        - Un catálogo de productos<br />
                        - Un carrito de compras<br />
                        - Una pasarela de pago (puntualmente PayPal, con la versión de pruebas)<br />
                        - Autenticación (registro de usuario e inicio de sesión, a través de JWT)<br />
                        - Autorización (zona privada donde el usuario pueda ver su perfil)<br />
                        - Adaptado a móviles<br />
                        <br />
                        Tecnologías:<br />
                        FRONTEND<br />
                            ReactJS<br />
                            Context API (Manejo de estados)<br />
                        BACKEND<br />
                            Node con ExpressJS<br />
                        BASE DE DATOS<br />
                            MongoDB<br />
                        </div>
                        <br />

                        <div>
                            <Image src="/p5.jpg" alt="Skill 5" width={352} height={75}/>
                        </div>
                        <br />
                        <button type="button" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-start" style={{width: "180px"}}>
                            Ir al demo
                        </button>
                        <br/>
                        <br/>
                        <a href="#1" className="p-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" style={{width: "200px"}}>Subir</a>
                    </div>
                    <div className="w-1/2 pr-20">
                        <br/>
                        <Image src="/05.jpg" alt="Proyecto 5" width={640} height={570}/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Proyectos