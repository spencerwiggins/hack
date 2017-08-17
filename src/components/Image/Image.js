// @flow
import React from 'react';


const Image = function Image (props: Props) {
  const {
    src,
    width,
    height,
    drop = false
  } = props;
  return (
    <img src={src} width={width} height={height} style={drop && {boxShadow: '0 0 5px #ccc'}} />
  );
};

export default Image;
