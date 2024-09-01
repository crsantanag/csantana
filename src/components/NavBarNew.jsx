"use client"
import { Button} from "@nextui-org/react";
import { Image, Navbar, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../app/assets/styles.css'

export default function NavBar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Inicio",
        "Mi historia",
        "Mis proyectos",
        "Mi CV",
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
                            className="w-40 bg-black font-bold border-accent justify-center items-center border-2 rounded-xl" 
                            style={{ backgroundColor: 'black', color: '#00FF99', padding: '5px' }}
                            color={index == menuItems.length - 1 ? "warning" : "success"}
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
            
            <NavbarContent className="md:hidden" justify="end"> 
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="hidden lg:ml-0 lg:mr-10 md:flex gap-2 font-extrabold " justify="end">
                <NavbarItem>
                    <Link href="/">
                        <Button className="bg-black text-accent border-accent border-2">Inicio</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/historia">
                        <Button className="bg-black text-accent border-accent border-2">Mi historia</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyectos">
                        <Button className="bg-black text-accent border-accent border-2">Mis proyectos</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/CarlosSantana.pdf">
                        <Button className="bg-black text-accent border-accent border-2">Mi CV</Button>
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