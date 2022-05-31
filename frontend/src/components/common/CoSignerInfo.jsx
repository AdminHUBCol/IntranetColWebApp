import React from 'react'
import { InputText } from 'primereact/inputtext';
import { User } from '../../mocks/User';

export default function CoSignerInfo() {
    return (
        <div className="card">
            <div className="card_header d-flex justify-content-between align-items-center px-3 py-2">
                <h5 className='fw-normal'>CoSigner information</h5>
            </div>
            <div className="card_body px-1 pt-2 pb-4">
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Name</label>
                        <InputText value={User.name} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Last name</label>
                        <InputText value={User.lastName} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-12">
                        <label className="my-0 fs-6 text-muted">Email</label>
                        <InputText value={User.email} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Phone number</label>
                        <InputText value={User.phoneNumber} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Document id</label>
                        <InputText value={User.documentId} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-12">
                        <label className="my-0 fs-6 text-muted">Adress</label>
                        <InputText value={User.address} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Date of birth</label>
                        <InputText value={User.phoneNumber} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Gender</label>
                        <InputText value={User.documentId} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}
