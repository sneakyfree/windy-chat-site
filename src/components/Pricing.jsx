import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start chatting across languages today",
    features: [
      "Personal messaging",
      "5 translated messages per day",
      "1 group chat",
      "Voice notes",
      "End-to-end encryption",
      "Windy ecosystem login"
    ],
    cta: "Get Started Free",
    popular: false,
    border: "border-windy-green/10 hover:border-windy-green/30"
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Unlimited translation for power communicators",
    features: [
      "Everything in Free",
      "Unlimited translation",
      "Unlimited group chats",
      "Voice clone messaging",
      "Social feed access",
      "File sharing up to 5GB",
      "Priority delivery"
    ],
    cta: "Start Pro Trial",
    popular: true,
    border: "border-windy-green/30"
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "/user/month",
    description: "For teams that span the globe",
    features: [
      "Everything in Pro",
      "Admin controls & analytics",
      "Compliance & audit tools",
      "Custom deployment options",
      "Developer tools access",
      "Priority support",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false,
    border: "border-windy-green/10 hover:border-windy-green/30"
  }
];

function PricingCard({ tier, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative bg-windy-dark/40 backdrop-blur-sm border rounded-2xl p-8 ${tier.border} transition-all duration-500 card-shimmer ${tier.popular ? 'popular-ring' : ''}`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1.5 bg-gradient-to-r from-windy-green to-windy-darkgreen text-white text-xs font-bold rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-gray-500 text-sm">{tier.description}</p>
      </div>

      <div className="mb-8">
        <span className="text-5xl font-bold text-white">{tier.price}</span>
        <span className="text-gray-500 ml-1">{tier.period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
            <svg className="w-5 h-5 text-windy-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <motion.a
        href="#"
        className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
          tier.popular
            ? 'bg-gradient-to-r from-windy-green to-windy-darkgreen text-white cta-glow'
            : 'border-2 border-windy-green/30 text-windy-green hover:bg-windy-green/10'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {tier.cta}
      </motion.a>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Start free. Upgrade when you need unlimited translation and voice cloning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
