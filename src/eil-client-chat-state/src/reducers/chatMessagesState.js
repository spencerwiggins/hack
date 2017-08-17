// @flow
import update from 'react-addons-update';
import * as types from '../constants/ActionTypes';

import type { ChatMessagesState } from '../../types';
import { findMessageIndex } from '../businessLogic';

const initialState = {
  potentialNextUserMessage: null,
  botMessages: [
    {
      text: 'We see that you have two children and are looking for a 3 bedroom.  Is that correct?',
      sender: 'bot',
    },


    {
      text: 'yet another bot message',
      sender: 'bot',
    },
  ],
  messages: [
    {
      sender: 'bot',
      listings: [
        {
          title: 'Pines Lodge',
          address: {
            street: '2342 Pine Drive',
            zip: '63105',
            state: 'MO',
            city: 'Clayton',
          },
          details: {
            bed: '3',
            bath: '2'
          },
          price: '$900/mo',
          link: '/about',
          image: '//photos.zillowstatic.com/p_h/IS2jf3s0j1zmrf1000000000.jpg',
          rating: 4,
        },
        {
          title: 'Lodge Hill',
          address: {
            street: '6762 Lodge Drive',
            zip: '63105',
            state: 'MO',
            city: 'Clayton',
          },
          details: {
            bed: '3',
            bath: '2'
          },
          price: '$850/mo',
          link: '/about',
          image: '//photos.zillowstatic.com/p_h/IS66w2m64uer5z0000000000.jpg',
          rating: 3,
        }
      ]
    },
    // {
    //   text: 'How can Gyde help you?',
    //   sender: 'bot',
    // },

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
