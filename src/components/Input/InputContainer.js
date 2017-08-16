// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import * as chatMessagesActions from '../../eil-client-chat-state/src/actions/chatMessagesActions';
import { connect } from 'react-redux';
import { Input } from './';

import type { ChatMessagesActions } from 'eil-client-chat-state/types';

type Props = {
  chatMessagesActions: ChatMessagesActions,
};

class InputContainer extends React.Component {
  props: Props

  handleInputChange = (e: SyntheticInputEvent) => {
    const { value: text } = e.target;
    this.props.chatMessagesActions.addPotentialNextUserMessage({
      text,
      sender: 'user',
    });
  }

  render () {
    return <Input onInputChange={this.handleInputChange} />;
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    chatMessagesActions: bindActionCreators(chatMessagesActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputContainer);
