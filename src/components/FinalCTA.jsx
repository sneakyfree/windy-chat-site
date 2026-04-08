import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Talk to
            <br />
            <span className="gradient-text">Anyone on Earth?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            No language barriers. No compromises on privacy. No limits on who you can connect with.
            Join the messaging revolution — free forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#pricing"
              className="px-12 py-4 bg-gradient-to-r from-windy-green to-windy-darkgreen text-white rounded-lg font-semibold text-lg cta-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Chatting — It's Free
            </motion.a>
            <motion.a
              href="#features"
              className="px-8 py-4 border-2 border-windy-green/40 text-windy-green rounded-lg font-semibold text-lg hover:bg-windy-green/10 hover:border-windy-green transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See All Features
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
