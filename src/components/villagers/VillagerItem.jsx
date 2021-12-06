import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VillagerItem = ({ id, image, name, catchphrase }) => {
    return (
    
    <Link to={`/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{catchphrase}</p>
    </Link>
)}

VillagerItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired,
}

export default VillagerItem