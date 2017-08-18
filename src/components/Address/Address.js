// @flow
import React from 'react';

const _style = {
  fontSize: 14,
}

const Address = function Address (props: Props) {
  const {
    address: {
      street,
      zip,
      state,
      city,
    },
  } = props.listing;
  return (
    <div style={{..._style, ...props.style}}>
      <div>{street}</div>
      <div>{city} {state} {zip}</div>
    </div>
  );
};

export default Address;
