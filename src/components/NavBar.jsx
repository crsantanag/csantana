"use client"
import Image from 'next/image'
import {Avatar, User} from "@nextui-org/react";
import {Navbar, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useState } from 'react';

export default function NavBar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <Navbar disableAnimation isBordered className="bg-slate-200">

            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <div className="hidden md:block">
                <User 
                    className='items-center' 
                    name="Carlos Santana G"
                    description={(
                    <Link href="/" size='sm' color="white">
                    Full Stack Developer
                </Link> )}
                avatarProps={{ src: "/csantana.jpg" }}
            />
            </div>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
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

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            href={`${menuPages[index]}`}
                            className="w-full"
                            size="lg"
                        >
                        {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

            <div className="flex items-end bg-slate-200 sm:flex gap-2 space-x-2">
                <a href="https://www.linkedin.com/in/carlos-santana-11019014/" target="_blank" rel="noopener noreferrer"> <Image src="/logo-in.jpg"  width={35} height={35} alt="Logo de Linked In"/> </a>
                <a href="https://github.com/crsantanag" target="_blank" rel="noopener noreferrer"> <Image src="/logo-github.jpg"  width={35} height={35} alt="Logo de GitHub"/> </a>
                <a href="mailto:carlos.santana.gacitua@gmail.com"> <Image src="/logo-email.png"  width={35} height={35} alt="Logo de eMail"/> </a>
            </div>

        </Navbar>



    )
}