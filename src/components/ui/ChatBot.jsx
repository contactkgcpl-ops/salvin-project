import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import { knowledgeBase } from '../../data/chatbotKnowledge';

const fuse = new Fuse(knowledgeBase, {
  keys: ['keywords', 'intent'],
  threshold: 0.4, 
  ignoreLocation: true,
  minMatchCharLength: 2
});

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: "Hi there! I'm the Salvin AI Assistant. How can I help you today? You can ask me about our services, industries, or contact information."
  }
];

const quickReplies = [
  "Our Services",
  "Contact Info",
  "Industries We Serve"
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateBotResponse = (userText) => {
    if (!userText.trim()) return "Please type a question.";
    
    const results = fuse.search(userText);
    
    if (results.length > 0) {
      return results[0].item.answer;
    }

    // Default Fallback
    return "I'm still learning! For specific engineering inquiries, please leave your details by clicking 'Get a Quote' above, and our technical team will contact you.";
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate typing delay
    setTimeout(() => {
      const botResponseText = generateBotResponse(text);
      const newBotMsg = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, newBotMsg]);
    }, 600);
  };

  // Helper to format bot text (bolding simple markdown-like syntax)
  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-[#0B1F35]">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Toggle Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${isOpen ? 'bg-gray-800' : 'bg-[#0B1F35]'} text-white`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-8 h-8 fill-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-6 w-[350px] sm:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden z-[60] border border-gray-100 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 140px)', height: '550px' }}
          >
            {/* Header */}
            <div className="bg-[#0B1F35] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Salvin Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-xs text-gray-300 font-medium">Online</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-[#0B1F35] flex items-center justify-center shrink-0 mr-2 mt-auto mb-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3.5 text-[14px] leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-[#F47A20] text-white rounded-br-none' 
                        : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none whitespace-pre-wrap'
                    }`}
                  >
                    {msg.sender === 'bot' ? formatText(msg.text) : msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages[messages.length - 1]?.sender === 'bot' && (
              <div className="p-3 bg-gray-50 flex flex-wrap gap-2 border-t border-gray-100">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-1.5 bg-white border border-[#F47A20] text-[#F47A20] text-xs font-semibold rounded-full hover:bg-[#F47A20] hover:text-white transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200">
              <form 
                className="flex items-center gap-2"
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1F35]/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-[#0B1F35] text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
