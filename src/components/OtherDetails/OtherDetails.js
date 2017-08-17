// @flow
import React from 'react';
import {
  ActionStars as StarIcon,
  HardwareSecurity as CertIcon
 } from 'material-ui/svg-icons';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // width: '100%',
    padding: 10,
  }
};

const OtherDetails = function OtherDetails (props: Props) {
  const {
    rating,
  } = props.listing;

  const ratingArray = new Array(rating);
  return (
    <div style={style.container}>
      <div>
        { ratingArray.fill('2').map(r => <StarIcon color="#fff" />) }
      </div>
      <CertIcon color="#fff" />
    </div>
  );
};

export default OtherDetails;
