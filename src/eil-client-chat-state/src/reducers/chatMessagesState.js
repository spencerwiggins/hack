// @flow
import update from 'react-addons-update';
import * as types from '../constants/ActionTypes';
// console.log(types);

import type { ChatMessagesState } from '../../types';
import { findMessageIndex } from '../businessLogic';

const initialState = {
  potentialNextUserMessage: null,
  botMessages: [
    {
      text: 'next bot message',
      sender: 'bot',
    },
    {
      text: 'yet another bot message',
      sender: 'bot',
    },
  ],
  messages: [
    {
      text: 'hello',
      sender: 'bot',
    }
  ],
  conversationId: null,
  voiceInteractive: false,
  capturingAudio: false,
};

/**
 * Chat messages state
 * @param  {ChatMessagesState} state  state of our chat messages
 * @param  {ReduxStandardAction} action action describing which update to run
 * @return {Object}        returns new state
 */
export default function chatMessagesState(state: ChatMessagesState = initialState, action: ReduxStandardAction<Object>) {
  const {
    type,
    payload={},
  } = action;

  switch (type) {
    case types.ADD_CHAT_MESSAGE: {
      return update(state, {
        messages: { $push: [payload.message] },
      });
    }

    case types.ADD_POTENTIAL_NEXT_USER_MESSAGE:
      return update(state, {
        potentialNextUserMessage: { $set: payload.message },
      });

    case types.ADD_CONVERSATION_ID:
      return update(state, {
        conversationId: { $set: payload.id },
      });

    case types.TOGGLE_VOICE_INTERACTIVE:
      return update(state, {
        voiceInteractive: { $set: !state.voiceInteractive },
      });

    case types.TOGGLE_CAPTURING_AUDIO:
      return update(state, {
        capturingAudio: { $set: !state.capturingAudio },
      });

    case types.SET_MESSAGE_MOUNTED: {
      const { message } = payload;

      const messageIndex = findMessageIndex(message, state.messages);

      const messagesCopy = state.messages.map((msg) => ({ ...msg }));

      messagesCopy[messageIndex].mounted = true;

      return update(state, {
        messages: {$set: messagesCopy}
      });
    }

    // case 'NEXT_BOT_MESSAGE': {
    //   console.log('nextBotMessage!');
    //   if (state.botMessages) {
    //
    //   }
    // }

    default:
      return state;
  }
}
