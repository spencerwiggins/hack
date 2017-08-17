// @flow
import React from 'react';
import Message from '../Message';

import type { ChatMessage } from 'eil-client-chat-state/types';

type Props = {
  message: ChatMessage,
};

const style = {
  message: {
    background: '#f6f6f6',
    color: '#333',
  },
};

const BotMessage = function BotMessage (props: Props) {
  const { message } = props;
  return (
    <div>
      <Message
        message={message}
        style={style.message}
      />
    </div>
  );
};

export default BotMessage;
