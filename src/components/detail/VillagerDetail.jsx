import React from 'react';
import PropTypes from 'prop-types';
import style from './villager-detail.css';

const VillagerDetail = ({ image, name, catchphrase, personality, species, hobby, birthday }) => (
    <section 
        className={style.villager}
        aria-label='villager detail'>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h3>"{catchphrase}"</h3>
        <p>personality: {personality}</p>
        <p>species: {species}</p>
        <p>hobby: {hobby}</p>
        <p>birthday: {birthday}</p>
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