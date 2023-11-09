import Link from 'next/link'

const NotFound = () => {
    return (
        <>
            <h2>404</h2>
            <p>No pudimos encontrar la página solicitada</p>
            <Link href='/'>Vover a la página principal</Link>
        </>
    )
}

export default NotFound