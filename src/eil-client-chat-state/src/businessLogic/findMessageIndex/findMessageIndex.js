// @flow

import type { ChatMessage } from '../../../types';

export default function findMessageIndex(message: ChatMessage, messages: Array<ChatMessage>): number {
  return messages.findIndex(_message => _message.id === message.id);
}
