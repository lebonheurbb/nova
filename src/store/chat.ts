import { create } from 'zustand'
import { Message, ChatState } from '@/types'

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  error: null,

  addMessage: (message: Message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  setLoading: (isLoading: boolean) =>
    set(() => ({
      isLoading,
    })),

  setError: (error: string | null) =>
    set(() => ({
      error,
    })),

  clearMessages: () =>
    set(() => ({
      messages: [],
      error: null,
    })),
})) 