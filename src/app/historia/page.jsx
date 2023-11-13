import Image from 'next/image'

const Store = () => {
    return (
    <div className=" bg-white">

        <section id="1">
            <div className="min-h-screen flex flex-col md:flex-row px-10 md:px-20 pt-4">
                <div className="w-full md:w-1/2 items-center" >
                    <Image src="/spot1.jpg" alt="Historia 1" width={640} height={570}/>
                    <br/>
                </div>
                <div className="w-full md:w-1/2 text-lg md:pr-10 opacity-80 pb-10 pt-5">
                    <strong>Por qué Full Stack Developer</strong>
                    <br/>
                    <br/>
                    Durante el año 2023 comencé a actualizar mis conocimientos en el área informática, decidiéndome por
                    el desarrollo de aplicaciones web como una forma de aportar al desarrollo de las empresas e instituciones
                    con una mirada hacia los clientes, de lo que desean y -a mi parecer- de lo que necesitan.
                    <br />
                    <br />
                    Adicionalmente, comienzo con el desarrollo de una escuela de programación para jóvenes, de manera de
                    entregarles herramientas digitales que les permitan el desarrollo de aplicaciones web.
                    <br/>
                    <br/>
                    <strong><a href="#2" className="opacity-100 p-4 bg-black text-white py-2 font-bold rounded-xl tracking-wider text-start" style={{width: "200px"}}>Continuar leyendo</a></strong>
                </div>
            </div>
        </section>

        <section id="2">
            <div className="min-h-screen flex flex-col md:flex-row px-10 md:px-20 pt-20">
                <div className="w-full md:w-1/2 items-center" >
                    <Image src="/spot2.jpg" alt="Historia 2" width={640} height={570}/>
                </div>
                <div className="w-full md:w-1/2 text-lg md:pr-10 opacity-80 pb-10 pt-10">
                    <strong>2021 - 1994</strong>
                    <br />
                    <br/>
                    Durante este periodo me dediqué a la gestión de pequeñas y medianas empresas, siendo gerente de operaciones,
                    de desarrollo y gerente general de diferentes empresas de servicios en las áreas de transporte, obras civiles,
                    minería (6 años), logística (2 años), tecnologías de la información (8 años) y deportes y recreación (11 años).
                    En el año 2021 renuncié voluntariamente a mi último trabajo para dedicarme a diversos proyectos de crecimiento
                    personal.
                    <br/>
                    <br/>
                    <strong><a href="#3" className="p-4 bg-black text-white py-2 font-bold rounded-xl tracking-wider text-start opacity-100" style={{width: "200px"}}>Continuar leyendo</a></strong>
                </div>
            </div>
        </section>

        <section id="3">
            <div className="min-h-screen flex flex-col md:flex-row px-10 md:px-20 pt-20">
                <div className="w-full md:w-1/2 items-center" >
                    <Image src="/spot3b.jpg" alt="Historia 3" width={640} height={485}/>
                </div>
                <div className="w-full md:w-1/2 text-lg md:pr-10 opacity-80 pb-10 pt-10">
                    <strong>1994 - 1984</strong>
                    <br />
                    <br />
                    Durante esos años fui Ingeniero de Sistemas (4 años) y posteriormente Jefe de Procesamiento de Datos en
                    la Universidad de Concepción (6 años). A comienzos de los años noventa trabajé en la incorporación de esta
                    universidad como nodo secundario de la Internet en Chile. Asistí a diversos congresos en USA de la Internet
                    Society, donde -entre otros- se mostró el primer prototipo del NCSA Mosaic.
                    <br />
                    <br />
                    ** El navegador Mosaic o NCSA Mosaic
                    fue el primer navegador web gráfico disponible para visualizar páginas web en sistemas operativos como Mac,
                    Windows u otros. Este navegador web fue creado en enero de 1993, en el National Center for Supercomputing
                    Applications.
                    <br/>
                    <br />
                    <strong><a href="#1" className="p-4 bg-black text-white py-2 font-bold rounded-xl tracking-wider text-start opacity-100" style={{width: "200px"}}>ir al comienzo</a></strong>
                </div>
            </div>
        </section>

    </div>
    )
}

export default Store
