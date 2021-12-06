import React from 'react';
import Spinner from '../components/Spinner';
import VillagerList from '../components/villagers/VillagerList';
import { useVillagers } from '../hooks/villagers';

const Villager = () => {
    const { loading, villagers } = useVillagers();

    if (loading) return <Spinner />

    return (
        <main>
            <VillagerList villagers={villagers}/>
        </main>
    )
};

export default Villager;