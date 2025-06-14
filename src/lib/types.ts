/**
 * Keep in mind
 * - types should be unified across different messengers
 */

export interface Media {
  typeRaw: string;
  side?: string;
  resolution?: string;
}

export type Reactions = {
  emoji: string;
  count: number;
}[];

export interface Message {
  id: string;
  text: string;
  date: Date;
  senderName: string;
  media: Media[];
  reactions: Reactions;
  replyTo: {
    messageId: string;
  };
}

export interface Chat {
  messages: Message[];
}

export interface ChatStats {
  topTexts: {
    text: string;
    usage: number;
  }[];
  topWords: {
    word: string;
    usage: number;
  }[];
  topReactions: {
    emoji: string;
    usage: number;
  }[];
  topSenders: {
    name: string;
    messages: number;
  }[];
}
