import React from 'react';
import PropTypes from 'prop-types';
import VillagerItem from './VillagerItem';
import './villager-list.css';

const VillagerList = ({ villagers }) => (
    <ul aria-label='villagers'>
        {villagers.map((villager) => {
            return (<li 
                aria-label='villager'
                key={villager.name}
            >
                <VillagerItem {...villager}/>
            </li>)
        })}
    </ul>
)

VillagerList.propTypes = {
    villagers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            catchphrase: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default VillagerList;