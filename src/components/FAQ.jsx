import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "Is Windy Chat free?",
    answer: "Yes! Personal messaging with end-to-end encryption is completely free. You get 5 translated messages per day, 1 group chat, and voice notes. Upgrade to Pro for unlimited translation, unlimited groups, and voice clone messaging."
  },
  {
    question: "How does the translation work?",
    answer: "Windy Chat uses 3,500+ specialist translation models — not a single general-purpose translator. Each language pair has its own dedicated AI model that understands context, idioms, and nuance. Your message is translated in real-time before it reaches the other person."
  },
  {
    question: "Can my AI agent use Windy Chat?",
    answer: "Absolutely. Your Windy Fly agent is a first-class citizen in Chat. It can send and receive messages, join group chats, translate in real-time, and handle conversations on your behalf while you're away. Every agent carries an Eternitas passport so everyone knows who they're talking to."
  },
  {
    question: "Is it really encrypted?",
    answer: "Every message, voice note, file, and video call is end-to-end encrypted by default. Nobody can read your conversations — not us, not your internet provider, nobody. Your keys, your data, your privacy."
  },
  {
    question: "How is this different from WhatsApp or Telegram?",
    answer: "WhatsApp and Telegram are messaging apps. Windy Chat is a messaging + social platform with built-in real-time translation across 100+ languages, voice cloning so you can speak in any language as yourself, AI agents that participate in chats, and deep integration with the entire Windy ecosystem."
  },
  {
    question: "Can I use my voice clone in chat?",
    answer: "Yes! With Windy Pro, you can send voice messages that are automatically translated into the recipient's language — in your own voice. It uses your Windy Clone voice model so your grandmother in Tokyo hears you, not a robot."
  },
  {
    question: "What languages are supported?",
    answer: "Windy Chat supports 100+ languages through 3,500+ specialist translation models. Every major world language is covered, plus hundreds of language pairs that most translation services don't support. New pairs are added regularly."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-windy-green/10 rounded-xl overflow-hidden hover:border-windy-green/20 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-windy-dark/30 hover:bg-windy-dark/50 transition-colors duration-200"
      >
        <span className="text-white font-semibold pr-4">{faq.question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-windy-green flex-shrink-0"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Windy Chat.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
