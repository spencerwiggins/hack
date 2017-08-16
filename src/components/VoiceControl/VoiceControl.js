// @flow
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  background: ${props => props.voiceInteractive ? '#ce1a1a' : '#a0a0a0'};
  border: none;
  outline: none;
  border-radius: 5px;
  margin-right: 1%;
  font-family: 'sans-serif';
`;

type Props = {
  handleClick: () => void,
  voiceInteractive: boolean,
};

const VoiceControl = function VoiceControl ({
  handleClick,
  voiceInteractive,
}: Props) {

  return (
    <Button
      type="button"
      voiceInteractive={voiceInteractive}
      onTouchTap={handleClick}
      onClick={handleClick}
    >
      {!voiceInteractive ? `Mic` : `Mute`}
    </Button>
  );
};

export default VoiceControl;
