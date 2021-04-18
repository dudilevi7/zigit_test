import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from '../../components/ProjectsTable/ProjectsTable';
import { LoaderSpinner } from '../../components/Exceptions/Exceptions';
import Header from '../../components/Header/Header';
import { INFO_API } from '../../constants/api/api';
import fetchData from '../../services/fetchData';
import './InfoPage.css';
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';
import PersonalTable from '../../components/PersonalTable/PersonalTable';

const InfoPage = props => {
    const [data, setData] = useState([])

    const isLoading = useSelector(state=>state.auth.isLoading)
    const token = useSelector(state => state.auth.token);
    const personalDetails = useSelector(state=>state.auth.personalDetails);

    useEffect(() => {
        const fetchInfo = async () => {
            const options = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            if (token) {
                const infoData = await fetchData(INFO_API, options);
                if (infoData)
                    setData(infoData)
            }
        }
        fetchInfo();
    }, [token])
    useEffect(()=>{
        console.log(data)
    },[data])

    if (isLoading) return <LoaderSpinner/>

    return (<div className="infoContainer">
                <Header/>
                {personalDetails.name && <PersonalTable color="whitesmoke" headerColor="#f50057" data={personalDetails}/>}
                {data && <ProjectsTable data={data} color="whitesmoke" headerColor="#3f50b5"/>}
            </div>)
}

export default InfoPage;