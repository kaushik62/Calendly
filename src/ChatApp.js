import React, { useState, useEffect, useRef } from 'react';
import './ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messageListRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([
        ...messages,
        { text: newMessage, sender: 'user', name: 'You', timestamp, status: 'delivered' } // Initial status is 'delivered'
      ]);
      setNewMessage('');

      // Simulate a response from the receiver
      setTimeout(() => {
        const responseTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'Received your message!', sender: 'receiver', name: 'Receiver', timestamp: responseTimestamp, status: 'seen' } // Simulate 'seen' status
        ]);

        // Update the status of the user's message to 'seen'
        setTimeout(() => {
          setMessages(prevMessages => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 2].status = 'seen';
            return updatedMessages;
          });
        }, 1000);
      }, 1000);
    }
  };

  useEffect(() => {
    // Auto-scroll to the bottom whenever messages are updated
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const renderTicks = (status) => {
    if (status === 'seen') {
      return <span className="message-status seen">✔✔</span>; // Blue double tick for seen
    } else if (status === 'delivered') {
      return <span className="message-status delivered">✔✔</span>; // Gray double tick for delivered
    } else {
      return <span className="message-status sent">✔</span>; // Single tick for sent
    }
  };

  return (
    <div className="chat-container">
      <div className="top-bar">
        <h2>Messaging</h2>
      </div>
      <div className="message-list" ref={messageListRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message-wrapper ${message.sender}`}>
            <div className={`message ${message.sender}`}>
              <div className="message-name">{message.name}</div>
              <div className="message-text">
                {message.text}
                {message.sender === 'user' && renderTicks(message.status)}
              </div>
              <div className="message-timestamp">{message.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
