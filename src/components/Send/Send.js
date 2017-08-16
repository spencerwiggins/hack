// @flow
import React from 'react';

const style = {
  button: {
    fontSize: 14,
    background: '#2483a2',
    color: '#fff',
    border: 'none',
    outline: 'none',
    padding: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontFamily: 'sans-serif', // TODO: fontFamily across the board
  },
};

const Send = function Send () {
  return (
    <button
      style={style.button}
      type="submit"
    >
      Send
    </button>
  );
};

export default Send;
