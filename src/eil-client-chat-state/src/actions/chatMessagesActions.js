// @flow
import * as types from '../constants/ActionTypes';
// console.log(types);

// import type { ChatMessage } from '../../types';

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

export function nextBotMessage(): ReduxStandardAction<{ message: ChatMessage }> {
  return (dispatch, getState) => {
    const { botMessages } = getState().chatMessagesState;
    if (botMessages && botMessages.length) {
      const message = botMessages.shift();
      dispatch(addChatMessage(message));
    }
  }
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
  return {
    type: types.SET_MESSAGE_MOUNTED,
    payload: {
      message,
    }
  };
}
