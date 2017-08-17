// @flow
import React from 'react';
// import Slider from '../Slider';
import Grid from '../Grid';
import Landlord from '../Landlord';
import Address from '../Address';
import AppBar from '../AppBar';

const style = {
  innerContainer: {
    margin: 8,
  },
  header: {
    fontFamily: 'Roboto, sans-serif',
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#86a7a2',
  },
};

const ListingDetail = function ListingDetail (props: Props) {
  const {
    listing
  } = props;
  console.log(listing);
  // console.log('listing.address', listing.address);
  return (
    <div>
      <AppBar />
      <div style={style.innerContainer}>
        <div style={style.header}>
          <div style={style.title}>{listing.title}</div>
          <Address listing={listing} />
        </div>
        <Grid />
        <Landlord />
      </div>
    </div>
  );
};

export default ListingDetail;
