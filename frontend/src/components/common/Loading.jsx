import React from 'react'
import "./common.css"

export default function Loading() {
    return (
        <div className='loader'>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
}
