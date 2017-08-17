// @flow
import React from 'react';
import Image from '../Image';
import Footer from '../Footer';
import OtherDetails from '../OtherDetails';

const style = {
  width: 350,
  height: 263,
  position: 'relative',
}

const Listing = function Listing (props: Props) {
  const {
    listing: {
      title,
      details,
      address,
      price,
      link,
      image,
    }
  } = props;
  return (
    <div className="listing" style={style}>
      <Image src={image} width="100%" drop />
      <Footer listing={props.listing} />
      <OtherDetails listing={props.listing} />
    </div>
  );
};

export default Listing;
