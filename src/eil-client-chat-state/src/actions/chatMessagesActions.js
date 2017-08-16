// @flow
import * as types from '../constants/ActionTypes';
// console.log(types);

import type { ChatMessage } from '../../types';

/**
 * Add chat message
 *
 * @param {ChatMessage} message
 */
export function addChatMessage(message: ChatMessage): ReduxStandardAction<{ message: ChatMessage }> {
  return {
    type: types.ADD_CHAT_MESSAGE,
    payload: {
      message,
    },
  };
}

/**
 * Emit user chat message
 *
 * The message being emitted here will be updating in the store
 * via the addChatMessage action when
 * socket.io 'chat.message.deliver' event fires
 *
 * @param {ChatMessage} message
 * @param {string} conversationId
 */
export function emitUserChatMessage(message: ChatMessage, conversationId: string): ReduxThunkFunction<*> {
  console.log('emitUserChatMessage', message);
  // return (dispatch, getState, { socket } = {}) => {
  //   socket.emit('chat.message.add', conversationId, message);
  // };
  return (dispatch) => {
    dispatch(addChatMessage(message))
  }
}

/**
 * Message that user is typing or speaking
 * that may or may not be submitted
 *
 * @param {ChatMessage} message
 */
export function addPotentialNextUserMessage(message: ChatMessage): ReduxStandardAction<{ message: ChatMessage}> {
  return {
    type: types.ADD_POTENTIAL_NEXT_USER_MESSAGE,
    payload: {
      message,
    },
  };
}

/**
 * Add conversation id
 *
 * @param {string} id
 */
export function addConversationId(id: string): ReduxStandardAction<{ id: string }> {
  return {
    type: types.ADD_CONVERSATION_ID,
    payload: {
      id,
    },
  };
}

/**
 * Init chat
 *
 * @param {Object} options
 */
export function initChat(options: { agent: string, restart: boolean}): ReduxThunkFunction<*> {
  return (dispatch, getState) => {
    const {
      agent,
      restart,
    } = options;

    // socket.emit('chat.init', {
    //   agent,
    //   chatBotOptions: {
    //     agent,
    //     restart,
    //   },
    // });
  };
}

/**
 * Toggle voice interactive
 *
 */
export function toggleVoiceInteractive(): ReduxStandardAction<Object> {
  return {
    type: types.TOGGLE_VOICE_INTERACTIVE,
  };
}

/**
 * Toggle capturing audio
 *
 */
export function toggleCapturingAudio(): ReduxStandardAction<Object> {
  return {
    type: types.TOGGLE_CAPTURING_AUDIO,
  };
}

/**
 * Set message mounted
 *
 */
export function setMessageMounted(message: ChatMessage): ReduxStandardAction<{ message: ChatMessage}> {
  console.log('setMessageMounted called', message);
  return {
    type: types.SET_MESSAGE_MOUNTED,
    payload: {
      message,
    }
  };
}
