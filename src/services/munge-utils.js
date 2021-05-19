export function packVillagers(villagers) {
    const shapedData = villagers.map(villager => {
        return {
            id: villager.id,
            name: villager['name']['name-USen'],
            image: villager.image_uri,
            icon: villager.icon_uri,
            catchphrase: villager['catch-phrase'],
            personality: villager.personality,
            species: villager.species,
            hobby: villager.hobby,
            birthday: villager['birthday-string'],
        }
    })

    return shapedData;
}