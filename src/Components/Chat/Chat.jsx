import React, { useState, useEffect } from 'react';
import { ChatIcon } from '@heroicons/react/outline';
import { CheckCircleIcon } from '@heroicons/react/solid';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input) {
      const newMessage = {
        id: Date.now(),
        text: input,
        sender: 'Me',
        timestamp: new Date().toLocaleString(),
        status: 'sent',
      };
      socket.emit('message', newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className='w-[80vw] mx-auto'>
      <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-full bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-12 border-b border-gray-200">
          <ChatIcon className="w-6 h-6 text-gray-400" />
          <h1 className="ml-2 font-semibold text-gray-800">Freelancer Nation</h1>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-start mb-4 space-x-2"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h2 className="text-sm font-medium text-gray-900">{message.sender}</h2>
                  <span className="ml-2 text-xs text-gray-500">{message.timestamp}</span>
                  {message.status === 'sent' && (
                    <CheckCircleIcon className="w-4 h-4 ml-2 text-green-500" />
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-800">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center justify-between h-16 p-4 border-t border-gray-200">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 mr-2 text-sm bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your message here"
          />
          <button
            type="submit"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
            Send
          </button>
        </form>
      </div>
      <div className="flex-1"></div>
    </div>
    </div>
  );
};

export default Chat;

