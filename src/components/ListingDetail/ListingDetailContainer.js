// @flow
import React from 'react';
import {
  compose,
  bindActionCreators,
 } from 'redux';
import { connect } from 'react-redux';
import { ListingDetail } from './';

class ListingDetailContainer extends React.Component {
  render() {
    return (
      <ListingDetail listing={this.props.listing} />
    );
  }
}

const mapStateToProps = (state: ReduxState, ownProps: Props) => {
  const { params: { id } } = ownProps.match;
  const listing = state.chatMessagesState.listings[id - 1];

  return {
    listing
  };
};


export default compose(
  connect(mapStateToProps, null),
)(ListingDetailContainer);
