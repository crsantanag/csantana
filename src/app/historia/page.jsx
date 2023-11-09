
import Image from 'next/image'

const Store = () => {
    return (
        <>
        <section id="1">
            <div className="flex" style={{backgroundColor: "white"}}>
                <div className="flex">
                    <div className="w-1/2 px-20" style={{fontSize: "20px"}}>
                        <br />
                        <h2>Por qué Full Stack Developer</h2>
                        <br />
                        Durante el año 2023 comencé a actualizar mis conocimientos en el área informática, decidiéndome por
                        el desarrollo de aplicaciones web como una forma de aportar al desarrollo de las empresas e instituciones
                        con una mirada hacia los clientes, de lo que desean y -a mi parecer- de lo que necesitan.
                        <br />
                        <br />
                        Adicionalmente, comienzo con el desarrollo de una escuela de programación para jóvenes, de manera que comiencen
                        con herramientas digitales que les permitan el desarrollo de aplicaciones web.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <a href="#2" className="" style={{width: "200px"}}>Continuar leyendo</a>
                    </div>
                    <div className="w-1/2 pr-20">
                        <br/>
                        <Image src="/spot1.jpg" alt="Historia 1" width={640} height={620}/>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </section>

        <section id="2">
            <br/>
            <br/>
            <br/>
            <div className="flex">
                <div className="flex ">
                <div className="w-1/2 px-20" style={{fontSize: "20px"}}>
                        <br/>
                        <h2>2021 - 1994</h2>
                        <br />
                        Durante este periodo me dediqué a la gestión de pequeñas y medianas empresas, siendo gerente de operaciones,
                        de desarrollo y gerente general de diferentes empresas de servicios en las áreas de transporte, obras civiles,
                        minería (6 años), logística (2 años), tecnologías de la información (8 años) y deportes y recreación (11 años).
                        En el año 2021 renuncié voluntariamente a mi último trabajo para dedicarme a diversos proyectos de crecimiento
                        personal.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <a href="#3" className="" style={{width: "200px"}}>Continuar leyendo</a>
                    </div>
                    <div className="w-1/2 pr-20">
                        <br/>
                        <Image src="/spot2.jpg" alt="Historia 2" width={640} height={620}/>
                        <br/>
                    </div>
                </div>
            </div>
        </section>

        <section id="3" style={{backgroundColor: "white"}}>
            <br/>
            <br/>
            <br/>
            <div className="flex" >
                <div className="flex ">
                    <div className="w-1/2 px-20" style={{fontSize: "20px"}}>
                        <br/>
                        <h2>1994 - 1984</h2>
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
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <a href="#1" className="" style={{width: "200px"}}>Subir</a>
                    </div>
                    <div className="w-1/2 pr-20">
                        <br/>
                        <Image src="/spot3.jpg" alt="Historia 3" width={640} height={620}/>
                        <br/>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Store
