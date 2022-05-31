import React from 'react'
import "./common.css"
import { useLocation } from "wouter";
import { Button } from 'primereact/button';
import { logout } from '../../services/AuthServices';

export default function Sidebar() {
    const [location, setLocation] = useLocation();
    const GoTo = () => {
        setLocation("/")
    }
    const handleLogout = () => {
        logout()
        window.location.reload()
    }
    return (
        <div className="d-flex flex-column vh-100 justify-content-between align-items-center py-2 fixed-top bg-white sidebar">
            <button onClick={GoTo} style={{ backgroundImage: 'URL("/logo.png")' }} className="logo" />
            <Button onClick={handleLogout} icon="pi pi-ban" className="p-button-rounded p-button-text p-button-plain" aria-label="Logout" />
        </div>
    )
}
