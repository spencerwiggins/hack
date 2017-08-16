// @flow
import { createSelector } from 'reselect';

// import type { ChatMessage } from 'eil-client-chat-state/types';

const messagesSelector = (state) => state.chatMessagesState.messages;

/**
 * Return all mounted messages plus next message to be mounted
 * as to incrementally load messages via MessageLoader hoc (ellipses loader)
 */
const mountedMessagesSelector = createSelector(
  messagesSelector,
  (messages: Array<ChatMessage>) => {

  if (messages.length === 1) {
    return messages;
  }

  const lastMountedIndex = messages.filter(msg => msg.mounted).length;

  return messages.slice(0, lastMountedIndex + 1);

});

export default mountedMessagesSelector;
