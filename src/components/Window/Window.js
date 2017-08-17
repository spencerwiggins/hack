// @flow
import React from 'react';
import Messages from '../Messages';
import Responder from '../Responder';
import AppBar from '../AppBar';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    fontFamily: 'sans-serif',
  },
};

const Window = function Window () {
  return (
    <div style={style.container}>
      <AppBar />
      <Messages />
      <Responder />
    </div>
  );
};

export default Window;
