import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import VillagerDetail from '../components/detail/VillagerDetail';
import { inviteVillager } from '../services/animalCrossingApi';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [villager, setVillager] = useState({})

    const { id } = useParams();

    useEffect(() => {
        inviteVillager(id)
            .then(villager => setVillager(villager))
            .finally(() => setLoading(false))
    });

    if (loading) return <Spinner />
    
    return (
        <main>
            <VillagerDetail {...villager}/>
        </main>
    )
}

export default Detail;