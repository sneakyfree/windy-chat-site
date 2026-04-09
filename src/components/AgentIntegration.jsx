import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const agentFeatures = [
  {
    icon: "🥚",
    title: "Hatch & Go",
    description: "When your Windy Fly agent hatches, it automatically gets a chat identity and opens a DM with you. Its first message? A personalized greeting — it knows your name."
  },
  {
    icon: "🛡️",
    title: "Verified with Eternitas",
    description: "Every agent carries a passport with a trust score and clearance level. You always know you're talking to a verified AI — never a stranger pretending to be one."
  },
  {
    icon: "👥",
    title: "Group Chat Ready",
    description: "Invite your agent to any group chat by passport number. It can participate in multilingual conversations, translate in real-time, and reply on your behalf."
  },
  {
    icon: "🔔",
    title: "Task Notifications",
    description: "Your agent pings you in Chat when it finishes a task — sent that email, booked that flight, summarized that meeting. No need to check another app."
  },
  {
    icon: "📖",
    title: "Browsable Directory",
    description: "Discover agents by category, trust score, or search. Find assistants, translators, schedulers — all verified, all ready to join your conversations."
  },
  {
    icon: "🌙",
    title: "Always On",
    description: "You sleep. It doesn't. Your agent handles conversations across time zones, translates overnight messages, and has a summary waiting when you wake up."
  }
];

function AgentChat() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const messages = [
    { sender: "agent", name: "Windy Fly", text: "Hey! I'm Fly, your Windy Fly agent. I just hatched! 🥚✨", time: "9:00 AM" },
    { sender: "user", name: "You", text: "Welcome! Can you handle the Tokyo team chat while I sleep?", time: "9:01 AM" },
    { sender: "agent", name: "Windy Fly", text: "On it. I'll translate everything to English and have a summary ready by morning. Sleep well, boss.", time: "9:02 AM" },
    { sender: "agent", name: "Windy Fly", text: "Good morning! Handled 8 messages overnight. Kenji confirmed the deadline, Yuki shared updated mockups, and I scheduled the review for Thursday. Summary in your DMs.", time: "7:14 AM" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-windy-dark/50 backdrop-blur-sm border border-windy-green/10 rounded-3xl p-6 md:p-8"
    >
      {/* Chat header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-windy-green/10">
        <div className="w-10 h-10 bg-gradient-to-br from-windy-green to-windy-teal rounded-full flex items-center justify-center text-lg border-2 border-windy-teal/30">🪰</div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white font-semibold text-sm">Windy Fly</h3>
            <span className="px-1.5 py-0.5 bg-windy-teal/10 border border-windy-teal/20 rounded text-[10px] text-windy-teal font-bold">AI AGENT</span>
          </div>
          <p className="text-gray-500 text-xs">Trust Score: 950 · Clearance: Full</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 bg-windy-green rounded-full animate-pulse"></div>
          <span className="text-xs text-windy-green/70">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.sender === 'agent' ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="max-w-xs">
              <div className="flex items-center gap-1.5 mb-1 px-1">
                <span className="text-xs font-semibold text-gray-400">{msg.name}</span>
                <span className="text-[10px] text-gray-600">{msg.time}</span>
              </div>
              <div className={`px-4 py-2.5 text-sm leading-relaxed ${
                msg.sender === 'agent'
                  ? 'bg-windy-teal/15 border border-windy-teal/20 chat-bubble-left text-gray-200'
                  : 'bg-windy-green/15 border border-windy-green/20 chat-bubble-right text-gray-200'
              }`}>
                {msg.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function AgentIntegration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your AI Agent <span className="gradient-text">Lives Here</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Windy Fly agents are first-class citizens in Chat. They hatch with their own identity, carry verified passports, and work alongside you in every conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Chat mockup */}
          <AgentChat />

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agentFeatures.map((feature, index) => {
              const cardRef = useRef(null);
              const cardInView = useInView(cardRef, { once: true, margin: "-40px" });

              return (
                <motion.div
                  key={index}
                  ref={cardRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-windy-dark/40 backdrop-blur-sm border border-windy-green/10 rounded-xl p-5 hover:border-windy-green/30 transition-all duration-500 card-shimmer"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{feature.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
