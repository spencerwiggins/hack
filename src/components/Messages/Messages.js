// @flow
import React from 'react';
import BotMessage from '../BotMessage';
import UserMessage from '../UserMessage';

const style = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    fontSize: '4vmin',
    overflow: 'scroll',
  },
};

const botNames = [
  'bot',
  'Evie',
];

export default class Messages extends React.Component {
  componentDidUpdate() {
    this.refs.bottomOfContainer.scrollIntoView(false);
  }

  render() {
    const { messages } = this.props;
    return (
      <div style={style.container}>
        {
          messages.map((m, i) => {
            const {
              sender,
              text,
            } = m;

            if (botNames.includes(sender)) {
              // Overwrite sender to have consistency (see MessageLoader@componentDidMount)
              m.sender = 'bot';
              return <BotMessage key={i} message={m} />;
            } else {
              return <UserMessage key={i} message={m} />;
            }
          })
        }
        <div ref="bottomOfContainer" className="bottomOfContainer" />
      </div>
    );
  }
};
