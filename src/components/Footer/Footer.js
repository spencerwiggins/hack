// @flow
import React from 'react';
import Address from '../Address';
import Details from '../Details';
import Distance from '../Distance';

const style = {
  background: '#333',
  opacity: '0.9',
  color: '#fff',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  // height: 50,
  padding: 15,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 14,
};


const Footer = function Footer (props: Props) {
  return (
    <div style={style}>
      {/* <Distance listing={props.listing} /> */}
      <Address listing={props.listing} />
      <Details listing={props.listing} />
    </div>
  );
};

export default Footer;
