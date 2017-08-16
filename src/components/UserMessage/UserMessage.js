// @flow
import React from 'react';
import Message from '../Message';

// import type { ChatMessage } from 'eil-client-chat-state/types';
//
// type Props = {
//   message: ChatMessage,
// };

const style = {
  container: {
    alignSelf: 'flex-end',
  },
  message: {
    background: '#2483a2',
    color: '#fff',
  },
};

const UserMessage = function UserMessage (props: Props) {
  const { message } = props;
  return (
    <div style={style.container}>
      <Message
        message={message}
        style={style.message}
      />
    </div>
  );
};

export default UserMessage;
