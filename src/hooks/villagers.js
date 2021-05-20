import { useState, useEffect } from 'react';
import { openGates } from '../services/animalCrossingApi';

export const useVillagers = () => {
    const [loading, setLoading] = useState(true); 
    const [villagers, setVillagers] = useState([]);
    
    useEffect(() => {
        openGates()
            .then(villagers => setVillagers(villagers))
            .finally(() => setLoading(false))
    }, []);

    return { loading, villagers };
}