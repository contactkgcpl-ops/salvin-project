import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronRight } from 'lucide-react';
import Fuse from 'fuse.js';
import { knowledgeBase } from '../../data/chatbotKnowledge';

const fuse = new Fuse(knowledgeBase, {
  keys: ['keywords', 'intent', 'answer'],
  threshold: 0.6, // Increased to make it much smarter and more forgiving
  ignoreLocation: true,
  minMatchCharLength: 2,
  findAllMatches: true
});

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: "Hi there! 👋 I'm the **Salvin AI Assistant**.\n\nHow can I help you today? You can ask me about our engineering services, industries, or how to get a quote."
  }
];

const quickReplies = [
  "Our Services",
  "Contact Info",
  "Turnkey Projects"
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const generateBotResponse = (userText) => {
    if (!userText.trim()) return "Please type a question.";
    
    const results = fuse.search(userText);
    
    if (results.length > 0) {
      return results[0].item.answer;
    }

    // Default Fallback - Made much stronger and smarter
    return "That's a great question! 🚀\n\nSince every plant setup is highly specific, I'd recommend discussing this directly with our engineering experts.\n\nCould you click **'Get a Quote'** at the top? We'll provide a detailed technical answer right away!";
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking/typing delay
    setTimeout(() => {
      const botResponseText = generateBotResponse(text);
      const newBotMsg = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500); // 1.5s typing delay for realism
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
        {/* Glow effect behind button */}
        {!isOpen && (
          <div className="absolute inset-0 bg-[#F47A20] rounded-full blur-lg opacity-40 animate-pulse"></div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
            isOpen 
              ? 'bg-white border border-gray-200 text-gray-800' 
              : 'bg-gradient-to-tr from-[#F47A20] to-[#ff9a44] text-white'
          }`}
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
                className="relative"
              >
                <MessageSquare className="w-7 h-7 fill-white" />
                <Sparkles className="w-4 h-4 absolute -top-2 -right-2 text-white animate-pulse" />
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-28 right-6 w-[360px] sm:w-[400px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden z-[60] border border-white/40 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 140px)', height: '600px' }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#0B1F35] to-[#1a3a5f] p-5 flex items-center justify-between overflow-hidden shrink-0">
              {/* Decorative background shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F47A20]/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/4"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  {/* Online indicator pulse */}
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[#0B1F35] rounded-full">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg tracking-wide flex items-center gap-2">
                    Salvin AI
                    <Sparkles className="w-4 h-4 text-[#F47A20]" />
                  </h3>
                  <p className="text-xs text-blue-200/80 font-medium">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-5 flex flex-col gap-5 bg-gradient-to-b from-gray-50/50 to-white">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0B1F35] to-[#1a3a5f] flex items-center justify-center shrink-0 mr-3 mt-auto mb-1 shadow-md">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[80%] p-4 text-[14px] leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-br from-[#F47A20] to-[#ff9a44] text-white rounded-3xl rounded-br-sm' 
                        : 'bg-white text-gray-700 border border-gray-100 rounded-3xl rounded-bl-sm whitespace-pre-wrap'
                    }`}
                  >
                    {msg.sender === 'bot' ? formatText(msg.text) : msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex w-full justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0B1F35] to-[#1a3a5f] flex items-center justify-center shrink-0 mr-3 mt-auto mb-1 shadow-md">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-3xl rounded-bl-sm px-5 py-4 shadow-sm flex items-center gap-1.5 h-[52px]">
                    <div className="w-2 h-2 bg-[#0B1F35]/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#0B1F35]/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#0B1F35]/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {!isTyping && messages[messages.length - 1]?.sender === 'bot' && (
              <div className="px-5 py-3 bg-white flex flex-wrap gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(reply)}
                    className="group flex items-center gap-1.5 px-4 py-2 bg-gray-50 hover:bg-[#F47A20]/10 border border-gray-200 hover:border-[#F47A20]/30 text-gray-600 hover:text-[#F47A20] text-[13px] font-semibold rounded-full transition-all duration-200"
                  >
                    {reply}
                    <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <form 
                className="flex items-center gap-3 bg-gray-50 p-2 rounded-full border border-gray-200 focus-within:border-[#F47A20]/50 focus-within:bg-white focus-within:shadow-[0_0_15px_rgba(244,122,32,0.1)] transition-all duration-300"
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-grow px-4 py-1.5 bg-transparent text-[14px] text-gray-700 focus:outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-[#0B1F35] text-white flex items-center justify-center shrink-0 disabled:opacity-40 disabled:bg-gray-300 disabled:text-gray-500 hover:bg-[#1a3a5f] hover:scale-105 transition-all duration-200"
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
