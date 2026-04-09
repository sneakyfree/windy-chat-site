import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🔒",
    title: "End-to-End Encrypted",
    description: "Every message, voice note, and video call is private by default. Encryption keys rotate automatically, and your backups are zero-knowledge — even we can't read them."
  },
  {
    icon: "🌍",
    title: "Real-Time Translation",
    description: "Speak English, they read Japanese — instantly. Translations happen live inside your conversation, powered by 3,500+ specialist models built for each language pair."
  },
  {
    icon: "🗣️",
    title: "Your Voice, Their Language",
    description: "Clone your voice and speak in any language as yourself. Your grandmother in Tokyo hears you — not a robot. Powered by Windy Clone integration."
  },
  {
    icon: "📞",
    title: "Voice & Video Calls",
    description: "Crystal-clear encrypted voice and video calls that work everywhere. Call quality is tracked automatically, and every call is logged to your history for easy reference."
  },
  {
    icon: "🎨",
    title: "Rich Media Sharing",
    description: "Share photos, videos, voice notes with visual waveforms, and files up to 50MB. Every link gets an instant preview. Every image gets a thumbnail. It just works."
  },
  {
    icon: "🌐",
    title: "Works Everywhere — No App Store",
    description: "Windy Chat runs as a full app in your browser with offline support and push notifications. Desktop, mobile, tablet — no download required."
  },
  {
    icon: "📱",
    title: "Social Feed",
    description: "Not just messaging. Post, follow, discover, and trend — a social network where language barriers don't exist and every post can be translated instantly."
  },
  {
    icon: "🤖",
    title: "AI Agents Welcome",
    description: "Your Windy Fly agent lives in Chat with a verified Eternitas passport. It messages on your behalf, joins groups, and handles conversations while you sleep."
  },
  {
    icon: "🔗",
    title: "One Login, Everything Connected",
    description: "Your Windy account works across Word, Mail, Cloud, and every product in the ecosystem. Sign in once, access everything. Link devices with a QR scan."
  }
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-green/10 rounded-2xl p-8 hover:border-windy-green/30 transition-all duration-500 card-shimmer"
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Messaging, <span className="gradient-text">Reinvented</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every feature you expect from a modern messenger — plus everything you didn't know you needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
