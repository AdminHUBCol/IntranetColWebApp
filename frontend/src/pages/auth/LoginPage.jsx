import React from 'react'
import LoginForm from '../../components/auth/LoginForm'

export default function LoginPage({ setAuthenticated }) {

    const loginBackground = {
        backgroundImage: "URL('/login.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    return (
        <>
            <div className="row min-vh-100">
                <div style={loginBackground} className="col-6"></div>
                <div className="col-6 d-flex flex-column align-content-center justify-content-between m-auto pb-5">
                    <header className='text-center mb-5'>
                        <h1 className='mb-0'>Holberton</h1>
                        <h5 className='mt-0'>By Coderise</h5>
                    </header>
                    <LoginForm setAuthenticated={setAuthenticated} />
                </div>
            </div>
        </>
    )
}
