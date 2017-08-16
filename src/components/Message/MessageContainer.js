// @flow
import React from 'react';
import {
  compose,
  bindActionCreators,
 } from 'redux';
import * as chatMessagesActions from '../../eil-client-chat-state/src/actions/chatMessagesActions';
import { connect } from 'react-redux';
import { Message } from './';
import messageLoader from '../MessageLoader';

class MessageContainer extends React.Component {
  componentDidMount() {
    const {
      message,
      chatMessagesActions,
    } = this.props;

    chatMessagesActions.setMessageMounted(message);
  }

  props: Props

  render() {
    return (
      <Message
        {...this.props}
        message={this.props.message}
      />
    );
  }
}

const mapStateToProps = (state: ReduxState, ownProps: Props) => {
  return {
    message: ownProps.message,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    chatMessagesActions: bindActionCreators(chatMessagesActions, dispatch),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  messageLoader(),
)(MessageContainer);
