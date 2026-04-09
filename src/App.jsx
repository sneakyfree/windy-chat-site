import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import LiveTranslation from './components/LiveTranslation'
import SocialFeed from './components/SocialFeed'
import AgentIntegration from './components/AgentIntegration'
import Pricing from './components/Pricing'
import Ecosystem from './components/Ecosystem'
import Privacy from './components/Privacy'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-windy-darker text-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <LiveTranslation />
      <SocialFeed />
      <AgentIntegration />
      <Pricing />
      <Ecosystem />
      <Privacy />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
