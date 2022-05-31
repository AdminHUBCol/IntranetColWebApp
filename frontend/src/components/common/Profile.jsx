import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../../services/AdminServices';
import AcademyInfo from './AcademyInfo';
import CoSignerInfo from './CoSignerInfo';
import EmploymentInfo from './EmploymentInfo';
import Loading from './Loading';
import PersonalInfo from './PersonalInfo';
import ProfileHeader from './ProfileHeader';

export default function Profile(props) {
    const [participant, setParticipant] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let id = props.id
        if (!id) {
            id = localStorage.getItem("USERID")
        }
        getUserInfo(id).then((resp, err) => {
            if (err) console.log(err);
            console.log(resp.data[0]);
            setParticipant(resp.data[0])
        }).finally(() => {
            setLoaded(true)
        })
    }, [props.id])
    if (!loaded) return (<Loading />)
    return (
        <div className='ps-3 pt-2 w-100'>
            <div className="mt-2">
                <ProfileHeader participant={participant} />
            </div>
            <div className="d-flex">
                <div className="col-6">
                    <div className="mt-3">
                        <PersonalInfo participant={participant} />
                    </div>
                    <div className="mt-3">
                        <CoSignerInfo participant={participant} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="me-3 mt-3">
                        <EmploymentInfo participant={participant} />
                    </div>
                    <div className="me-3 mt-3">
                        <AcademyInfo participant={participant} />
                    </div>
                </div>
            </div>

        </div>
    )
}

