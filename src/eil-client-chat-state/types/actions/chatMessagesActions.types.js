// @flow
import type { ChatMessage } from '../';

export type ChatMessagesActions = {
  addPotentialNextUserMessage: (message: ChatMessage) => ReduxStandardAction<{ message: ChatMessage }>,
  addChatMessage: (message: ChatMessage) => ReduxStandardAction<{ message: ChatMessage }>,
  emitUserChatMessage: (message: ChatMessage, conversationId: string) => ReduxThunkFunction<*>,
  addConversationId: (id: string) => ReduxStandardAction<{ id: string }>,
  toggleVoiceInteractive: () => ReduxStandardAction<Object>,
  toggleCapturingAudio: () => ReduxStandardAction<Object>,
  initChat: (options: Object) => ReduxThunkFunction<*>,
  setMessageMounted: (message: ChatMessage) => ReduxStandardAction<{ message: ChatMessage }>,
}
