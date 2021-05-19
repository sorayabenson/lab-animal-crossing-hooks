import React from 'react';
import PropTypes from 'prop-types';

const VillagerDetail = ({ image, name, catchphrase, personality, species, hobby, birthday }) => (
    <section aria-label='villager'>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h3>{catchphrase}</h3>
        <p>{personality}</p>
        <p>{species}</p>
        <p>{hobby}</p>
        <p>{birthday}</p>
    </section>
)

VillagerDetail.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    hobby: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
}

export default VillagerDetail;