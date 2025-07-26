export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'GPT-4o',
    description: 'High-intelligence model for complex tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'o1',
    description: 'Advanced reasoning model for complex problem solving',
  },
];
