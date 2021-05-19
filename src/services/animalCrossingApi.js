import { packVillagers } from './munge-utils';

export default async function openGates() {
    const res = await fetch('https://acnhapi.com/v1/villagers/');
    const data = await res.json();
 
    const shapedData = packVillagers(Object.values(data))
    return shapedData;
}

// export default async function inviteVillager(id) {
//     try {
            // const res = await fetch(`https://acnhapi.com/v1/villagers/${id}`)
//     } catch (err) {
//         return err;
//     }
// }