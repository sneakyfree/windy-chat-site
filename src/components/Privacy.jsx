import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const privacyFeatures = [
  {
    icon: "🔐",
    title: "End-to-End Encryption",
    description: "Every message, call, and file is encrypted on your device before it leaves. Keys rotate automatically every 100 messages or 7 days. Cross-signing verifies all your devices.",
    detail: "Megolm + Olm protocols"
  },
  {
    icon: "🫥",
    title: "Zero-Knowledge Backups",
    description: "Your chat backups are encrypted with a key derived from your password using 100,000 rounds of PBKDF2. The server stores ciphertext it can never decrypt.",
    detail: "AES-256-GCM encryption"
  },
  {
    icon: "📵",
    title: "Silent Push Notifications",
    description: "Push notifications never contain your message text — by design. You see who messaged you, but the content stays encrypted until you open the app.",
    detail: "Privacy-first notification design"
  },
  {
    icon: "🔢",
    title: "Private Contact Discovery",
    description: "Your phone number never leaves your device. Contacts are discovered using one-way hashes that rotate every 7 days — the same approach used by Signal.",
    detail: "SHA-256 hash lookup"
  },
  {
    icon: "📱",
    title: "Secure Device Linking",
    description: "Link up to 5 devices with a QR code scan that uses modern key exchange. Every device is cross-verified. Revoke any device instantly.",
    detail: "X25519 key exchange"
  },
  {
    icon: "🗑️",
    title: "Your Data, Your Choice",
    description: "Delete your account and everything goes with it — messages, backups, profile, agent rooms. Full GDPR-compliant erasure with a single request.",
    detail: "Complete data erasure"
  }
];

export default function Privacy() {
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
            Privacy <span className="gradient-text">by Architecture</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We didn't bolt on privacy as a feature — we built the entire system around it.
            Eight independent services, each designed so that even we can't see your data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privacyFeatures.map((feature, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-60px" });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 30 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-green/10 rounded-2xl p-8 hover:border-windy-green/30 transition-all duration-500 card-shimmer"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-3">{feature.description}</p>
                <span className="inline-block px-3 py-1 bg-windy-green/5 border border-windy-green/10 rounded-full text-xs text-windy-green/60 font-medium">
                  {feature.detail}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-windy-dark/30 border border-windy-green/10 rounded-2xl p-8 text-center"
        >
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Windy Chat runs on <span className="text-white font-medium">8 independent microservices</span> — each with its own
            isolated database. No single service can access another's data. No shared database means no single point of compromise.
            Your messages, contacts, backups, translations, and social posts each live in their own encrypted silo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
