import axios from 'axios'
import { Message } from '@/types'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const sendMessage = async (message: string) => {
  try {
    const response = await api.post('/chat/completions', {
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DIFY_API_KEY}`,
      },
    })

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    console.error('API Error:', error)
    return {
      success: false,
      error: 'Failed to send message',
    }
  }
}

export const createChatCompletion = async (messages: Message[]) => {
  try {
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    }))

    const response = await api.post('/chat/completions', {
      messages: formattedMessages,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DIFY_API_KEY}`,
      },
    })

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    console.error('API Error:', error)
    return {
      success: false,
      error: 'Failed to get chat completion',
    }
  }
} 