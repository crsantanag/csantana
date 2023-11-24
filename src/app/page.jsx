import { Card, CardHeader, CardBody, CardFooter, Image, Button }  from "@nextui-org/react"
import './assets/styles.css'
import 'animate.css'


const HomePage = () => {

    return (
        <>
        <div className="py-5 bg-white">
            <div className="flex flex-col md:flex-row">
                <div className="w-full px-5 md:w-1/2 md:pl-12 ">
                    <Image src="/homepage.jpg" alt="Portada" width={640} height={536}/>
                </div>
                <div className="w-full md:w-1/2 px-5 pt-5 md:pt-0 " >
                    <div className="animate__animated animate__bounceInRight text-2xl font-bold">
                        <h1>Carlos Santana</h1>
                    </div>

                    <div className="col text-xl opacity-50 tracking-wide">
                        <br/>
                        Profesional con más de 30 años de experiencia en la dirección y gestión estratégica de pequeñas y
                        medianas empresas (entre 20 y 150 personas).
                        <br/>
                    </div>

                    <div className="col opacity-50 text-sm" >
                        <br/>
                        <strong>Formación: </strong> <br/>
                        - Ingeniero en Computación e informática (Universidad de Concepción - 1984)<br/>
                        - Ingeniero Civil Industrial (Universidad de Concepción - 1994)<br/>
                        - Master on Business Administration - MBA (Universidad del Desarrollo - 2005)<br/>
                        - Full Stack Developer (Universidad del Desarrollo - 2023)
                        <br/>
                    </div>
                    <br/>

                    <div className="flex px-0" >
                        <Card className="py-3  w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                            <p className="text-tiny center font-bold">HTML CCS Landing Page <br/></p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 items-center">
                                <a href="https://www.credly.com/badges/f508f9d3-7fae-41a0-a063-f58b0dcbeec0/linked_in_profile" target="_blank" rel="noopener noreferrer">
                                    <Image isZoomed alt="Card background" className="object-cover rounded-xl" src="/insignia1.jpg" width={120} />
                                </a>
                            </CardBody>
                        </Card>

                        <Card className="py-3 w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                                <p className="text-tiny font-bold">CRUD DOM  Web App <br/></p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <a href="https://www.credly.com/badges/62d65666-6fa6-429e-b4b4-22edf6f53547/public_url" target="_blank" rel="noopener noreferrer">
                                    <Image isZoomed  alt="Card background" className="object-cover rounded-xl" src="/insignia2.jpg" width={120}/>
                                </a>
                            </CardBody>
                        </Card>

                        <Card className="py-3 w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                                <p className="text-tiny font-bold">API / React.js DASHBOARD <br/></p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <a href="https://www.credly.com/badges/d0862787-41a8-469a-b311-957781ca3320/public_url" target="_blank" rel="noopener noreferrer">
                                    <Image isZoomed alt="Card background" className="object-cover rounded-xl" src="/insignia3.jpg" width={120} />
                                </a>
                            </CardBody>
                        </Card>

                        <Card className="py-3 w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                                <p className="text-tiny center font-bold">React.js Firebase Restaurante App</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <a href="https://www.credly.com/badges/27ed6a80-62c9-4a0c-bb94-28828725638b/public_url" target="_blank" rel="noopener noreferrer">
                                    <Image isZoomed alt="Card background" className="object-cover rounded-xl" src="/insignia4.jpg" width={120} />
                                </a>
                            </CardBody>
                        </Card>

                        <Card className="py-3 w-1/5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center h-20">
                                <p className="text-tiny font-bold">e-Commerce Full Stack App <br/></p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <a href="https://www.credly.com/badges/8a82a0b4-c6d2-4f7c-b138-44647fdc70d3/public_url" target="_blank" rel="noopener noreferrer">
                                    <Image isZoomed alt="Card background" className="object-cover rounded-xl" src="/insignia5.jpg" width={120} />
                                </a>
                            </CardBody>
                        </Card>

                    </div>
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export default HomePage