"use client"
import Image from 'next/image'
import {User} from "@nextui-org/react";
import {Navbar, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useState } from 'react';

export default function NavBar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSoundOn, setIsSoundOn] = useState(false);

    const toggleSound = () => {
      setIsSoundOn(!isSoundOn);
    };

    const menuItems = [
        "Quién soy",
        "Mi historia",
        "Mis proyectos",
    ];

    const menuPages = [
        "/",
        "/historia",
        "/proyectos",
    ];

    return (

        <Navbar disableAnimation 
                isBordered 
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                className="bg-slate-200"> 

            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link href={`${menuPages[index]}`} className="w-full" size="lg">
                        {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

            <div >
                <User 
                    className='items-start' 
                    name="Carlos Santana"
                    description={(
                    <Link href="/" size='sm' color="white">
                        Full Stack Developer
                    </Link> )}
                    avatarProps={{ src: "/csantana.jpg" }}
                />
            </div>

            <NavbarContent className="hidden sm:flex gap-4" justify="lef">
                <NavbarItem>
                    <Link href="/" color="foreground" >
                        Quién soy
                    </Link>
                </NavbarItem>
                <NavbarItem >
                <Link href="/historia" color="foreground" >
                        Mi historia
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyectos" color="foreground" >
                        Mis proyectos
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <div className="flex items-end bg-slate-200 sm:flex gap-2 space-x-2">
                <a href="https://www.linkedin.com/in/carlos-santana-11019014/" target="_blank" rel="noopener noreferrer"> <Image src="/logo-in.jpg"  width={35} height={35} alt="Logo de Linked In"/> </a>
                <a href="https://github.com/crsantanag" target="_blank" rel="noopener noreferrer"> <Image src="/logo-github.jpg"  width={35} height={35} alt="Logo de GitHub"/> </a>
                <a href="mailto:carlos.santana.gacitua@gmail.com"> <Image src="/logo-email.jpg"  width={35} height={35} alt="Logo de eMail"/> </a>

{/*
                <button onClick={toggleSound}>
                    {isSoundOn ?  (
                        <Image src="/music.jpg" alt="Encender Sonido" width={35} height={35}/>
                        )  : (
                        <Image src="/music.jpg" alt="Apagar Sonido" width={35} height={35}/>
                    )}
                </button> 
                {isSoundOn && (
                    <audio autoPlay loop>
                        <source src="/HonorHim.wav" type="audio/wav" />
                    </audio>
                )}
*/}

            </div>

        </Navbar>



    )
}