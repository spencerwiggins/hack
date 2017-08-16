// @flow
import React from 'react';
import BotMessage from '../BotMessage';
import UserMessage from '../UserMessage';

// import type { ChatMessage } from 'eil-client-chat-state/types';

// type Props = {
//   messages: Array<ChatMessage>,
// };

const style = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    fontSize: '3vmin',
  },
};

// TODO: revisit when we start passing in bot and agent
const botNames = [
  'bot',
  'Evie',
];

const Messages = function Messages (props: Props) {
  const { messages } = props;
  return (
    <div style={style.container}>
      {
        messages.map(m => {
          const {
            sender,
            id,
          } = m;
          if (botNames.includes(sender)) {
            // Overwrite sender to have consistency (see MessageLoader@componentDidMount)
            m.sender = 'bot';
            return <BotMessage key={id} message={m} />;
          } else {
            return <UserMessage key={id} message={m} />;
          }
        })
      }
    </div>
  );
};

export default Messages;
