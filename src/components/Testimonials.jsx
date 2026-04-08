import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Engineering Lead, Remote Team of 14",
    quote: "Our standup meetings used to be chaos — half the team in Seoul, half in Berlin, everyone struggling with English. Now everyone speaks their native language and Windy Chat handles the rest. Our velocity went up 30% in the first month.",
    avatar: "👨‍💻"
  },
  {
    name: "Abuela Rosa",
    role: "Grandmother, Mexico City",
    quote: "My granddaughter lives in Tokyo. She speaks Japanese now. I don't. But with Windy Chat, I send her voice messages in Spanish and she hears them in Japanese — in my voice! She says it sounds just like me. I cry every time.",
    avatar: "👵"
  },
  {
    name: "James Okafor",
    role: "Travel Photographer, Lagos",
    quote: "I was in a group chat with locals I met in Osaka. I typed in English, they typed in Japanese, someone else joined in Portuguese. Nobody skipped a beat. I've never felt so connected to strangers in a foreign country.",
    avatar: "📸"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by People Who <span className="gradient-text">Refuse Borders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real stories from real people who stopped letting language get in the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-80px" });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 30 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-windy-dark/40 backdrop-blur-sm border border-windy-green/10 rounded-2xl p-8 hover:border-windy-green/30 transition-all duration-500 card-shimmer"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.quote}"</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
