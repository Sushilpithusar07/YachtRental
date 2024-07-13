// YachtCard.js
import React from 'react';
import PropTypes from 'prop-types';
import ImageSlider from './ImageSlider';

const YachtCard = ({ yacht = {} }) => {
  const { name = '', price = 0, capacity='', images = [] } = yacht;

  return (
    <div className="yacht-card">
      <ImageSlider images={images} />
      <div className="yacht-details">
        <h3>{name}</h3>
        <p>{price} AED/Hour</p>
        <p>Capacity - {capacity}</p>
        <button className="book-button">Book Yacht</button>
        <button className="book-button">More Info</button>
      </div>
    </div>
  );
};

YachtCard.propTypes = {
  yacht: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      })
    )
  })
};

export default YachtCard;
