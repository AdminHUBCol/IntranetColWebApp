import React from 'react'
import { InputText } from 'primereact/inputtext';
import { User } from '../../mocks/User';

export default function EmploymentInfo() {
    return (
        <div className="card">
            <div className="card_header d-flex justify-content-between align-items-center px-3 py-2">
                <h5 className='fw-normal'>Employment and Payment status</h5>
            </div>
            <div className="card_body px-1 pt-2 pb-4">
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Employment status</label>
                        <InputText value={User.name} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Payment status</label>
                        <InputText value={User.lastName} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-12">
                        <label className="my-0 fs-6 text-muted">Company name</label>
                        <InputText value={User.email} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Salary</label>
                        <InputText value={User.phoneNumber} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Gross income</label>
                        <InputText value={User.documentId} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Type contract</label>
                        <InputText value={User.phoneNumber} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Job certification</label>
                        <InputText value={User.documentId} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Contract status</label>
                        <InputText value={User.phoneNumber} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Collector</label>
                        <InputText value={User.documentId} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Grace period from</label>
                        <InputText value={User.phoneNumber} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Last payment amount</label>
                        <InputText value={User.documentId} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Last payment date</label>
                        <InputText value={User.phoneNumber} className="p-inputtext-sm block w-100" disabled />
                    </div>
                    <div className="col-6">
                        <label className="my-0 fs-6 text-muted">Number of payments done</label>
                        <InputText value={User.documentId} className="p-inputtext-sm block w-100" disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}
