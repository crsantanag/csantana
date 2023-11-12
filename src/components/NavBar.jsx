
import Image from 'next/image'
import {Avatar, Navbar, NavbarContent, NavbarItem, Link, User} from "@nextui-org/react";

export default function NavBar () {
    return (
        <Navbar className="bg-slate-200 h-16">
            <NavbarContent className="sm:flex gap-4 flex items-centerspace-x-4" >
                <User   
                    name="Carlos Santana"
                    description={(
                    <Link href="/" size='sm' color="white">
                        Full Stack Developer
                    </Link> )}
                    avatarProps={{ src: "/csantana.jpg" }}
                />

                <NavbarItem>
                    <Link color="foreground" href="/historia">
                        Historia
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/proyectos">
                        Proyectos
                    </Link>
                </NavbarItem>

            </NavbarContent>
            <div className="flex items-center bg-slate-200 sm:flex gap-2 space-x-2">
                <a href="https://www.linkedin.com/in/carlos-santana-11019014/" target="_blank" rel="noopener noreferrer"> <Image src="/logo-in.jpg"  width={35} height={35} alt="Logo de Linked In"/> </a>
                <a href="mailto:carlos.santana.gacitua@gmail.com"> <Image src="/logo-email.png"  width={35} height={35} alt="Logo de eMail"/> </a>
			</div>
        </Navbar>
    );
}