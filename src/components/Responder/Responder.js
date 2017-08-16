// @flow
import React from 'react';
import Input from '../Input';
import Send from '../Send';
// import VoiceControl from '../VoiceControl';
// import SpeechRecognizer from '../SpeechRecognizer';

const style = {
  container: {
    padding: 15,
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
      {/* <VoiceControl /> */}
      <Input />
      <Send />
      {/* <SpeechRecognizer
        onSpeechResults={onSpeechResults}
      /> */}
    </form>
  );
};

export default Responder;
