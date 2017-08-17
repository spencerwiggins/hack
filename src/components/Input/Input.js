// @flow
import React from 'react';

type Props = {
  onInputChange: (e: SyntheticInputEvent) => void,
};

const style = {
  container: {
    flex: 1,
    display: 'flex',
  },
  input: {
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    border: '1px solid #86a7a2',
    outline: 'none',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    fontFamily: 'sans-serif',// TODO: fontFamily across the board
  },
};

const Input = function Input ({
  onInputChange,
}: Props) {
  return (
    <div style={style.container}>
      <input
        type="text"
        onChange={onInputChange}
        style={style.input}
      />
    </div>
  );
};

export default Input;
