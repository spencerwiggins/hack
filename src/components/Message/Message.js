// @flow
import React from 'react';
import { ActionHome } from 'material-ui/svg-icons';
// import {
//   Link
// } from 'react-router-dom'

// import type { ChatMessage } from 'eil-client-chat-state/types';
import './Message.css';

type Props = {
  message: ChatMessage,
  style?: Object,
};

const style = {
  container: {
    display: 'inline-block',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
};

const Image = ({src, width = '100%', height = '100%', drop = false}) => (
  <img src={src} width={width} height={height} style={drop && {boxShadow: '0 0 5px #ccc'}} />
);

const Address = ({
  address: {
    street,
    zip,
    state,
    city,
  }
}) => (
  <div style={{fontSize: 14}}>
    <div>{street}</div>
    <div>{city} {state} {zip}</div>
  </div>
)

const Listing = ({
  listing: {
    title,
    details,
    address,
    price,
    link,
    image,
  }
}) => (
  <div className="listing" style={{marginBottom: 10, width: 310}}>
    <div style={{marginBottom: 5, fontWeight: 'bold', fontSize: 16}}>{title}</div>
    {image && <Image src={image} width="100%" drop />}
    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 14}}>
      <div>
        <div>{details.bed} bed {details.bath} bath</div>
        <div>{price}</div>
      </div>
      <div>
        <Address address={address} />
      </div>
    </div>
  </div>
);

const Message = function Message (props: Props) {
  const {
    message: {
      text,
      image,
      listings,
    },
    style: propStyle = {},
   } = props;

  return (
    <div style={{...style.container, ...propStyle}}>
      {text}
      {image && <Image src={image} />}
      {
        listings && listings.map(l => <Listing listing={l} />)
      }
    </div>
  );
};

export default Message;
