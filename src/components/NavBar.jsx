
import Image from 'next/image'
import {Avatar, Navbar, NavbarContent, NavbarItem, Link, User} from "@nextui-org/react";

export default function NavBar () {
    return (
        <Navbar>
            <NavbarContent className="sm:flex gap-4 flex space-x-4 items-center">
                <User   
                    name="Carlos Santana"
                    description="Full Stack Developer"
                    avatarProps={{
                        src: "/csantana.jpg"
                    }}
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
        </Navbar>
    );
}