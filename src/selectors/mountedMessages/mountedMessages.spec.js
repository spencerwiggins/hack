import { expect } from 'chai';
import mountedMessages from './mountedMessages';

describe('mountedMessages', () => {
  const messages = [
    {
      text: 'Knock knock',
      sender: 'bot',
      mounted: true,
    }
  ];

  context('when message length is one', () => {
    it('should return all messages', () => {
      const state = {
        chatMessagesState: {
          messages,
        }
      };

      const result = mountedMessages(state);
      const expected = state.chatMessagesState.messages;

      expect(result).to.deep.equal(expected);
    });
  });

  context('when message length is two and first messages is mounted', () => {
    it('should return both messages', () => {
      const state = {
        chatMessagesState: {
          messages: [...messages,
            {
              text: `Who's there?`,
              sender: 'Joe',
            },
          ],
        }
      };

      const result = mountedMessages(state);
      const expected = state.chatMessagesState.messages;

      expect(result).to.deep.equal(expected);
    });
  });

  context('when message length is three and first two messages are mounted', () => {
    it('should return all messages', () => {
      const state = {
        chatMessagesState: {
          messages: [...messages,
            {
              text: `Who's there?`,
              sender: 'Joe',
              mounted: true,
            },
            {
              text: `Boo`,
              sender: 'bot',
            },
          ],
        }
      };

      const result = mountedMessages(state);
      const expected = state.chatMessagesState.messages;

      expect(result).to.deep.equal(expected);
    });
  });

  context('when message length is four and first two messages are mounted', () => {
    it('should return first three messages', () => {
      const state = {
        chatMessagesState: {
          messages: [...messages,
            {
              text: `Who's there?`,
              sender: 'Joe',
              mounted: true,
            },
            {
              text: `Boo`,
              sender: 'bot',
            },
            {
              text: `Boo Who?`,
              sender: 'Joe',
            },
          ],
        }
      };

      const result = mountedMessages(state);
      const expected = state.chatMessagesState.messages.slice(0, 3);

      expect(result).to.deep.equal(expected);
    });
  });

});
