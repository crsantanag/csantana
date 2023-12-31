import Image from 'next/image'
import '../assets/styles.css'

const Proyectos = () => {
    return (
        <>
        <section id="1">
            <div className="flex flex-col md:flex-row py-4">
                <div className="w-full md:w-1/2 px-10 md:px-20" style={{fontSize: "18px"}}>
                    <strong>Landing page de Negocio</strong>
                    <Image className="py-2" src="/01.jpg" alt="Proyecto 1" width={640} height={570}/>
                </div>
                <div className="w-full md:w-1/2 px-10 md:px-20">
                    Este proyecto contiene una sola página que permite:<br/><br/>
                    - Mensajes del negocio (¿qué se vende?) <br/>
                    - Breve catálogo de productos<br/>
                    - Vista adaptable a móviles<br/><br/>
                    <div style={{fontSize: "14px"}}>
                        <strong>El proyecto contiene las siguientes secciones:</strong><br/>
                        a. Header Sección que involucra el logo y las áreas principales del sitio.<br/>
                        b. Sección de presentación del producto al usuario. Incluye título, descripción y un elemento para introducir un e-mail.<br/>
                        c. Blog o catálogo Sección para mostrar los artículos del sitio web. O en este caso, propiedades<br/>
                        d. Footer Sección que incluye todas las áreas del sitio, incluyendo redes sociales.<br/>
                    </div>
                    <br/>
                    <strong>Tecnologías usadas:</strong> <br/>
                    <div>
                        <Image className="py-2" src="/p1.jpg" alt="Skill 1" width={209} height={75}/>
                    </div>
                    <br/>
                    <br/> 
                    <a href="https://crsantanag.github.io/Landing-de-Venta/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="p-2 bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start" style={{width: "195px"}}>
                            Ir al demo
                        </button>
                    </a>
                    <br/> 
                    <br/>
                    <a href="#2" className="p-4 bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start " style={{width: "200px"}} >
                        Siguiente proyecto
                    </a>
                    <br/>
                    <br/>
                </div>
            </div>
            <br/>
            <br/>
        </section>

        <section id="2">
            <br/>
            <br/>
            <div className="flex flex-col md:flex-row py-4">
                <div className="w-full md:w-1/2 px-10 md:px-20" style={{fontSize: "18px"}}>
                    <br/>
                    <strong>Aplicación CRUD</strong>
                    <Image className="py-2" src="/02.jpg" alt="Proyecto 2" width={640} height={570}/>
                </div>
                <div className="w-full md:w-1/2 px-10 md:px-20">
                    <br/>
                    Este es un proyecto que permite la manipulación de datos, teniendo las siguientes características:
                    <br/>
                    <br/>
                    - Usa solo una página (Single Page Application)<br/>
                    - Usa Local Storage para almacenar los registros
                    - Tiene una sección para crear elementos (productos, tareas, usuarios, etc.)<br/>
                    - Tiene una sección para borrar elementos<br/>
                    - Tiene una sección para modificar elementos<br/>
                    - Tiene una sección para ver todos los elementos creados<br/>
                    <br/>
                    <strong>Tecnologías usadas:</strong> <br/>
                    <div>
                        <Image className="py-5" src="/p2.jpg" alt="Skill 2" width={278} height={75}/>
                    </div>
                    <br/>
                    <br/> 
                    <a href="https://crsantanag.github.io/CRUD/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="p-2  bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start" style={{width: "200px"}}>
                            Ir al demo
                        </button>
                    </a>
                    <br/> 
                    <br/>
                    <a href="#3" className="p-4 bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start " style={{width: "200px"}} >
                        Siguiente proyecto
                    </a>                    
                    <br/>
                    <br/>
                </div>
            </div>
        </section>

        <section id="3">
            <br/>
            <br/>
            <br/>
            <div className="flex flex-col md:flex-row py-4">
                <div className="w-full md:w-1/2 px-10 md:px-20" style={{fontSize: "18px"}}>
                    <br/>
                    <strong>Tablero de Datos (Dashboard)</strong>
                    <Image className="py-2" src="/03.jpg" alt="Proyecto 3" width={640} height={570}/>
                    <br/>
                </div>
                <div className="w-full md:w-1/2 px-10 md:px-20">
                    <br/>
                    Un dashboard permite visualizar gráficamente distintas variables que nos interese controlar para nuestro
                        negocio o ámbito de acción.<br/>
                        <br/>
                        Particularmente, en este caso, nos hemos conectado a la API <strong>mindicator.cl</strong> y se grafican
                        algunas variables.
                        <br/>
                        <br/>
                        Este proyecto contempla:<br/>
                        - Usa un ambiente de desarrollo con Node.js<br/>
                        - Utiliza Chart.js para el desarrollo de gráficas.<br/>
                        - Realiza una conexión a una API externa para extraer datos.<br/>
                    <br/>
                    <strong>Tecnologías usadas:</strong>
                    <div>
                        <Image className="py-2" src="/p3.jpg" alt="Skill 3" width={278} height={75}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <a href="https://crsantanag.github.io/Dashboard/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="p-2  bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start" style={{width: "200px"}}>
                            Ir al demo
                        </button>
                    </a>
                    <br/> 
                    <br/>
                    <a href="#4" className="p-4 bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start " style={{width: "200px"}} >
                        Siguiente proyecto
                    </a>                    
                    <br/>
                    <br/>
                </div>
            </div>
        </section>

        <section id="4">
            <br/>
            <br/>
            <br/>
            <div className="flex flex-col md:flex-row py-4">
                <div className="w-full md:w-1/2 px-10 md:px-20" style={{fontSize: "18px"}}>
                    <br/>
                    <strong>Aplicación Restaurante</strong>
                    <Image className="py-2" src="/04.jpg" alt="Proyecto 4" width={640} height={593}/>
                </div>
                <div className="w-full md:w-1/2 px-10 md:px-20">
                    <br/>
                    Sus características contemplan:
                    <div className="pt-3">
                        - Una página sobre información principal del restaurante.<br/>
                        - Una página que  muestra el menú completo del restaurante<br/>
                        - Un formulario de contacto<br/>
                        - Una página de datos de ubicación<br/>
                        - Una página que permite reservar on-line una mesa en una hora y fecha específica para uno o más comensales<br/>
                        - Una página con artículos (blogs)<br/>
                        - Adaptado a móviles<br/>
                    </div>
                    <br/>
                    Tecnología: Express, Vite + React.js, Componentes bajo Hooks, CSS, Cloud Firestore para el manejo de datos<br/>
                    <br/>
                    <strong>Tecnologías usadas:</strong>
                    <div>
                        <Image className="py-2" src="/p4.jpg" alt="Skill 4" width={278} height={75}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <a href="https://fascinating-lokum-0495a9.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="p-2 bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start" style={{width: "200px"}}>
                            Ir al demo
                        </button>
                    </a>
                    <br/> 
                    <br/>
                    <a href="#5" className="p-4 bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start " style={{width: "200px"}} >
                        Siguiente proyecto
                    </a>                    
                    <br/>
                    <br/>
                </div>
            </div>
        </section>

        <section id="5">
            <br/>
            <br/>
            <br/>
            <div className="flex flex-col md:flex-row py-4">
                <div className="w-full md:w-1/2 px-10 md:px-20" style={{fontSize: "18px"}}>
                    <br/>
                    <strong>Aplicación e-Commerce</strong>
                    <Image className="py-2" src="/05.jpg" alt="Proyecto 5" width={640} height={593}/>
                </div>
                <div className="w-full md:w-1/2 px-10 md:px-20">
                    <br/>
                    Sus características contemplan:<br/>
                    <div className="pt-3">
                        - Un catálogo de productos<br/>
                        - Un carrito de compras<br/>
                        - Una pasarela de pago (puntualmente PayPal, con la versión de pruebas)<br/>
                        - Autenticación (registro de usuario e inicio de sesión, a través de JWT)<br/>
                        - Autorización (zona privada donde el usuario pueda ver su perfil)<br/>
                        - Adaptado a móviles<br/>
                    </div>
                    <div className= "py-2" style={{fontSize: "14px"}}>
                        <strong>Tecnología:</strong><br/>
                        FRONTEND<br/>
                        - ReactJS<br/>
                        - Context API (Manejo de estados)<br/>
                        BACKEND<br/>
                        - Node con ExpressJS<br/>
                        BASE DE DATOS<br/>
                        - MongoDB<br/>
                    </div>
                    <strong>Tecnologías usadas:</strong>
                    <div>
                        <Image className="py-2" src="/p5.jpg" alt="Skill 5" width={466} height={75}/>
                    </div>
                    <br/>
                    <a href="https://adorable-fudge-b56602.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="p-2  bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start" style={{width: "200px"}}>
                            Ir al demo
                        </button>
                    </a>
                    <br/> 
                    <br/>
                    <a href="#1" className="p-4 bg-gray-800 text-white px-4 py-2 font-bold rounded-xl tracking-wider text-start " style={{width: "200px"}} >
                        Subir
                    </a>                    
                    <br/>
                </div>
            </div>
        </section>

        </>
    )
}

export default Proyectos