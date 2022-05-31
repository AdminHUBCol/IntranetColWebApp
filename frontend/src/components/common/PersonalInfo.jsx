import React from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function PersonalInfo({ participant }) {
    return (
        <div className="card">
            <div className="card_header d-flex justify-content-between align-items-center px-3 py-2">
                <h5 className='fw-normal'>Personal information</h5>
                <div className="actions me-2">
                    <Button label="AIC" className="p-button-sm p-button-outlined mx-1" />
                    <Button label="Catalog" className="p-button-sm p-button-outlined mx-1" />
                </div>
            </div>
            <div className="card_body px-1 pt-2 pb-4">
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Name</label>
                        <InputText value={participant.name} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Last name</label>
                        <InputText value={participant.lastName} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-12">
                        <label className="my-0 fs-6 text-muted">Email</label>
                        <InputText value={participant.email} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Phone number</label>
                        <InputText value={participant.phoneNumber} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Document id</label>
                        <InputText value={participant.documentId} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-12">
                        <label className="my-0 fs-6 text-muted">Adress</label>
                        <InputText value={participant.address} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}
