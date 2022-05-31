import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import "./auth.css"
import { login } from '../../services/AuthServices';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";

export default function LoginForm({ setAuthenticated }) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = () => {
        login({ email, password }, setAuthenticated)
    }

    return (
        <div className="login_form d-flex flex-column align-items-center py-4 px-3 m-auto">
            <div className='login_header mb-3'>
                <h4 className='text-center fs-5'>Login</h4>
            </div>
            <div className="login_body">
                <InputText type="text"
                    className="p-inputtext-sm block mb-2 w-100"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    value={email}
                />
                <InputText
                    className="p-inputtext-sm block mb-2 w-100"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="login_footer">
                <div className="mt-3 px-5">
                    <Button onClick={handleLogin}>Login</Button>
                </div>
            </div>
        </div>
    )
}
