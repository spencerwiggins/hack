import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from "sinon-chai";
import * as chatMessagesActions from './chatMessagesActions';
import * as types from '../constants/ActionTypes';

chai.use(sinonChai);

describe('chatMessagesActions', () => {

  const dispatch = () => {};
  const getState = () => {};

  const socket = {
    emit: sinon.spy(),
  };

  const dependencies = {
    socket,
  };

  const message = {
    text: 'Hello world',
    sender: 'Joe',
  };

  it('should dispatch "ADD_CHAT_MESSAGE" with proper payload', () => {
    const result = chatMessagesActions.addChatMessage(message);
    const expected = {
      type: types.ADD_CHAT_MESSAGE,
      payload: {
        message,
      },
    };

    expect(result).to.deep.equal(expected);
  });

  it('should emit a socket event "chat.message.add"', () => {
    const conversationId = '123';
    chatMessagesActions.emitUserChatMessage(message, conversationId)(dispatch, getState, dependencies);

    const socketEmitArgs = ['chat.message.add', conversationId, message];

    expect(socket.emit).to.have.been.calledWith(...socketEmitArgs);
  });

  it('should dispatch "ADD_POTENTIAL_NEXT_USER_MESSAGE" with proper payload', () => {
    const result = chatMessagesActions.addPotentialNextUserMessage(message);
    const expected = {
      type: types.ADD_POTENTIAL_NEXT_USER_MESSAGE,
      payload: {
        message,
      },
    };

    expect(result).to.deep.equal(expected);
  });

  it('should dispatch "ADD_CONVERSATION_ID" with proper payload', () => {
    const id = "1234";
    const result = chatMessagesActions.addConversationId(id);
    const expected = {
      type: types.ADD_CONVERSATION_ID,
      payload: {
        id,
      },
    };

    expect(result).to.deep.equal(expected);
  });

  it('should emit a socket event "chat.message.add"', () => {

    const options = {
      agent: 'knock-knock2',
      restart: true,
    };

    chatMessagesActions.initChat(options)(dispatch, getState, dependencies);
    const chatBotOptions = {...options};
    const socketEmitArgs = ['chat.init', {agent: options.agent, chatBotOptions: chatBotOptions}];

    expect(socket.emit).to.have.been.calledWith(...socketEmitArgs);
  });

  it('should dispatch "TOGGLE_VOICE_INTERACTIVE" with proper payload', () => {
    const result = chatMessagesActions.toggleVoiceInteractive();
    const expected = {
      type: types.TOGGLE_VOICE_INTERACTIVE,
    };

    expect(result).to.deep.equal(expected);
  });

  it('should dispatch "TOGGLE_CAPTURING_AUDIO" with proper payload', () => {
    const result = chatMessagesActions.toggleCapturingAudio();
    const expected = {
      type: types.TOGGLE_CAPTURING_AUDIO,
    };

    expect(result).to.deep.equal(expected);
  });

  it('should dispatch "SET_MESSAGE_MOUNTED" with proper payload', () => {
    const result = chatMessagesActions.setMessageMounted(message);
    const expected = {
      type: types.SET_MESSAGE_MOUNTED,
      payload: {
        message,
      }
    };

    expect(result).to.deep.equal(expected);
  });

});
