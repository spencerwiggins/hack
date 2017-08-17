// @flow
import React from 'react';
import Image from '../Image';
import Footer from '../Footer';
import OtherDetails from '../OtherDetails';
import { Link } from 'react-router-dom';

const style = {
  width: 350,
  height: 263,
  position: 'relative',
  display: 'block',
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
    <Link to={link} style={style} className="listing">
      <Image src={image} width="100%" drop />
      <Footer listing={props.listing} />
      <OtherDetails listing={props.listing} />
    </Link>
  );
};

export default Listing;
