// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as chatMessagesActions from '../../eil-client-chat-state/src/actions/chatMessagesActions';
import { Messages } from './';
import { mountedMessages } from '../../selectors';

class MessagesContainer extends React.Component {

  props: Props

  render() {
    const { messages } = this.props;

    return (
      <Messages
        messages={messages}
      />
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    // messages: mountedMessages(state)
    messages: state.chatMessagesState.messages
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
)(MessagesContainer);
