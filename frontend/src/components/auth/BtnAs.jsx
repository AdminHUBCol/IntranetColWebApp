import React from 'react'
import { SplitButton } from 'primereact/splitbutton';

export default function BtnAs({ items, name, defaultAction }) {
    return (
        <>
            <SplitButton onClick={defaultAction} label={name} model={items} className="mr-2 mb-2"></SplitButton>
        </>
    )
}
