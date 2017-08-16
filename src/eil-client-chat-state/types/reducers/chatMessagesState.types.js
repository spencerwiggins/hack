// @flow

export type ChatMessagesState = {
  potentialNextUserMessage: ?string,
  messages: Array<ChatMessage>,
  conversationId: ?string,
  voiceInteractive: boolean,
  capturingAudio: boolean,
}

export type ChatMessage = {
  id?: string,
  sender: string,
  text: string,
  mounted?: boolean,
}
