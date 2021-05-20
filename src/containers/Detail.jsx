import React from 'react';
import Spinner from '../components/Spinner';
import VillagerDetail from '../components/detail/VillagerDetail';
import { useDetail } from '../hooks/detail';


const Detail = () => {
    const {loading, villager} = useDetail();

    if (loading) return <Spinner />
    
    return (
        <main>
            <VillagerDetail {...villager}/>
        </main>
    )
}

export default Detail;   