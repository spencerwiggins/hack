// @flow
import React from 'react';
import Input from '../Input';
import Send from '../Send';

const style = {
  container: {
    padding: 10,
    display: 'flex',
  },
};

type Props = {
  handleSubmit: () => void,
  onSpeechResults: (arg: { interimTranscript: string, finalTranscript: string }) => void,
};

const Responder = function Responder ({
  handleSubmit,
  onSpeechResults,
}: Props) {
  return (
    <form style={style.container} onSubmit={handleSubmit}>
      <Input />
      <Send />
    </form>
  );
};

export default Responder;
