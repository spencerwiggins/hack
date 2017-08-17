// @flow
import React from 'react';

const Address = function Address (props: Props) {
  const {
    address: {
      street,
      zip,
      state,
      city,
    }
  } = props.listing;
  return (
    <div style={{fontSize: 14}}>
      <div>{street}</div>
      <div>{city} {state} {zip}</div>
    </div>
  );
};

export default Address;
