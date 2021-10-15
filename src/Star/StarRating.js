import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) => {
  const createArray = (length) => [...Array(length)];
  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      {/* <p>
        {selectedStars} of {totalStars} stars
      </p> */}
    </div>
  );
};

export default StarRating;
