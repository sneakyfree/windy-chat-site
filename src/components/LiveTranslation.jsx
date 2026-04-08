import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const chatMessages = [
  {
    sender: "Sarah",
    flag: "🇺🇸",
    original: "Hey! Are we still meeting for coffee tomorrow?",
    translated: "ねえ！明日まだコーヒーに会える？",
    translatedLang: "Japanese",
    side: "left",
    color: "bg-windy-green/20 border-windy-green/20"
  },
  {
    sender: "Yuki",
    flag: "🇯🇵",
    original: "もちろん！午後3時はどう？",
    translated: "Of course! How about 3 PM?",
    translatedLang: "English",
    side: "right",
    color: "bg-windy-teal/20 border-windy-teal/20"
  },
  {
    sender: "Carlos",
    flag: "🇲🇽",
    original: "¡Puedo unirme también! Llego un poco tarde del trabajo.",
    translated: "I can join too! I'll be a bit late from work.",
    translatedLang: "English",
    side: "left",
    color: "bg-emerald-500/20 border-emerald-500/20"
  },
  {
    sender: "Sarah",
    flag: "🇺🇸",
    original: "Perfect! See you both there 💚",
    translated: "完璧！二人ともそこで会おう 💚",
    translatedLang: "Japanese",
    side: "left",
    color: "bg-windy-green/20 border-windy-green/20"
  }
];

function ChatBubble({ message, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const isRight = message.side === "right";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRight ? 30 : -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-sm ${isRight ? 'items-end' : 'items-start'}`}>
        <div className="flex items-center gap-2 mb-1.5 px-1">
          <span className="text-sm">{message.flag}</span>
          <span className="text-xs font-semibold text-gray-400">{message.sender}</span>
        </div>
        <div className={`${message.color} border backdrop-blur-sm px-5 py-3 ${isRight ? 'chat-bubble-right' : 'chat-bubble-left'}`}>
          <p className="text-white text-sm leading-relaxed">{message.original}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isInView ? { opacity: 1, height: 'auto' } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
          className={`mt-1.5 px-4 py-2 bg-windy-dark/60 border border-windy-green/5 rounded-xl ${isRight ? 'chat-bubble-right' : 'chat-bubble-left'}`}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-1.5 h-1.5 bg-windy-green rounded-full animate-pulse"></div>
            <span className="text-[10px] text-windy-green/70 font-medium uppercase tracking-wider">Translated to {message.translatedLang}</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{message.translated}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function LiveTranslation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Translation <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Three friends. Three languages. One conversation. Every message translated instantly — nobody misses a word.
          </p>
        </motion.div>

        <div className="bg-windy-dark/50 backdrop-blur-sm border border-windy-green/10 rounded-3xl p-6 md:p-10">
          {/* Chat header */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-windy-green/10">
            <div className="w-10 h-10 bg-gradient-to-br from-windy-green to-windy-teal rounded-full flex items-center justify-center text-lg">💬</div>
            <div>
              <h3 className="text-white font-semibold text-sm">Coffee Plans</h3>
              <p className="text-gray-500 text-xs">Sarah, Yuki, Carlos — 3 languages, 1 chat</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-2 h-2 bg-windy-green rounded-full animate-pulse"></div>
              <span className="text-xs text-windy-green/70">Live Translation On</span>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-6">
            {chatMessages.map((message, index) => (
              <ChatBubble key={index} message={message} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
