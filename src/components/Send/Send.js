// @flow
import React from 'react';
import { ContentSend } from 'material-ui/svg-icons';

const style = {
  button: {
    fontSize: 14,
    background: '#86a7a2',
    color: '#fff',
    border: 'none',
    outline: 'none',
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontFamily: 'sans-serif',
  },
};

const Send = function Send () {
  return (
    <button
      style={style.button}
      type="submit"
    >
      <ContentSend color="#fff" />
    </button>
  );
};

export default Send;
