import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import VillagerList from '../components/villagers/VillagerList';
import { openGates } from '../services/animalCrossingApi';

const Villager = () => {
    const [loading, setLoading] = useState(true); 
    const [villagers, setVillagers] = useState([]);
    
    useEffect(() => {
        openGates()
            .then(villagers => setVillagers(villagers))
            .finally(() => setLoading(false))
    }, []);

    if (loading) return <Spinner />

    return (
        <main>
            <VillagerList villagers={villagers}/>
        </main>
    )
};

export default Villager;