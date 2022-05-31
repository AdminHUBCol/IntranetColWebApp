import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Button } from 'primereact/button';
import { getAllUsersInfo } from '../../services/AdminServices';
import { useLocation } from "wouter";
import Loading from '../common/Loading';
import { useSelector } from 'react-redux';


export default function ParticipantsTable() {
    const { participants } = useSelector(state => state.allParticipants);
    const [allData, setData] = useState(participants)

    const [location, setLocation] = useLocation();

    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState([])
    const [globalFilterValue, setGlobalFilterValue] = useState('');


    useEffect(() => {
        setLoading(true)
        getAllUsersInfo().then((resp, err) => {
            setData(resp.data)
            initFilters()

            setLoading(false)
        })
    }, [])

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filter = { ...filter };
        _filter['global'].value = value;

        setFilter(_filter);
        setGlobalFilterValue(value);
    }
    const initFilters = () => {
        setFilter({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'personalEmail': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'representative': { value: null, matchMode: FilterMatchMode.IN },
            'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            'activity': { value: null, matchMode: FilterMatchMode.BETWEEN },
            'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue('');
    }

    const renderHeader = () => {
        return (
            <div className="">
                <span className="p-input-icon-left d-flex">
                    <div className='d-flex align-items-center justify-cotent-center me-2'>
                        <InputText className='mx-1' value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                    </div>
                </span>
            </div>
        )
    }
    const header = renderHeader()
    const renderId = (rowData) => {
        const GoTo = () => {
            setLocation("/participants/" + rowData.intranetUserId)

        }
        return (
            <Button className='p-button-text' onClick={GoTo}>{rowData.intranetUserId}</Button >
        )
    }

    if (loading) { return (<Loading />) }

    return (
        <div style={{ overflowX: "scroll" }}>
            <DataTable value={allData} className="p-datatable-customers" showGridlines rows={10}
                dataKey="id" filters={filter} filterDisplay="menu" responsiveLayout="scroll"
                globalFilterFields={['intranetUserId', 'personalEmail', 'city', 'currentCohortNumber', 'currentCohortName', 'collector', 'title', 'spe_title', 'status']}
                header={header} emptyMessage="No customers found." paginator>

                <Column field="intranetUserId" header="Id" sortable body={renderId}></Column>
                <Column field="personalEmail" header="Email" sortable></Column>
                <Column field="city" header="City" sortable></Column>
                <Column field="currentCohortNumber" header="CohortNumber" sortable></Column>
                <Column field="currentCohortName" header="CohortName" sortable></Column>
                <Column field="lastsignInAt" header="lastsignInAt" sortable></Column>
                <Column field="collector" header="collector" sortable></Column>
                <Column field="spe_title" header="spe_title" sortable></Column>
                <Column field="title" header="title" sortable></Column>
                <Column field="status" header="status" sortable></Column>
                <Column field="lastSyncUNIXTIME" header="lastSyncUNIXTIME" sortable></Column>
            </DataTable>
        </div>
    )
}
