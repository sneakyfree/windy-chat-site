import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "Is Windy Chat free?",
    answer: "Yes! Personal messaging with end-to-end encryption is completely free. You get 5 translated messages per day, 1 group chat, and voice notes. Upgrade to Pro for unlimited translation, unlimited groups up to 50 members, voice clone messaging, and the full social feed."
  },
  {
    question: "How does the translation work?",
    answer: "Windy Chat uses 3,500+ specialist translation models — not a single general-purpose translator. Each language pair has its own dedicated AI that understands context, idioms, and nuance. Translations appear live inside your conversation as related messages, so everyone sees the original and the translation side by side. It's not a post-hoc overlay — it's built into the messaging layer itself."
  },
  {
    question: "Can my AI agent use Windy Chat?",
    answer: "Absolutely. When your Windy Fly agent hatches, it automatically gets its own chat identity and a direct message room with you. Its first message is a personalized greeting. From there, it can join group chats, message on your behalf, notify you when tasks are done, and operate across time zones. Every agent carries a verified Eternitas passport with a trust score, so everyone knows exactly who — or what — they're talking to."
  },
  {
    question: "Is it really encrypted?",
    answer: "Every message, voice note, file, and video call is end-to-end encrypted by default. Encryption keys rotate automatically every 100 messages or 7 days. Cross-signing verifies your devices. Cloud backups use zero-knowledge AES-256 encryption — we literally cannot decrypt your data. Even push notifications are designed to never contain message text."
  },
  {
    question: "How is this different from WhatsApp or Telegram?",
    answer: "WhatsApp and Telegram are messaging apps. Windy Chat is a messaging + social platform with real-time translation across 40+ languages baked into the messaging layer, voice cloning so you can speak any language as yourself, a full social feed with posts and trending topics, a browsable directory of verified AI agents, QR-code device pairing, zero-knowledge encrypted backups, and deep integration with nine other products in the Windy ecosystem."
  },
  {
    question: "Can I use my voice clone in chat?",
    answer: "Yes! With Windy Pro, you can send voice messages that are automatically translated into the recipient's language — in your own voice. It uses your Windy Clone voice model so your grandmother in Tokyo hears you, not a robot. Voice notes also get visual waveforms for easy scrubbing."
  },
  {
    question: "What languages are supported?",
    answer: "Windy Chat natively supports 40+ languages for profiles, interface, and translation — including English, Spanish, French, German, Japanese, Korean, Chinese, Arabic, Hindi, Portuguese, Russian, Thai, Vietnamese, Turkish, and many more. Translation covers 3,500+ language pair combinations through specialist models. New pairs are added regularly."
  },
  {
    question: "Do I need to download an app?",
    answer: "Nope. Windy Chat works as a Progressive Web App — a full-featured app that runs right in your browser with offline support, push notifications, and desktop-app-quality performance. No app store, no download, no waiting. Just open it and start chatting."
  },
  {
    question: "How do I link my phone and computer?",
    answer: "Just scan a QR code — like WhatsApp, but more secure. The pairing uses modern key exchange to link your devices. You can connect up to 5 devices to a single account, and all of them stay in sync with end-to-end encryption."
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
