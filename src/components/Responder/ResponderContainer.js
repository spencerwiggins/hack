// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
// import * as chatMessagesActions from '../../eil-client-chat-state/src/actions/chatMessagesActions';
import * as chatMessagesActions from '../../eil-client-chat-state/src/actions/chatMessagesActions';
import { connect } from 'react-redux';
import { Responder } from './';

// import type {
//   ChatMessage,
//   ChatMessagesActions,
//  } from 'eil-client-chat-state/types';

// type Props = {
//   potentialNextUserMessage: ChatMessage,
//   chatMessagesActions: ChatMessagesActions,
//   conversationId: string,
// };

class ResponderContainer extends React.Component {
  // props: Props

  handleSubmit = (e?: Event) => {
    if (e) {
      e.preventDefault();
    }

    const {
      potentialNextUserMessage,
      chatMessagesActions,
      conversationId,
    } = this.props;

    const {
      text,
      sender,
    } = potentialNextUserMessage;

    const message = {
      text,
      sender: 'user',
    };

    // console.log('message', message);
    chatMessagesActions.addChatMessage(message);
    chatMessagesActions.nextBotMessage();
    // chatMessagesActions.setMessageMounted(message)
  }

  handleSpeechResults = ({ interimTranscript, finalTranscript }) => {
    if (finalTranscript) {
      return this.handleSubmit();
    }

    this.props.chatMessagesActions.addPotentialNextUserMessage({
      text: interimTranscript,
      sender: 'user',
    });
  }

  render() {
    return (
      <Responder
        handleSubmit={this.handleSubmit}
        onSpeechResults={this.handleSpeechResults}
      />
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  const {
    potentialNextUserMessage,
    conversationId,
  } = state.chatMessagesState;

  return {
    potentialNextUserMessage,
    conversationId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    chatMessagesActions: bindActionCreators(chatMessagesActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResponderContainer);
