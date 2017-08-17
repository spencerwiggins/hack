// @flow
import React from 'react';
import Message from '../Message';

const style = {
  container: {
    alignSelf: 'flex-end',
  },
  message: {
    background: '#74667b',
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
