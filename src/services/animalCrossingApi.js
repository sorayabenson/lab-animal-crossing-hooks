import { packVillagers, boxVillager } from './munge-utils';

export const openGates = async () => {
    const res = await fetch('https://acnhapi.com/v1/villagers/');
    const data = await res.json();
 
    //the data returned as an object with nested objects so to access the villagers I needed only the values of the object.
    const shapedData = packVillagers(Object.values(data))
    return shapedData;
}

export const inviteVillager = async (id) => {
    const res = await fetch(`https://acnhapi.com/v1/villagers/${id}`)
    const data = await res.json();
    
    const shapedData = boxVillager(data)
    return shapedData;
}
