import React from 'react'

export default function ProfileHeader({ participant }) {

    if (participant === undefined) {
        return (
            <div>
                <h3>My Profile</h3>
            </div>
        )
    }
    else {
        const { name, lastName, currentCohort, city } = participant

        return (
            <div>
                <h3>{name} {lastName} {currentCohort} {city}</h3>
            </div>
        )
    }
}
