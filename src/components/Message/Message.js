// @flow
import React from 'react';

import type { ChatMessage } from 'eil-client-chat-state/types';

type Props = {
  message: ChatMessage,
  style?: Object,
};

const style = {
  container: {
    display: 'inline-block',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
};

const Message = function Message (props: Props) {
  const {
    message,
    style: propStyle = {},
   } = props;

  return (
    <div style={{...style.container, ...propStyle}}>
      {message.text}
    </div>
  );
};

export default Message;
