import {Card, CardHeader, CardBody, Image} from "@nextui-org/react"
import './assets/styles.css'

const HomePage = () => {
    return (
        <>
        <div style={{backgroundColor: "white"}}>
            <br/>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 px-5">
                    <Image src="/homepage.jpg" alt="Portada" width={640} height={536}/>
                </div>
                <div className="w-full md:w-1/2 px-5" >
                    <h1>Carlos Santana</h1>

                    <div className="col text-sm opacity-50" style={{fontSize: "20px"}}>
                        <br/>
                        Profesional con más de 30 años de experiencia en la dirección y gestión estratégica de pequeñas y
                        medianas empresas (entre 20 y 150 personas).
                        <br/>
                    </div>

                    <div className="col opacity-50" style={{fontSize: "14px"}}>
                        <br/>
                        <strong>Formación: </strong> <br/>
                        - Ingeniero en Computación e informática (Universidad de Concepción - 1984)<br/>
                        - Ingeniero Civil Industrial (Universidad de Concepción - 1994)<br/>
                        - Master on Business Administration - MBA (Universidad del Desarrollo - 2005)<br/>
                        - Full Stack Developer (Universidad del Desarrollo - 2023)
                        <br/>
                    </div>
                    <br/>

                    <div style={{display: "flex", paddingLeft: "0px"}}>

                        <Card className="py-3  w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                            <p className="text-tiny center font-bold">HTML CCS Landing Page <br/></p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image isZoomed alt="Card background" className="object-cover rounded-xl" src="/insignia1.jpg" width={120}  />
                            </CardBody>
                        </Card>

                        <Card className="py-3 w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                                <p className="text-tiny font-bold">CRUD DOM  Web App <br/></p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image isZoomed  alt="Card background" className="object-cover rounded-xl" src="/insignia2.jpg" width={120}/>
                            </CardBody>
                        </Card>

                        <Card className="py-3 w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                                <p className="text-tiny font-bold">API / React.js DASHBOARD <br/></p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image isZoomed alt="Card background" className="object-cover rounded-xl" src="/insignia3.jpg" width={120} />
                            </CardBody>
                        </Card>

                        <Card className="py-3 w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                                <p className="text-tiny center font-bold">React.js Firebase Restaurante App</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image isZoomed alt="Card background" className="object-cover rounded-xl" src="/insignia4.jpg" width={120} />
                            </CardBody>
                        </Card>

                        <Card className="py-3 w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                                <p className="text-tiny font-bold">e-Commerce Full Stack App <br/></p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image isZoomed alt="Card background" className="object-cover rounded-xl" src="/insignia5.jpg" width={120} />
                            </CardBody>
                        </Card>

                    </div>
                </div>
                <br/>
            </div>
        </div>
        </>
    )
}

export default HomePage