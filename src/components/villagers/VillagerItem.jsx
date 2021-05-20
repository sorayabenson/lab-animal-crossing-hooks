import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './villager-list.css';

const VillagerItem = ({ id, image, name, catchphrase }) => {
    return (
    
    <Link 
        to={`/${id}`}
        className={style.villagerItem}>
        <img src={image} alt={name} />
        <h3 aria-level='3'>{name}</h3>
        <p role='catchphrase' aria-label='villager catchphrase'>{catchphrase}</p>
    </Link>
)}

VillagerItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired,
}

export default VillagerItem