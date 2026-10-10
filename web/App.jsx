import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Award,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Compass,
  Map,
  HardHat,
  PenTool,
  Building2,
  Maximize2,
  ChevronRight,
  Send,
  ShieldCheck,
  Ruler,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

/**
 * ==============================================================================
 * SATYA BUILDERS AND COLONISERS - LUXURY REAL ESTATE SINGLE PAGE APPLICATION
 * ==============================================================================
 * Established in 1999 | Sector - 2, Channi Himmat, Jammu, J&K
 * Founder: Th. Pushpinder Singh Charak
 * Official Email: satyabuildersandcolonisers@gmail.com
 *
 * ASSET INJECTION GUIDE:
 * - Logo: Place your fitted logo at `./assets/logo-fitted.png`
 * - Founder Portrait: Place Pushpinder Ji's photo at `./assets/founder.jpeg`
 * - Project 1 (Completed): Place photo at `./assets/project-villa.png`
 * - Project 2 (Upcoming, Peehar Villas): `./assets/peehar-*.jpeg`
 * - Hero Background: Place background skyline at `./assets/hero-bg.jpg`
 * ==============================================================================
 */

// Local Asset Paths
const ASSETS = {
  logo: './assets/logo-fitted.png',
  founder: './assets/founder.jpeg',
  heroBg: './assets/hero-bg.jpg',
  project1: './assets/project-villa.png',
  commercial: './assets/commercial.jpg',
  infrastructure: './assets/infrastructure.jpg',
};

// Peehar Villas (Trikuta Nagar South Extension) — render gallery.
const PEEHAR_GALLERY = [
  { src: './assets/peehar-entrance.jpeg', title: 'Peehar Villas — Gated entrance, Trikuta Nagar South Extension' },
  { src: './assets/peehar-facade.jpeg', title: 'Peehar Villas — Row villa facade' },
  { src: './assets/peehar-street.jpeg', title: 'Peehar Villas — Internal avenue' },
  { src: './assets/peehar-aerial.jpeg', title: 'Peehar Villas — Elevated view of the community' },
];

// Animation Variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [peeharIndex, setPeeharIndex] = useState(0);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Peehar Villas - Trikuta Nagar South Extension',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e) => {
    setLeadForm({ ...leadForm, [e.target.name]: e.target.value });
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormSubmitted(true);
    
    // Auto-compose direct WhatsApp consultation message
    const waText = encodeURIComponent(
      `*New Inquiry - Satya Builders & Colonisers Website*\n\n` +
      `*Name:* ${leadForm.name}\n` +
      `*Phone:* ${leadForm.phone}\n` +
      `*Email:* ${leadForm.email || 'N/A'}\n` +
      `*Service / Project:* ${leadForm.service}\n` +
      `*Requirement:* ${leadForm.message}\n\n` +
      `_Connecting to Sector-2 Channi Himmat Office_`
    );

    try {
      await fetch('https://formsubmit.co/ajax/satyabuildersandcolonisers@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Client Name': leadForm.name,
          'Phone / Mobile': leadForm.phone,
          'Email Address': leadForm.email || 'Not provided',
          'Service Interested In': leadForm.service,
          'Message / Property Specifications': leadForm.message,
          '_subject': `New Consultation Lead: ${leadForm.name} (${leadForm.service})`,
          '_template': 'table',
          '_captcha': 'false'
        })
      });
    } catch (err) {
      console.warn('Email dispatch notice:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2d2822] font-sans selection:bg-[#b48a58] selection:text-white">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP UTILITY ANNOUNCEMENT BAR                                */}
      {/* ------------------------------------------------------------- */}
      <div className="border-b border-[#eadfd0] bg-[#fdfbf7]/90 text-xs py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-6 text-[#5c5449] font-medium">
            <span className="flex items-center gap-1.5 hover:text-[#b48a58] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#b48a58]" />
              Sector - 2, Channi Himmat, Jammu, J&amp;K
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#857b6e]">
              <Award className="w-3.5 h-3.5 text-[#b48a58]" />
              Est. 1999 • 25+ Years Legacy
            </span>
          </div>
          <div className="flex items-center gap-5 text-[#2d2822]">
            <a href="tel:+919419143358" className="flex items-center gap-1.5 font-semibold hover:text-[#b48a58] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#b48a58]" />
              +91 941 914 3358
            </a>
            <a 
              href="https://wa.me/919419143358?text=Hello%20Satya%20Builders,%20I%20would%20like%20to%20consult%20regarding%20property%20in%20Jammu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full border border-emerald-300 font-semibold transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Office</span>
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. GLOBAL NAVIGATION BAR (Bright Frosted Glass)                */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-[#fdfbf7]/92 backdrop-blur-xl border-b border-[#eadfd0] shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo - Properly Fitted in Container */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border border-[#b48a58]/60 shadow-md bg-stone-950 group-hover:border-[#b48a58] transition-colors">
              <img 
                src={ASSETS.logo} 
                alt="Satya Builders & Colonisers Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              {/* Full company name: both lines styled harmoniously without shrinking Colonisers */}
              <span className="block font-serif text-base md:text-lg font-bold tracking-wider leading-tight text-[#181614] group-hover:text-[#b48a58] transition-colors">
                SATYA BUILDERS
              </span>
              <span className="block font-serif text-base md:text-lg font-bold tracking-wider leading-tight text-[#b48a58]">
                &amp; COLONISERS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#5c5449]">
            <a href="#home" className="hover:text-[#b48a58] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#b48a58] transition-colors">About Us</a>
            <a href="#services" className="hover:text-[#b48a58] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#b48a58] transition-colors">Projects</a>
            <a href="#founder" className="hover:text-[#b48a58] transition-colors">The Founder</a>
            <a href="#contact" className="hover:text-[#b48a58] transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] text-white shadow-md shadow-[#b48a58]/25 hover:shadow-[#b48a58]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 text-[#2d2822] hover:text-[#b48a58]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[#eadfd0] bg-[#fdfbf7]/98 px-6 py-6 space-y-4 shadow-xl"
            >
              {['home', 'about', 'services', 'projects', 'founder', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#2d2822] hover:text-[#b48a58] text-base font-semibold capitalize py-1"
                >
                  {item === 'home' ? 'Home' : item === 'about' ? 'About Us' : item === 'founder' ? 'The Founder' : item}
                </a>
              ))}
              <div className="pt-4 border-t border-[#eadfd0]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center w-full py-3 rounded-lg text-sm font-semibold uppercase bg-[#b48a58] text-white shadow-md"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 3. HERO SECTION (Bright Luxury Theme - EST 1999 Pill Removed) */}
      {/* ------------------------------------------------------------- */}
      <section id="home" className="relative min-h-[82vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#faf7f2] to-[#f4eee3] border-b border-[#eadfd0]">
        
        {/* Subtle Textured Background with Light Luxury Gradient */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src={ASSETS.heroBg} 
            alt="Satya Builders Luxury Construction" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/80 via-[#faf7f2]/90 to-[#f5efe4]/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          
          {/* Headline (EST 1999 pill and stats bar removed as requested) */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#181614] mb-6 leading-tight"
          >
            Satya Builders <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] bg-clip-text text-transparent">
              &amp; Colonisers
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-[#5c5449] font-normal leading-relaxed mb-10"
          >
            Your <span className="text-[#8c6738] font-semibold">“One Stop”</span> partner for all real estate and home consulting services since 1999.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] text-white shadow-xl shadow-[#b48a58]/30 hover:shadow-[#b48a58]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Explore Signature Projects
            </a>
            <a 
              href="#founder" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase bg-white hover:bg-[#faf7f2] text-[#181614] border border-[#d8cbba] hover:border-[#b48a58] shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
            >
              <span>Meet The Founder</span>
              <ArrowRight className="w-4 h-4 text-[#b48a58]" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. ABOUT OUR BUSINESS (Heritage, Mission & Excellence)        */}
      {/* ------------------------------------------------------------- */}
      <section id="about" className="py-24 relative bg-white border-b border-[#eadfd0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b48a58]">
                <span className="w-8 h-px bg-[#b48a58]" />
                Heritage &amp; Operational Excellence
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#181614] leading-tight">
                Bridging Traditional Integrity with{' '}
                <span className="bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] bg-clip-text text-transparent">
                  Modern Real Estate Science
                </span>
              </h2>

              <p className="text-[#5c5449] text-base sm:text-lg leading-relaxed">
                Founded in 1999 in the heart of Jammu, <strong className="text-[#181614]">Satya Builders and Colonisers</strong> has spent over two and a half decades architecting iconic residential estates, acquiring high-yield commercial assets, and guiding discerning families and institutional investors through high-value real estate transactions.
              </p>

              <p className="text-[#786e60] text-sm sm:text-base leading-relaxed">
                Our operational headquarters in <strong className="text-[#2d2822]">Sector 2, Channi Himmat</strong> places us at the epicenter of Jammu’s most lucrative real estate corridor. We believe luxury real estate is not merely about square footage—it is an intricate synthesis of title transparency, structural engineering longevity, and customized architectural vision.
              </p>

              {/* Core Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-xl bg-[#faf7f2] border border-[#eadfd0] shadow-sm hover:border-[#b48a58]/50 hover:shadow-md hover:shadow-[#b48a58]/10 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-amber-100/80 flex items-center justify-center text-[#8c6738] mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#181614] text-sm">Title Due Diligence</h3>
                  <p className="text-xs text-[#786e60] mt-1">Rigorous revenue record vetting for total legal peace of mind.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#faf7f2] border border-[#eadfd0] shadow-sm hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/10 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100/80 flex items-center justify-center text-cyan-700 mb-3">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#181614] text-sm">Turnkey Execution</h3>
                  <p className="text-xs text-[#786e60] mt-1">From soil excavation to contemporary multi-storey elevations.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#faf7f2] border border-[#eadfd0] shadow-sm hover:border-[#b48a58]/50 hover:shadow-md hover:shadow-[#b48a58]/10 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-amber-100/80 flex items-center justify-center text-[#8c6738] mb-3">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#181614] text-sm">Micro-Market Alpha</h3>
                  <p className="text-xs text-[#786e60] mt-1">Deep pricing precision across Channi Himmat and Trikuta Nagar.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Architectural Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#eadfd0] shadow-xl group">
                <img 
                  src={ASSETS.project1} 
                  alt="Satya Builders Luxury House Channi Himmat" 
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#eadfd0]">
                  <span className="text-xs font-bold text-[#b48a58] uppercase tracking-wider">Completed Landmark</span>
                  <p className="text-[#181614] font-bold text-sm mt-0.5">Contemporary Residential Villa — Sector-2, Channi Himmat</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-[#5c5449] font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Custom Architecture &amp; Construction</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. OUR SERVICES (Bright Cards with Hover Elevation)           */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* 5. OUR SERVICES (Bright Cards with Hover Elevation)           */}
      {/* ------------------------------------------------------------- */}
      <section id="services" className="py-24 relative bg-[#f7f3ec] border-b border-[#eadfd0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b48a58] mb-3">
              <span className="w-6 h-px bg-[#b48a58]" />
              Comprehensive Capabilities
              <span className="w-6 h-px bg-[#b48a58]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#181614]">
              Our Core{' '}
              <span className="bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="text-[#5c5449] text-base mt-4 font-normal">
              Integrated turnkey real estate and construction solutions tailored for high-net-worth investors, homeowners, and commercial enterprises.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service 1: Buy/Sell Plots */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-8 border border-[#eadfd0] shadow-sm hover:shadow-xl hover:shadow-[#b48a58]/10 hover:border-[#b48a58]/50 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-100/70 border border-amber-200/80 flex items-center justify-center text-[#8c6738] mb-6 group-hover:scale-110 transition-transform">
                  <Map className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#181614] mb-3 group-hover:text-[#b48a58] transition-colors">
                  Buy / Sell Plots
                </h3>
                <p className="text-[#5c5449] text-sm leading-relaxed mb-6">
                  Prime residential and commercial land acquisition across Sector 2 Channi Himmat, Trikuta Nagar, and high-growth Jammu corridors with exhaustive demarcation and title clarity.
                </p>
                <ul className="space-y-2 text-xs text-[#6e6456] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#b48a58]" />
                    Corner &amp; Wide-Road Frontage Plots
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#b48a58]" />
                    Marla &amp; Kanal Demarcation Precision
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#b48a58]" />
                    Clear Revenue Registry Due Diligence
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-[#eadfd0]">
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#b48a58] uppercase tracking-wider group-hover:gap-3 transition-all">
                  <span>Inquire Land Listings</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Service 2: Home Consultancy */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-8 border border-[#eadfd0] shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-100/70 border border-cyan-200/80 flex items-center justify-center text-cyan-700 mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#181614] mb-3 group-hover:text-cyan-700 transition-colors">
                  Home Consultancy
                </h3>
                <p className="text-[#5c5449] text-sm leading-relaxed mb-6">
                  Specialized advisory led by Th. Pushpinder Singh Charak with 25+ years of verified expertise. Strategic guidance on property valuation, legal documentation, and investment vetting.
                </p>
                <ul className="space-y-2 text-xs text-[#6e6456] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                    Comparative Market Valuation (CMA)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                    Generational Estate Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                    Transparent Buyer-Seller Mediation
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-[#eadfd0]">
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 uppercase tracking-wider group-hover:gap-3 transition-all">
                  <span>Book Expert Advisory</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Service 3: Construction Services */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-8 border border-[#eadfd0] shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/50 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-100/70 border border-amber-200/80 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-110 transition-transform">
                  <HardHat className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#181614] mb-3 group-hover:text-amber-700 transition-colors">
                  Construction Services
                </h3>
                <p className="text-[#5c5449] text-sm leading-relaxed mb-6">
                  Full-spectrum civil construction from foundation excavation to luxury finishing. Earthquake-resistant RCC frame designs and premium certified building materials.
                </p>
                <ul className="space-y-2 text-xs text-[#6e6456] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    Turnkey Civil &amp; Structural Execution
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    High-Grade Steel &amp; Certified Cement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    Strict Milestone Billing &amp; Timelines
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-[#eadfd0]">
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider group-hover:gap-3 transition-all">
                  <span>Request Construction Quote</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Service 4: Architecture & Design */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-8 border border-[#eadfd0] shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-purple-100/70 border border-purple-200/80 flex items-center justify-center text-purple-700 mb-6 group-hover:scale-110 transition-transform">
                  <PenTool className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#181614] mb-3 group-hover:text-purple-700 transition-colors">
                  Architecture &amp; Design
                </h3>
                <p className="text-[#5c5449] text-sm leading-relaxed mb-6">
                  Bespoke contemporary facade designs, 3D photorealistic elevations, ergonomic interior space planning, and daylight-optimized architectural blueprints.
                </p>
                <ul className="space-y-2 text-xs text-[#6e6456] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
                    Ultra-Modern 3D Elevation Modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
                    Structural Engineering &amp; Vastu Harmony
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
                    Contemporary Wood, Stone &amp; Glass Balconies
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-[#eadfd0]">
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-wider group-hover:gap-3 transition-all">
                  <span>View Design Concepts</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Service 5: Offices & Commercial Spaces */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-8 border border-[#eadfd0] shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 flex flex-col justify-between transition-all group lg:col-span-2"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-emerald-100/70 border border-emerald-200/80 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#181614] mb-3 group-hover:text-emerald-700 transition-colors">
                  Offices &amp; Commercial Spaces
                </h3>
                <p className="text-[#5c5449] text-sm leading-relaxed mb-6">
                  High-traffic commercial real estate advisory across prime Jammu arteries. We assist corporations, healthcare institutions, retail brands, and clinics in acquiring, building, or leasing commercial spaces with superior ROI.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6e6456] font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Multi-Storey Commercial Complexes
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    High-Footfall Showrooms &amp; Retail Hubs
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Lease Structuring &amp; Corporate Tenancy
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Prime National Highway &amp; Bypass Assets
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#eadfd0]">
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider group-hover:gap-3 transition-all">
                  <span>Explore Commercial Assets</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. UPCOMING PROJECTS (Side-by-Side: Channi Villa & Peehar)     */}
      {/* ------------------------------------------------------------- */}
      <section id="projects" className="py-24 bg-white border-b border-[#eadfd0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b48a58] mb-2">
                <span className="w-6 h-px bg-[#b48a58]" />
                Portfolio &amp; Future Developments
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#181614]">
                Upcoming &amp; Signature{' '}
                <span className="bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>
            <p className="text-[#5c5449] text-sm max-w-md font-normal">
              A curated preview of our completed landmarks and upcoming gated villa developments across Jammu’s prime sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Project 1: The Grand Channi Villa */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#eadfd0] shadow-sm hover:shadow-xl hover:shadow-[#b48a58]/10 flex flex-col group transition-all"
            >
              <div 
                className="relative h-80 sm:h-96 overflow-hidden bg-stone-950 cursor-pointer"
                onClick={() => setSelectedProject({
                  src: ASSETS.project1,
                  title: 'The Grand Channi Residence — Sector 2, Channi Himmat'
                })}
              >
                <img 
                  src={ASSETS.project1} 
                  alt="Project 1: The Grand Channi Residence" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-md">
                    Completed Landmark
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#181614] shadow-md border border-[#eadfd0]">
                    Sector - 2, Channi Himmat
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-lg bg-black/75 border border-[#b48a58]/60 text-white text-xs font-bold flex items-center gap-2 backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4 text-[#b48a58]" /> Click to Enlarge Elevation
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-2xl font-bold text-[#181614] group-hover:text-[#b48a58] transition-colors">
                      The Grand Channi Villa
                    </h3>
                    <span className="text-sm font-bold text-[#8c6738]">5,000+ sq. ft.</span>
                  </div>
                  <p className="text-[#5c5449] text-sm leading-relaxed mb-6">
                    A bespoke 4-BHK contemporary residence engineered with Italian marble finishes, exterior stone cladding, cantilevered glass balconies, and automated smart access in Sector 2.
                  </p>
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-[#eadfd0] text-xs">
                    <div>
                      <span className="text-[#786e60] block font-medium">Structure</span>
                      <strong className="text-[#181614]">Duplex Luxury</strong>
                    </div>
                    <div>
                      <span className="text-[#786e60] block font-medium">Completion</span>
                      <strong className="text-[#181614]">Delivered 100%</strong>
                    </div>
                    <div>
                      <span className="text-[#786e60] block font-medium">Status</span>
                      <strong className="text-emerald-700">Client Handover</strong>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a href="#contact" className="text-xs font-bold uppercase tracking-wider text-[#b48a58] flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    <span>Request Case Study &amp; Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Peehar Villas — Trikuta Nagar South Extension */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#eadfd0] shadow-sm hover:shadow-xl hover:shadow-[#b48a58]/10 flex flex-col group transition-all"
            >
              <div 
                className="relative h-80 sm:h-96 overflow-hidden bg-stone-950 cursor-pointer"
                onClick={() => setSelectedProject(PEEHAR_GALLERY[peeharIndex])}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={PEEHAR_GALLERY[peeharIndex].src}
                    src={PEEHAR_GALLERY[peeharIndex].src}
                    alt={PEEHAR_GALLERY[peeharIndex].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#b48a58] text-white shadow-md">
                    Upcoming Project
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#181614] shadow-md border border-[#eadfd0]">
                    Trikuta Nagar South Extension
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-lg bg-black/75 border border-[#b48a58]/60 text-white text-xs font-bold flex items-center gap-2 backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4 text-[#b48a58]" /> Click to Enlarge Render
                  </span>
                </div>
              </div>

              {/* Thumbnail gallery */}
              <div className="grid grid-cols-4 gap-2 px-4 pt-4">
                {PEEHAR_GALLERY.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setPeeharIndex(i)}
                    className={`h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      i === peeharIndex ? 'border-[#b48a58]' : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-2xl font-bold text-[#181614] group-hover:text-[#b48a58] transition-colors">
                      Peehar Villas
                    </h3>
                    <span className="text-sm font-bold text-cyan-700">Gated Villa Community</span>
                  </div>
                  <p className="text-[#5c5449] text-sm leading-relaxed mb-4">
                    Peehar Villas is an upcoming gated community of contemporary row villas in Trikuta Nagar South Extension, one of Jammu’s most prestigious residential corridors. A walled signature entrance opens onto a private landscaped internal avenue designed for discerning homeowners.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6e6456] font-medium mb-6">
                    {[
                      'Gated entry with signature boundary wall',
                      'Wide internal avenue with landscaped hedges',
                      'Terracotta box-frame balconies with lighting',
                      'Natural stone cladding & glass railings',
                      'Rooftop terrace planters & green accents',
                      'Private gated car porch for every villa',
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#b48a58]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-[#eadfd0] text-xs">
                    <div>
                      <span className="text-[#786e60] block font-medium">Typology</span>
                      <strong className="text-[#181614]">Duplex Row Villas</strong>
                    </div>
                    <div>
                      <span className="text-[#786e60] block font-medium">Location</span>
                      <strong className="text-[#181614]">Trikuta Nagar S. Ext.</strong>
                    </div>
                    <div>
                      <span className="text-[#786e60] block font-medium">Status</span>
                      <strong className="text-[#8c6738] font-bold">Upcoming</strong>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://wa.me/919419143358?text=Hello%20Satya%20Builders,%20I%20am%20interested%20in%20Peehar%20Villas,%20Trikuta%20Nagar%20South%20Extension.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-cyan-700 flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    <span>Enquire About Peehar Villas</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. THE FOUNDER (Th. Pushpinder Singh Charak Profile)          */}
      {/* ------------------------------------------------------------- */}
      <section id="founder" className="py-24 relative overflow-hidden bg-[#faf7f2] border-b border-[#eadfd0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#fffdfa] via-[#faf6ee] to-[#f4ebdd] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#e0cfba] shadow-2xl shadow-[#b48a58]/10 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Founder Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-300/40 via-[#b48a58]/30 to-amber-300/40 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                  
                  <div className="relative w-72 sm:w-80 md:w-96 rounded-2xl overflow-hidden border-2 border-[#b48a58]/60 shadow-2xl bg-stone-950">
                    <img 
                      src={ASSETS.founder} 
                      alt="Th. Pushpinder Singh Charak - Founder" 
                      className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white text-[#181614] shadow-md border border-[#eadfd0]">
                        Founder &amp; Principal Consultant
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b48a58]">
                  <span className="w-6 h-px bg-[#b48a58]" />
                  Leadership &amp; Advisory
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#181614]">
                  Th. Pushpinder Singh{' '}
                  <span className="bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] bg-clip-text text-transparent">
                    Charak
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg text-[#8c6738] font-semibold italic">
                  “Pushpinder Singh Charak has over 25 years of experience helping local clients achieve their real estate goals.”
                </p>

                <p className="text-[#5c5449] text-sm sm:text-base leading-relaxed">
                  Serving as the guiding visionary of <strong className="text-[#181614]">Satya Builders and Colonisers</strong>, Pushpinder Singh Charak combines deep generational insight with modern property underwriting standards. His consultative methodology prioritizes complete asset transparency, vetting revenue records and legal documentation before any transaction is executed.
                </p>

                <p className="text-[#786e60] text-sm leading-relaxed">
                  Having overseen multi-crore land sales, turnkey villa construction, and institutional acquisitions in Sector 2 Channi Himmat, Trikuta Nagar, and surrounding micro-markets, his counsel is trusted by prominent families, non-resident clients, and corporate business houses across Jammu &amp; Kashmir.
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#eadfd0]">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#786e60] block font-medium">Experience</span>
                    <strong className="text-[#8c6738] text-sm">25+ Years Experience</strong>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#786e60] block font-medium">Direct Line</span>
                    <strong className="text-cyan-700 text-sm">+91 941 914 3358</strong>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/919419143358?text=Hello%20Pushpinder%20Ji,%20I%20would%20like%20to%20discuss%20a%20property%20consultation."
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-emerald-700/20 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Direct WhatsApp with Founder
                  </a>
                  <a 
                    href="tel:+919419143358"
                    className="px-6 py-3 rounded-xl bg-white hover:bg-[#faf7f2] text-[#181614] border border-[#d8cbba] font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#b48a58]" />
                    Call Office
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. CONTACT US (Lead Capture & Official Details)               */}
      {/* ------------------------------------------------------------- */}
      <section id="contact" className="py-24 relative bg-[#f7f3ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b48a58] mb-3">
                  <span className="w-6 h-px bg-[#b48a58]" />
                  Connect Directly
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#181614]">
                  Initiate Your{' '}
                  <span className="bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] bg-clip-text text-transparent">
                    Consultation
                  </span>
                </h2>
                <p className="text-[#5c5449] text-sm mt-3 leading-relaxed">
                  Whether you are acquiring a prime plot, booking Peehar Villas, or seeking certified residential valuation, our senior team is at your service.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-white border border-[#eadfd0] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-200/80 flex items-center justify-center text-[#8c6738] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#8c6738] font-bold">Corporate Office</h4>
                    <p className="text-[#181614] text-sm font-semibold mt-1">Sector - 2, Channi Himmat</p>
                    <p className="text-[#786e60] text-xs">Jammu, Jammu &amp; Kashmir — 180015</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl bg-white border border-[#eadfd0] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100/80 border border-cyan-200/80 flex items-center justify-center text-cyan-700 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cyan-700 font-bold">Direct Hotline</h4>
                    <a href="tel:+919419143358" className="text-[#181614] text-base font-bold mt-1 block hover:text-[#b48a58] transition-colors">
                      +91 941 914 3358
                    </a>
                    <p className="text-[#786e60] text-xs">Mon – Sat: 9:30 AM – 7:30 PM IST</p>
                  </div>
                </div>

                {/* Official Email */}
                <div className="p-5 rounded-2xl bg-white border border-[#eadfd0] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100/80 border border-purple-200/80 flex items-center justify-center text-purple-700 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-purple-700 font-bold">Official Email</h4>
                    <a href="mailto:satyabuildersandcolonisers@gmail.com" className="text-[#181614] text-sm font-semibold mt-1 block break-all hover:text-[#b48a58] transition-colors">
                      satyabuildersandcolonisers@gmail.com
                    </a>
                    <p className="text-[#786e60] text-xs mt-0.5">Direct Correspondence &amp; Inquiries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#eadfd0] shadow-2xl shadow-[#b48a58]/5">
                <h3 className="font-serif text-2xl font-bold text-[#181614] mb-2">Send an Inquiry</h3>
                <p className="text-[#786e60] text-xs mb-8">
                  Fill out your details below. You will receive an immediate response from Th. Pushpinder Singh Charak.
                </p>

                <form onSubmit={handleLeadSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#38332c] font-bold mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={leadForm.name}
                        onChange={handleFormChange}
                        required 
                        placeholder="e.g. Vikramaditya Sharma"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#faf7f2] border border-[#d8cbba] text-[#181614] text-sm placeholder-[#9c9183] focus:outline-none focus:bg-white focus:border-[#b48a58] focus:ring-2 focus:ring-[#b48a58]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#38332c] font-bold mb-2">
                        Phone / Mobile Number *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={leadForm.phone}
                        onChange={handleFormChange}
                        required 
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#faf7f2] border border-[#d8cbba] text-[#181614] text-sm placeholder-[#9c9183] focus:outline-none focus:bg-white focus:border-[#b48a58] focus:ring-2 focus:ring-[#b48a58]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#38332c] font-bold mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={leadForm.email}
                        onChange={handleFormChange}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#faf7f2] border border-[#d8cbba] text-[#181614] text-sm placeholder-[#9c9183] focus:outline-none focus:bg-white focus:border-[#b48a58] focus:ring-2 focus:ring-[#b48a58]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#38332c] font-bold mb-2">
                        Service / Project *
                      </label>
                      <select 
                        name="service"
                        value={leadForm.service}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#faf7f2] border border-[#d8cbba] text-[#181614] text-sm focus:outline-none focus:bg-white focus:border-[#b48a58] focus:ring-2 focus:ring-[#b48a58]/20 transition-all"
                      >
                        <option value="Peehar Villas - Trikuta Nagar South Extension">Peehar Villas (Trikuta Nagar South Ext.)</option>
                        <option value="Buy/Sell Plots">Buy / Sell Plots (Channi Himmat / Trikuta)</option>
                        <option value="Home Consultancy">Home &amp; Valuation Consultancy</option>
                        <option value="Construction Services">Turnkey Construction Services</option>
                        <option value="Architecture & Design">Architectural &amp; 3D Elevation Design</option>
                        <option value="Offices & Commercial Spaces">Offices &amp; Commercial Spaces</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#38332c] font-bold mb-2">
                      Message / Property Specifications *
                    </label>
                    <textarea 
                      rows={4}
                      name="message"
                      value={leadForm.message}
                      onChange={handleFormChange}
                      required 
                      placeholder="Describe your requirement (location, plot size, budget, or architectural goals)..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#faf7f2] border border-[#d8cbba] text-[#181614] text-sm placeholder-[#9c9183] focus:outline-none focus:bg-white focus:border-[#b48a58] focus:ring-2 focus:ring-[#b48a58]/20 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#8c6738] via-[#b48a58] to-[#d4af7a] text-white shadow-xl shadow-[#b48a58]/30 hover:shadow-[#b48a58]/50 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Sending Inquiry via Email...' : 'Send Inquiry via Email'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {/* Optional WhatsApp Alternative */}
                  <div className="pt-2 text-center">
                    <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-[#eadfd0]" />
                      <span className="flex-shrink mx-4 text-[11px] font-semibold uppercase tracking-wider text-[#8a7f70]">Or Connect Instantly</span>
                      <div className="flex-grow border-t border-[#eadfd0]" />
                    </div>
                    <a 
                      href="https://wa.me/919419143358?text=Hello%20Pushpinder%20Ji,%20I%20would%20like%20to%20discuss%20a%20property%20consultation." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-700/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat Directly on WhatsApp (+91 941 914 3358)</span>
                    </a>
                  </div>

                  {formSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-[#f0fdf4] border border-emerald-300 text-emerald-900 text-xs shadow-md"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                        <CheckCircle className="w-5 h-5 text-emerald-600" /> Inquiry Sent Successfully!
                      </div>
                      <div className="mt-2 space-y-1 text-emerald-700">
                        <p>✓ Your message has been delivered to <strong>satyabuildersandcolonisers@gmail.com</strong>.</p>
                        <p>Th. Pushpinder Singh Charak will review your requirements and reach out to you shortly.</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. LUXURY FOOTER                                              */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#14120e] border-t border-[#2a241b] pt-16 pb-12 text-[#9e9587] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2a241b]">
            
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-black p-0.5 border border-[#b48a58]/60 shadow-sm">
                  <img src={ASSETS.logo} alt="Satya Builders Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="block font-serif text-base font-bold text-white">Satya Builders &amp; Colonisers</span>
                  <span className="block text-[10px] tracking-widest uppercase text-[#b48a58] font-medium">Established 1999 • Jammu, J&amp;K</span>
                </div>
              </div>
              <p className="text-[#9e9587] text-xs leading-relaxed max-w-md">
                Premier luxury construction firm and real estate consultancy headquartered in Sector 2, Channi Himmat, Jammu. Decades of unblemished trust, clear revenue title verification, and contemporary architectural execution.
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Navigation</h5>
              <ul className="space-y-2.5">
                <li><a href="#home" className="hover:text-[#b48a58] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#b48a58] transition-colors">About Our Legacy</a></li>
                <li><a href="#services" className="hover:text-[#b48a58] transition-colors">Specialized Services</a></li>
                <li><a href="#projects" className="hover:text-[#b48a58] transition-colors">Upcoming Projects</a></li>
                <li><a href="#founder" className="hover:text-[#b48a58] transition-colors">The Founder (Th. Pushpinder Singh)</a></li>
                <li><a href="#contact" className="hover:text-[#b48a58] transition-colors">Contact Office</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Core Services</h5>
              <ul className="space-y-2.5">
                <li><a href="#services" className="hover:text-[#b48a58] transition-colors">Peehar Villas (Trikuta Nagar)</a></li>
                <li><a href="#services" className="hover:text-[#b48a58] transition-colors">Buy / Sell Plots</a></li>
                <li><a href="#services" className="hover:text-[#b48a58] transition-colors">Home &amp; Valuation Advisory</a></li>
                <li><a href="#services" className="hover:text-[#b48a58] transition-colors">Turnkey Construction</a></li>
                <li><a href="#services" className="hover:text-[#b48a58] transition-colors">Commercial Developments</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#786e60]">
            <div>
              © 1999–2026 Satya Builders and Colonisers. All Rights Reserved. Sector - 2, Channi Himmat, Jammu.
            </div>
            <div className="flex items-center gap-6">
              <a href="#home" className="hover:text-[#b48a58] transition-colors">Back to Top ↑</a>
              <a href="tel:+919419143358" className="text-[#b48a58] hover:underline">+91 941 914 3358</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* 10. MODAL LIGHTBOX FOR PROJECT ENLARGEMENT                    */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#14120e]/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#fdfbf7] rounded-2xl overflow-hidden border border-[#eadfd0] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:text-[#b48a58] flex items-center justify-center border border-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-2 bg-stone-950">
                <img 
                  src={selectedProject.src} 
                  alt={selectedProject.title} 
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              </div>
              <div className="p-4 bg-[#fdfbf7] border-t border-[#eadfd0]">
                <h4 className="text-sm font-bold text-[#181614]">{selectedProject.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
