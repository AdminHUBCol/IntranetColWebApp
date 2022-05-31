import React from 'react'
import Sidebar from '../../components/common/Sidebar'
import Profile from '../../components/common/Profile'
import ParticipantsTable from '../../components/staff/ParticipantsTable'

export default function StaffPage() {
    

    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <div style={{ marginLeft: "80px" }} className="mt-2 w-100">
                    <h3>Participants</h3>
                    <div className="mt-3">
                        <ParticipantsTable />
                    </div>
                </div>
            </div>
        </>
    )
}
