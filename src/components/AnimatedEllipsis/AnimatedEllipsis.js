// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';

const ellipses = keyframes`
  to {
    width: 1.25em;
  }
`;

const Rotate = styled.div`
  overflow: hidden;
  width: 0px;
  animation: ${ellipses} steps(4, end) 1000ms infinite;
`;

const AnimatedEllipsis = function AnimatedEllipsis () {
  return (
    <Rotate>&#x2026;</Rotate>
  );
};

export default AnimatedEllipsis;
