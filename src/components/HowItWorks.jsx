import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Sign Up in Seconds",
    description: "Create your free Windy account. One login gives you access to Chat, Mail, Cloud, and the entire ecosystem.",
    icon: "✨"
  },
  {
    number: "02",
    title: "Start a Conversation",
    description: "Message anyone — friends, family, colleagues, or AI agents. Group chats, voice notes, video calls. It all just works.",
    icon: "💬"
  },
  {
    number: "03",
    title: "Break Every Language Barrier",
    description: "Toggle real-time translation on any chat. Your messages are automatically translated for each participant — in your voice if you want.",
    icon: "🌐"
  },
  {
    number: "04",
    title: "Let Your Agent Handle It",
    description: "Your Windy Fly agent joins the chat. It can reply when you're busy, translate in real-time, and manage conversations across time zones.",
    icon: "🚀"
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Download to <span className="gradient-text">Global Conversation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Four steps. Zero language barriers. It's that simple.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const stepRef = useRef(null);
            const stepInView = useInView(stepRef, { once: true, margin: "-80px" });

            return (
              <motion.div
                key={index}
                ref={stepRef}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={stepInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 bg-windy-dark/40 backdrop-blur-sm border border-windy-green/10 rounded-2xl p-8 hover:border-windy-green/30 transition-all duration-500 card-shimmer"
              >
                <div className="flex-shrink-0 flex items-center gap-4">
                  <span className="text-5xl font-black text-windy-green/10">{step.number}</span>
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
