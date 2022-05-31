import React from 'react'
import { useSelector } from 'react-redux'
import Profile from '../../components/common/Profile'
import Sidebar from '../../components/common/Sidebar'

export default function ProfilePage({ params }) {
    let { id } = params

    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <div style={{ marginLeft: "70px" }}>
                    <Profile id={id} />
                </div>
            </div>
        </>
    )
}
