'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareFacebook, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return (

    <footer className="py-5 bg-black text-accent">

        <div className="w-full h-full flex flex-col sm:flex-row items-center align-bottom px-2 md:px-10 ">
            <div className="md:w-1/2 align-bottom items-center md:text-right h-10" >
                © 2023
            </div>
            <div className="flex w-full md:w-1/2 justify-center md:justify-end items-end h-12">
                <FontAwesomeIcon className="w-10 h-10 mr-1" icon={faSquareGithub} />
                <FontAwesomeIcon className="w-10 h-10 mx-1" icon={faSquareFacebook} />
                <FontAwesomeIcon className="w-10 h-10 mx-1" icon={faSquareInstagram} />
                <FontAwesomeIcon className="w-10 h-10 ml-1" icon={faLinkedin} />
            </div>
        </div>

    </footer>
    
    )
}