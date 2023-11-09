
import Image from 'next/image'
import {Avatar, Navbar, NavbarContent, NavbarItem, Link, User} from "@nextui-org/react";

export default function NavBar () {
    return (
        <Navbar className="flex items-center bg-slate-200">
            <NavbarContent className="flex items-center sm:flex gap-4 space-x-4" >
                <User   
                    name="Carlos Santana"
                    description="Full Stack Developer"
                    avatarProps={{ src: "/csantana.jpg" }}
                />
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Quién soy
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/historia">
                        Mi historia
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/proyectos">
                        Mis proyectos
                    </Link>
                </NavbarItem>

            </NavbarContent>
            <div className="flex items-center bg-slate-200 sm:flex gap-4 space-x-4">
					<a href="#"> <img src="/logo-facebook.png" width="35px" alt="Logo de Facebook"/> </a>
					<a href="#"> <img src="/logo-twitter.png" width="35px" alt="Logo de Twitter"/> </a>
					<a href="#"> <img src="/logo-instagram.png" width="35px" alt="Logo de Instagram"/> </a>
                    <a href="mailto:carlos.santana.gacitua@gmail.com"> <img src="logo-email.png" width="35px" alt="Logo de eMail"/> </a>
				</div>
        </Navbar>
    );
}