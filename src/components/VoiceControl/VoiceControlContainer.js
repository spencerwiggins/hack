// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import * as chatMessagesActions from '../../eil-client-chat-state/src/actions/chatMessagesActions';
import { connect } from 'react-redux';
import { VoiceControl } from './';

import type { ChatMessagesActions } from 'eil-client-chat-state/types';

type Props = {
  chatMessagesActions: ChatMessagesActions,
  voiceInteractive: boolean,
};

class VoiceControlContainer extends React.Component {
  props: Props

  handleClick = () => {
    const { chatMessagesActions } = this.props;

    chatMessagesActions.toggleCapturingAudio();
    chatMessagesActions.toggleVoiceInteractive();
  }

  render() {
    return (
      <VoiceControl
        handleClick={this.handleClick}
        voiceInteractive={this.props.voiceInteractive}
      />
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { voiceInteractive } = state.chatMessagesState;

  return {
    voiceInteractive,
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
)(VoiceControlContainer);
