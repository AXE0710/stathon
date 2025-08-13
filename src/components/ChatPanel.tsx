import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

interface ChatPanelProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({ messages, onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6 flex flex-col h-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">AI Data Assistant</h3>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <span
              className={`px-3 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 mr-2 focus:outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !isLoading) handleSend();
          }}
          disabled={isLoading}
          placeholder={isLoading ? "AI is thinking..." : "Type your message..."}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}
