'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { useChatStore } from '@/store/chat'
import { Message } from '@/types'
import { sendMessage } from '@/lib/api'

export function ChatContainer() {
  const { messages, addMessage, isLoading, setLoading, setError } = useChatStore()
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: Date.now()
    }

    addMessage(userMessage)
    setInput('')
    setLoading(true)

    try {
      const response = await sendMessage(input)
      
      if (response.success && response.data) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response.data.choices[0].message.content,
          role: 'assistant',
          timestamp: Date.now()
        }
        addMessage(aiMessage)
      } else {
        setError('Failed to get response from AI')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred while sending message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSend()}
            placeholder="输入消息..."
            className="flex-1 rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            className={`rounded-lg p-2 text-white ${
              isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={isLoading}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
} 