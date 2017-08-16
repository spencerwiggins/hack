import { expect } from 'chai';
import chatMessagesState from './chatMessagesState';
import * as types from '../constants/ActionTypes';

describe('chatMessagesState', () => {
  context('ADD_CHAT_MESSAGE', () => {
    context('when messages are empty', () => {
      it('should return a single message within messages', () => {
        const initialState = {
          messages: [],
        };

        const message = {
          text: 'Hello World',
          sender: 'Joe',
        };

        const action = {
          type: types.ADD_CHAT_MESSAGE,
          payload: {
            message,
          },
        };

        const expectedState = {
          messages: [message],
        };

        const state = chatMessagesState(initialState, action);

        expect(state).to.deep.equal(expectedState);
      });
    });

    context('when messages are not empty', () => {
      it('should append message to end of messages', () => {
        const initialMessage = {
          text: 'first message',
          sender: 'bot',
        };

        const initialState = {
          messages: [initialMessage],
        };

        const message = {
          text: 'Hello World',
          sender: 'Joe',
        };

        const action = {
          type: types.ADD_CHAT_MESSAGE,
          payload: {
            message,
          },
        };

        const expectedState = {
          messages: [
            initialMessage,
            message,
          ],
        };

        const state = chatMessagesState(initialState, action);

        expect(state).to.deep.equal(expectedState);
        expect(state.messages.length).to.eq(2);
        expect(state.messages[1]).to.eq(message);
      });
    });
  });

  context('ADD_POTENTIAL_NEXT_USER_MESSAGE', () => {
    context('when potentialNextUserMessage is null', () => {
      it('should set message', () => {
        const initialState = {
          potentialNextUserMessage: null,
        };

        const message = {
          text: 'That sounds cool',
          sender: 'Joe',
        };

        const action = {
          type: types.ADD_POTENTIAL_NEXT_USER_MESSAGE,
          payload: {
            message,
          },
        };

        const expectedState = {
          potentialNextUserMessage: message,
        };

        const state = chatMessagesState(initialState, action);

        expect(state).to.deep.equal(expectedState);
      });
    });

    context('when potentialNextUserMessage is already set', () => {
      it('should replace message', () => {
        const prevMessage = {
          text: 'This is my previous message',
        };

        const initialState = {
          potentialNextUserMessage: prevMessage,
        };

        const message = {
          text: 'That sounds cool',
          sender: 'Joe',
        };

        const action = {
          type: types.ADD_POTENTIAL_NEXT_USER_MESSAGE,
          payload: {
            message,
          },
        };

        const expectedState = {
          potentialNextUserMessage: message,
        };

        const state = chatMessagesState(initialState, action);

        expect(state).to.deep.equal(expectedState);
      });
    });
  });

  context('ADD_CONVERSATION_ID', () => {
    context('when conversationId is null', () => {
      it('should set message', () => {
        const initialState = {
          conversationId: null,
        };

        const id = '1234';

        const action = {
          type: types.ADD_CONVERSATION_ID,
          payload: {
            id,
          },
        };

        const expectedState = {
          conversationId: id,
        };

        const state = chatMessagesState(initialState, action);

        expect(state).to.deep.equal(expectedState);
      });
    });

    context('when conversationId is already set', () => {
      it('should replace message', () => {
        const id = '1234';

        const initialState = {
          conversationId: id,
        };

        const action = {
          type: types.ADD_CONVERSATION_ID,
          payload: {
            id,
          },
        };

        const expectedState = {
          conversationId: id,
        };

        const state = chatMessagesState(initialState, action);

        expect(state).to.deep.equal(expectedState);
      });
    });
  });

  context('TOGGLE_VOICE_INTERACTIVE', () => {
    it('should toggle voiceInteractive', () => {
      const initialState = {
        voiceInteractive: false,
      };

      const action = {
        type: types.TOGGLE_VOICE_INTERACTIVE,
      };

      const expectedState = {
        voiceInteractive: true,
      };

      const state = chatMessagesState(initialState, action);
      expect(state).to.deep.equal(expectedState);
    });
  });

  context('TOGGLE_CAPTURING_AUDIO', () => {
    it('should toggle capturingAudio', () => {
      const initialState = {
        capturingAudio: false,
      };

      const action = {
        type: types.TOGGLE_CAPTURING_AUDIO,
      };

      const expectedState = {
        capturingAudio: true,
      };

      const state = chatMessagesState(initialState, action);
      expect(state).to.deep.equal(expectedState);
    });
  });
});
