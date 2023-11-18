'use client'
import {CircularProgress} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useState } from 'react';

export default function Contacto () {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [espera, setEspera] = useState (false)
    const [exito, setExito] = useState (false)
    const [error, setError] = useState (false)

    function esperar () {
        return (
            <CircularProgress aria-label="Enviando ..." />
        );
    }


    function limpiar () {

        return
    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        setEspera (true)
        setExito (false)
        setError (false)
        onOpen()

        const formData = new FormData(event.target)

        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });
            if (!response.ok) {
                console.log("Upsss...")
                throw new Error(`Respuesta: ${response.status}`);
            }
            const responseData = await response.json();
            setEspera (false)
            setExito  (true)
            
        } catch (err) {
            console.error(err);
            setEspera (false)
            setError  (true)
        }
    }

    return (
        <div className="bg-white flex min-h-screen flex-col items-center" >

            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col w-600 text-center"  >
                    <br/>
                    <h3>¿ALGUNA PREGUNTA O COMENTARIO?</h3>
                    No dudes en contactarme. <br/>
                    Te responderé a la brevedad.
                    <br/>
                    <hr/>
                    <br/>
                    <label className="text-start" htmlFor="form-name">Su nombre </label>
                    <input id="form-name" autoComplete="name" maxLength={50} size="lg" name="name" className="py-2 text-black bg-slate-200 rounded-lg"/>
                    <br/>
                    <label className="text-start" htmlFor="form-email">Su Email:</label>
                    <input id="form-email" required autoComplete="email" maxLength={80} name="email" type="email" className="py-2 text-black bg-slate-200  rounded-lg"/>
                    <br/>
                    <label className="text-start" htmlFor="form-message">Mensaje: </label>
                    <textarea id="form-message" required name="message" rows={5} className="py-2 text-black bg-slate-200  rounded-lg"/>
                    <br/>
                </div>
                <button type="submit" className="p-2 bg-gray-800 text-white px-4 py-2 font-bold rounded-lg tracking-wider text-start" >
                    Enviar mensaje
                </button>
            </form>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Enviando mensaje a Carlos Santana</ModalHeader>
                                <ModalBody>
                                { espera     &&  <CircularProgress /> }
                                </ModalBody>
                                { exito     &&  
                                <ModalFooter className="text-start">
                                    <p>Mensaje enviado exitosamente</p>
                                    <Button onPress={onClose}>
                                        Cerrar
                                    </Button>
                                </ModalFooter> }
                                { error    &&  
                                <ModalFooter className="text-start">
                                    <p style={{}}>No se pudo enviar el mensaje <br/>
                                    inténtalo nuevamente</p>
                                    <Button color="primary" onPress={onClose}>
                                        Cerrar
                                    </Button>
                                </ModalFooter> }
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}
