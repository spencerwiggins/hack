// @flow
import React from 'react';
import { ActionHome } from 'material-ui/svg-icons';
import Listing from '../Listing';
import {
  Link
} from 'react-router-dom'

import './Message.css';

const style = {
  container: {
    display: 'inline-block',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    boxShadow: '0 0 4px #ddd',
  },
};



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
      {
        listings && listings.map((l, i) => <Listing key={i} listing={l} />)
      }
    </div>
  );
};

export default Message;
