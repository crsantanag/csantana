"use client"
import { Button} from "@nextui-org/react";
import { Image, Navbar, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../app/assets/styles.css'

export default function NavBar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Inicio",
        "Historia",
        "Proyectos",
        "CV",
        "Contáctame",
    ];

    const menuPages = [
        "/",
        "/historia",
        "/proyectos",
        "/CarlosSantana.pdf",
        "/contacto",
    ];

    return (

    <div>
        <Navbar isBordered 
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                height="96px"
                maxWidth="full"
                className=" bg-slate-950 text-white fixed top-0 w-full flex justify-end"> 

            <NavbarMenu className="bg-black">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} className="bg-black">
                        <Link 
                            className={index == menuItems.length - 1 ? 
                                "w-40 bg-accent text-black font-bold border-accent justify-center items-center border-2 rounded-xl" :
                                "w-40 bg-black text-accent font-bold border-accent justify-center items-center border-2 rounded-xl"}
                                style={{ padding: '5px' }}
                                href={`${menuPages[index]}`} 
                            >
                        {item}
                        {index == menuItems.length - 1 ? <FontAwesomeIcon className="w-6 h-6 pl-2" icon={faEnvelope}/> : " "}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

            <Link href="/">
                <Image className="lg:ml-10 px-0" src="/csantana.jpg" height={80} alt="Foto"/>
            </Link>
            
            <NavbarContent className="text-accent md:hidden" justify="end"> 
                <div className="flex flex-col h-14 text-center items-center ">
                    Menú
                    <NavbarMenuToggle  aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-accent border-accent rounded-full"/>
                </div>
            </NavbarContent>

            <NavbarContent className="hidden lg:ml-0 lg:mr-10 md:flex gap-2 font-extrabold " justify="end">
                <NavbarItem>
                    <Link href="/">
                        <Button className="sm:w-20 lg:w-28 bg-black text-accent border-accent border-2">Inicio</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/historia">
                        <Button className="w-28 bg-black text-accent border-accent border-2">Historia</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyectos">
                        <Button className="w-28 bg-black text-accent border-accent border-2">Proyectos</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/CarlosSantana.pdf">
                        <Button className="sm:w-20 lg:w-28 bg-black text-accent border-accent border-2">CV</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contacto">
                        <Button className="bg-accent text-black font-bold">Contáctame
                                <FontAwesomeIcon className="w-10 h-10" icon={faEnvelope}/>
                        </Button>
                    </Link>
                    </NavbarItem>
            </NavbarContent>

        </Navbar>

    </div>
    )
}