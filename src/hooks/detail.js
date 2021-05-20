import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { inviteVillager } from '../services/animalCrossingApi';

export const useDetail = () => {
    const [loading, setLoading] = useState(true);
    const [villager, setVillager] = useState([])

    const { id } = useParams();

    useEffect(() => {
        inviteVillager(id)
            .then(villager => setVillager(villager))
            .finally(() => setLoading(false))
    }, []);

    return { loading, villager }
}