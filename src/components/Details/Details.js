// @flow
import React from 'react';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  bed: {
    fontSize: 12,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16
  },
}

const Details = function Details (props: Props) {
  const {
    details: { bed, bath },
    price,
  } = props.listing;
  return (
    <div style={style}>
      <div style={style.bed}>{bed} Bed {bath} Bath</div>
      <div style={style.price}>{price}</div>
    </div>
  );
};

export default Details;
