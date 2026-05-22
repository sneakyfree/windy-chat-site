import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const flywheelSteps = [
  {
    brand: "WindyWord.ai",
    icon: "🎤",
    verb: "You speak.",
    hook: "Voice-to-text intelligence powered by 3,500+ specialized AI models. Your voice becomes beautiful, searchable, permanent data.",
    desire: "Every meeting, every thought — captured with surgical precision.",
    link: "https://windyword.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "WindyClone.ai",
    icon: "🧬",
    verb: "You become.",
    hook: "Your voice becomes your digital twin. Voice clone, visual avatar, personality soul file. One button — and suddenly there are two of you.",
    desire: "Your clone speaks every language you don't. Yet.",
    link: "https://windyclone.com",
    color: "from-purple-500 to-pink-500",
    ring: "ring-purple-500/30"
  },
  {
    brand: "WindyTraveler.com",
    icon: "✈️",
    verb: "You explore.",
    hook: "AI travel companion with offline language packs, local deals, and real-time translation. Land anywhere, speak the language immediately.",
    desire: "Your passport doesn't expire. Neither should your words.",
    link: "https://windytraveler.com",
    color: "from-amber-500 to-teal-500",
    ring: "ring-amber-500/30"
  },
  {
    brand: "WindyTranslate.com",
    icon: "🔧",
    verb: "The engine.",
    hook: "3,500+ specialized pair-translation models. The invisible force powering every translated message in every Windy product.",
    desire: "Not general-purpose translators — purpose-built specialists.",
    link: "https://windytranslate.com",
    color: "from-indigo-500 to-blue-500",
    ring: "ring-indigo-500/30"
  },
  {
    brand: "WindyMail.ai",
    icon: "✉️",
    verb: "You send.",
    hook: "Email for humans and AI agents. Your Windy Fly agent can send, receive, and manage email — with the same translated fluency as Chat.",
    desire: "An inbox that understands every language in every thread.",
    link: "https://windymail.ai",
    color: "from-red-500 to-rose-500",
    ring: "ring-red-500/30"
  },
  {
    brand: "WindyFly.ai",
    icon: "🪰",
    verb: "You automate.",
    hook: "Your personal AI agent. It lives in Chat, sends emails, manages your calendar, and operates on your behalf — 24/7, in every language.",
    desire: "You sleep. It doesn't.",
    link: "https://windyfly.ai",
    color: "from-sky-500 to-blue-500",
    ring: "ring-sky-500/30"
  },
  {
    brand: "WindyCode.ai",
    icon: "💻",
    verb: "You create.",
    hook: "AI-native code editor. Build apps, ship features, and collaborate with your AI agent — all from one workspace.",
    desire: "The IDE that thinks alongside you.",
    link: "https://windycode.org",
    color: "from-violet-500 to-indigo-500",
    ring: "ring-violet-500/30"
  },
  {
    brand: "WindyCloud.com",
    icon: "☁️",
    verb: "You store.",
    hook: "Storage, sync, and compute for everything in the ecosystem. Your voice models, clones, chats, and files — all in one sovereign vault.",
    desire: "One vault. One account. Yours forever.",
    link: "https://windycloud.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "Eternitas.ai",
    icon: "🛡️",
    verb: "You trust.",
    hook: "AI identity and trust layer. Every agent in Chat carries an Eternitas passport — so you always know who (or what) you're talking to.",
    desire: "Trust, verified. Identity, sovereign.",
    link: "https://eternitas.ai",
    color: "from-gray-400 to-white",
    ring: "ring-gray-400/30"
  }
];

function FlywheelCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-windy-dark/40 backdrop-blur-sm border border-windy-green/10 rounded-2xl p-8 hover:border-windy-green/30 transition-all duration-500 card-shimmer ring-1 ${step.ring}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500`} />

      <div className="relative flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex items-start gap-4">
          <div className="text-5xl md:text-6xl font-black text-white/[0.06] leading-none">{String(index + 1).padStart(2, '0')}</div>
          <div className="text-5xl">{step.icon}</div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">{step.verb}</h3>
            <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.brand}</span>
          </div>
          <p className="text-gray-300 mb-3 leading-relaxed">{step.hook}</p>
          <p className="text-gray-500 text-sm italic mb-4">"{step.desire}"</p>

          <a
            href={step.link}
            className="inline-flex items-center text-sm text-windy-green/70 hover:text-windy-green transition-colors group/link"
          >
            Explore {step.brand}
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {index < flywheelSteps.length - 1 && (
        <div className="hidden md:flex justify-center mt-6 -mb-2">
          <motion.svg
            className="w-6 h-6 text-windy-green/30"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      )}
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Message. <span className="gradient-text">Nine Products. Zero Borders.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Every conversation in Windy Chat connects you to a universe of AI-powered tools.
            Here's how the Windy ecosystem turns every message into a superpower — and why{' '}
            <span className="text-white font-medium">WindyChat is the thread that connects everything</span>.
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {flywheelSteps.map((step, index) => (
            <FlywheelCard key={index} step={step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-windy-green/10 via-windy-dark/50 to-windy-darkgreen/10 border-2 border-windy-green/30 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-windy-green/5 to-transparent rounded-3xl" />

          <div className="relative">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              And It All Starts Here.
              <br />
              <span className="gradient-text">In WindyChat.</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Every agent hatched is a new chat user. Every cross-language conversation drives the ecosystem forward.
              Every voice clone, every translated email, every file stored —{' '}
              <span className="text-white font-semibold">it all flows through Chat.</span>
            </p>
            <p className="text-windy-green/60 text-sm italic">
              "The more you talk, the smarter the ecosystem gets. That's not a feature — it's a flywheel."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
