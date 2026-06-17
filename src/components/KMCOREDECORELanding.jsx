import { useState, useEffect } from 'react'
import Logo from './Logo'

/* ============================================================
   KM CORE & DECOR — Professional Homepage
   Civil Construction & Interior Design Studio · Vadodara

   SEO/AEO HEAD (add to your <head> or document/layout):
   <title>KM Core & Decor | Civil Construction & Interior Design in Vadodara</title>
   <meta name="description" content="KM Core & Decor is a civil construction and interior design studio in Alkapuri, Vadodara, led by Kartavya Mandot. We deliver turnkey residential and commercial projects, renovations, and 3D visualization. Elevating Spaces, Enriching Lives." />
   <meta name="keywords" content="civil construction Vadodara, interior designer Vadodara, turnkey projects Alkapuri, renovation contractor Vadodara, construction company Gujarat" />
   <meta property="og:title" content="KM Core & Decor | Civil Construction & Interior Design" />
   <meta property="og:description" content="Premium civil construction and interior design studio in Vadodara. Turnkey projects, renovations, and 3D visualization." />
   <meta property="og:url" content="https://www.kmcoredecor.in" />
   <link rel="canonical" href="https://www.kmcoredecor.in" />
   ============================================================ */

// ── Design tokens (warm neutral palette + bronze accent) ──
const BRONZE = '#9c7c54'

// ── Structured Data (JSON-LD) for SEO / AEO ──
const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'KM Core & Decor',
  description:
    'Civil construction and interior design studio in Vadodara offering turnkey residential and commercial projects, renovations, space planning, and 3D visualization.',
  url: 'https://www.kmcoredecor.in',
  telephone: '+91-91065-49945',
  email: 'kmcoredecor@gmail.com',
  image: 'https://www.kmcoredecor.in/og-image.jpg',
  priceRange: '$$',
  founder: { '@type': 'Person', name: 'Kartavya Mandot' },
  areaServed: 'Vadodara, Gujarat, India',
  knowsAbout: [
    'Civil Construction',
    'Interior Design',
    'Turnkey Projects',
    'Renovation',
    'Space Planning',
    '3D Visualization',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '512/513 National Plaza, Opposite Bank of Baroda, Alkapuri',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    postalCode: '390007',
    addressCountry: 'IN',
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does KM Core & Decor offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KM Core & Decor offers civil construction, smart interior solutions, turnkey projects, renovation and remodeling, space planning and design, and 3D visualization for residential and commercial spaces in Vadodara.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does KM Core & Decor handle both construction and interior design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. KM Core & Decor is a single studio that covers both civil construction and interior design, so clients work with one trusted team from foundation to final finish.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a turnkey project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A turnkey project is a complete end-to-end build where KM Core & Decor manages every phase — design, construction, interiors, and finishing — and hands over a ready-to-use space.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas does KM Core & Decor serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KM Core & Decor is based in Alkapuri, Vadodara and serves residential and commercial clients across Vadodara and the wider Gujarat region.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start a project with KM Core & Decor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply call +91 91065 49945 or fill out the inquiry form on the contact section. Kartavya Mandot personally responds within 24 hours to discuss your vision.',
      },
    },
  ],
}

const NAV_LINKS = [
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  {
    index: '01',
    title: 'Civil Construction',
    desc: 'Strong foundations and precise structural execution — from ground-up builds to last a lifetime.',
    icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01',
  },
  {
    index: '02',
    title: 'Smart Interior Solutions',
    desc: 'Thoughtfully designed interiors that balance aesthetics, functionality, and modern smart living.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    index: '03',
    title: 'Turnkey Projects',
    desc: 'Complete end-to-end delivery — one team, one timeline, from concept to handover of keys.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    index: '04',
    title: 'Renovation & Remodeling',
    desc: 'Transform existing spaces with elegant finishes, flawless coordination, and meticulous detailing.',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  },
  {
    index: '05',
    title: 'Space Planning & Design',
    desc: 'Optimised layouts that maximise every square foot while reflecting your lifestyle and vision.',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  },
  {
    index: '06',
    title: '3D Visualization',
    desc: 'Photo-realistic renders that bring your future space to life before construction begins.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
]

const PROJECTS = [
  { id: 1, title: 'Modern Living Room', category: 'Residential', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900' },
  { id: 2, title: 'Contemporary Bedroom', category: 'Residential', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900' },
  { id: 3, title: 'Luxury Kitchen', category: 'Residential', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900' },
  { id: 4, title: 'Elegant Workspace', category: 'Commercial', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900' },
  { id: 5, title: 'Minimal Dining Area', category: 'Residential', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900' },
  { id: 6, title: 'Premium Reception', category: 'Commercial', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=900' },
]

const PROCESS_STEPS = [
  { n: '01', title: 'Discovery', desc: 'We listen deeply to understand your vision, lifestyle, and aspirations for the space.' },
  { n: '02', title: 'Concept & Design', desc: 'Mood boards, material palettes, and layouts are developed and refined to crystallize the vision.' },
  { n: '03', title: 'Construction & Development', desc: 'Technical specifications and detailed plans ensure flawless execution from foundation to finish.' },
  { n: '04', title: 'Handover & Realization', desc: 'We oversee every detail on site until your dream space becomes a beautiful reality.' },
]

const WHY_US = [
  { title: 'One Team, Start to Finish', desc: 'Civil construction and interiors under one roof — no juggling multiple contractors or miscommunication.' },
  { title: 'Founder-Led Attention', desc: 'Kartavya personally oversees every project, ensuring quality and consistency from day one to handover.' },
  { title: 'Premium Materials', desc: 'We source durable, high-grade materials and finishes that stand the test of time and daily use.' },
  { title: 'Transparent Process', desc: 'Clear timelines, honest pricing, and regular updates — you always know exactly where your project stands.' },
]

const TESTIMONIALS = [
  { quote: 'A truly transformative experience. They understood our aesthetic and created a home we love.', name: 'Urvish Shah', title:  'Vadodara' }
]

const FAQS = [
  { q: 'What services does KM Core & Decor offer?', a: 'We offer civil construction, smart interior solutions, turnkey projects, renovation and remodeling, space planning and design, and 3D visualization for residential and commercial spaces in Vadodara.' },
  { q: 'Do you handle both construction and interior design?', a: 'Yes. KM Core & Decor is a single studio that covers both civil construction and interior design, so you work with one trusted team from foundation to final finish.' },
  { q: 'What is a turnkey project?', a: 'A turnkey project is a complete end-to-end build where we manage every phase — design, construction, interiors, and finishing — and hand over a ready-to-use space.' },
  { q: 'Which areas do you serve?', a: 'We are based in Alkapuri, Vadodara and serve residential and commercial clients across Vadodara and the wider Gujarat region.' },
  { q: 'How do I start a project?', a: 'Call +91 91065 49945 or fill out our inquiry form. Kartavya personally responds within 24 hours to discuss your vision.' },
]

const CONTACT_DETAILS = [
  { label: 'Studio', value: '512/513 National Plaza, Opposite Bank of Baroda, Alkapuri, Vadodara - 390007', href: 'https://maps.google.com/?q=National+Plaza+Alkapuri+Vadodara', icon: 'M17.656 16.172a4 4 0 10-5.656-5.656 4 4 0 005.656 5.656zm0 0L21 19.5m-9-7.5h.01' },
  { label: 'Email', value: 'kmcoredecor@gmail.com', href: 'mailto:kmcoredecor@gmail.com', icon: 'M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label: 'Website', value: 'www.kmcoredecor.in', href: 'https://www.kmcoredecor.in', icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18' },
]

const SOCIALS = [
  { label: 'Instagram', href: '#', d: 'M12 2.2c3.2 0 3.6 0 4.8.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.6-.07 4.8c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.6 0-4.8-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s0-3.6.07-4.8c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.23a4.03 4.03 0 1 1 0-8.06 4.03 4.03 0 0 1 0 8.06Zm6.4-10.6a1.45 1.45 0 1 1-2.9 0 1.45 1.45 0 0 1 2.9 0Z' },
  { label: 'Facebook', href: '#', d: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z' },
  { label: 'WhatsApp', href: '#', d: 'M12.04 2a9.93 9.93 0 0 0-8.5 15.06L2 22l5.08-1.33A9.94 9.94 0 1 0 12.04 2Zm5.6 14.2c-.24.66-1.38 1.26-1.9 1.34-.5.07-1.1.1-1.78-.12-.41-.13-.94-.3-1.62-.6-2.84-1.23-4.7-4.09-4.84-4.28-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.29.57-.36.76-.36l.55.01c.18.01.42-.07.65.5.24.59.82 2.04.9 2.18.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.5-.14.14-.29.3-.12.58.16.29.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.64-.14.26.09 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.69-.17 1.35Z' },
]

// ── Reusable eyebrow + rule ──
function SectionLabel({ children, dark }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span
        className="font-sans text-xs tracking-[0.25em] uppercase"
        style={{ color: dark ? 'rgba(255,255,255,0.5)' : BRONZE }}
      >
        {children}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: dark ? 'rgba(255,255,255,0.12)' : '#e7e5e4' }}
      />
    </div>
  )
}

// ── Logo lockup component ──
function LogoLockup({ scrolled }) {
  return (
    <a href="#studio" className="flex items-center gap-3 group" aria-label="KM Core and Decor home">
      <Logo
        className="h-16 lg:h-24 w-auto"
        invert={!scrolled}
      />
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif text-base lg:text-lg font-medium tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-stone-900' : 'text-white'
          }`}
        >
          KM Core &amp; Decor
        </span>
        <span
          className={`font-sans text-[8px] lg:text-[9px] tracking-[0.28em] uppercase mt-1.5 transition-colors duration-300 ${
            scrolled ? 'text-stone-400' : 'text-white/60'
          }`}
        >
          Civil &amp; Interiors
        </span>
      </div>
    </a>
  )
}

// ── Navigation ──
function Nav({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <LogoLockup scrolled={scrolled} />

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sans text-sm tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={`hidden lg:inline-flex font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300 ${
            scrolled
              ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
              : 'border-white/40 text-white hover:border-white hover:bg-white hover:text-stone-900'
          }`}
        >
          Get a Quote
        </a>

        <button
          className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''} ${scrolled ? 'bg-stone-900' : 'bg-white'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-stone-900' : 'bg-white'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''} ${scrolled ? 'bg-stone-900' : 'bg-white'}`} />
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`px-6 pb-6 pt-4 flex flex-col gap-5 ${scrolled ? 'bg-white border-t border-stone-200' : 'bg-black/60 backdrop-blur-md'}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sans text-sm tracking-wide transition-colors ${scrolled ? 'text-stone-700 hover:text-stone-900' : 'text-white hover:text-white/80'}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`font-sans text-xs tracking-[0.2em] uppercase px-5 py-3 border text-center transition-all ${scrolled ? 'border-stone-900 text-stone-900' : 'border-white/40 text-white'}`}
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  )
}

// ── Contact form ──
const FLOATING_LABEL =
  'absolute left-0 top-3 font-sans text-sm text-stone-400 transition-all duration-300 ' +
  'peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-stone-500 ' +
  'peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-stone-500'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSubmitted(true)
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 4000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 min-h-[420px]">
        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-serif text-3xl text-stone-900 mb-3 font-light">Thank you, {form.name}.</p>
        <p className="font-sans text-sm text-stone-500 max-w-sm mx-auto leading-relaxed">
          Your inquiry has been received. Kartavya will personally reach out within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        <div className="relative">
          <input type="text" name="name" id="cf-name" placeholder=" " value={form.name} onChange={handleChange} maxLength={80}
            className="peer w-full border-b border-stone-300 bg-transparent py-3 font-sans text-sm text-stone-900 placeholder-transparent focus:border-stone-900 focus:outline-none transition-colors" required />
          <label htmlFor="cf-name" className={FLOATING_LABEL}>Full Name</label>
        </div>
        <div className="relative">
          <input type="email" name="email" id="cf-email" placeholder=" " value={form.email} onChange={handleChange} maxLength={120}
            className="peer w-full border-b border-stone-300 bg-transparent py-3 font-sans text-sm text-stone-900 placeholder-transparent focus:border-stone-900 focus:outline-none transition-colors" required />
          <label htmlFor="cf-email" className={FLOATING_LABEL}>Email Address</label>
        </div>
      </div>
      <div className="relative">
        <input type="tel" name="phone" id="cf-phone" placeholder=" " value={form.phone} onChange={handleChange} maxLength={20}
          className="peer w-full border-b border-stone-300 bg-transparent py-3 font-sans text-sm text-stone-900 placeholder-transparent focus:border-stone-900 focus:outline-none transition-colors" />
        <label htmlFor="cf-phone" className={FLOATING_LABEL}>Phone <span className="lowercase tracking-normal text-stone-300">(optional)</span></label>
      </div>
      <div className="relative">
        <textarea name="message" id="cf-message" rows={4} placeholder=" " value={form.message} onChange={handleChange} maxLength={1000}
          className="peer w-full border-b border-stone-300 bg-transparent py-3 font-sans text-sm text-stone-900 placeholder-transparent focus:border-stone-900 focus:outline-none resize-none transition-colors" required />
        <label htmlFor="cf-message" className={FLOATING_LABEL}>Tell us about your project</label>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
        <p className="font-sans text-xs text-stone-400 leading-relaxed max-w-xs">We reply to every inquiry within 24 hours.</p>
        <button type="submit"
          className="group relative font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-stone-900 text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/20 self-start sm:self-auto">
          <span className="relative z-10 flex items-center gap-3">
            Send Inquiry
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-stone-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </form>
  )
}

// ── Contact detail row ──
function ContactDetailRow({ detail }) {
  return (
    <a href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
      className="group flex items-start gap-4 py-4 border-b border-stone-100 last:border-b-0 transition-colors">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-stone-900 group-hover:border-stone-300 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={detail.icon} />
        </svg>
      </span>
      <div className="min-w-0">
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">{detail.label}</p>
        <p className="font-sans text-sm text-stone-700 group-hover:text-stone-900 transition-colors break-words">{detail.value}</p>
      </div>
    </a>
  )
}

// ── FAQ item ──
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-stone-200">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-6 py-6 text-left group" aria-expanded={isOpen}>
        <span className="font-serif text-lg lg:text-xl text-stone-900 font-light group-hover:text-stone-600 transition-colors">{faq.q}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
          <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-60 pb-6' : 'max-h-0'}`}>
        <p className="font-sans text-sm text-stone-600 leading-relaxed font-light max-w-2xl pr-12">{faq.a}</p>
      </div>
    </div>
  )
}

// ── MAIN COMPONENT ──
export default function KMCOREDECORELanding() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden antialiased">

      {/* JSON-LD Structured Data for SEO / AEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <Nav scrolled={scrolled} />

      <main>
        {/* ════════ HERO ════════ */}
        <section id="studio" className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=90"
              alt="KM Core & Decor luxury interior design and civil construction showcase"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center pt-20">
            <span className="inline-block font-sans text-[11px] tracking-[0.3em] uppercase text-white/70 mb-8 border-b border-white/30 pb-2">
              Civil Construction &amp; Interior Design · Vadodara
            </span>

            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.1] text-white mb-10 font-light">
              Elevating Spaces,<br />
              <span className="italic" style={{ color: '#d4c4a8' }}>Enriching Lives.</span>
            </h1>

            <p className="font-sans text-base lg:text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              KM Core &amp; Decor is a Vadodara-based studio crafting refined residential and commercial interiors and dependable civil construction — delivered as seamless turnkey projects with premium materials and obsessive attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="#contact" className="font-sans text-xs tracking-[0.2em] uppercase text-stone-900 bg-white px-8 py-4 hover:bg-stone-100 transition-all duration-300 shadow-lg">
                Start Your Project
              </a>
              <a href="#projects" className="font-sans text-xs tracking-[0.2em] uppercase text-white border border-white/40 px-8 py-4 hover:border-white hover:bg-white/10 transition-all duration-300">
                View Our Work
              </a>
            </div>
          </div>
        </section>

        {/* ════════ BRAND PROMISE / INTRO ════════ */}
        <section className="bg-stone-50 py-24 lg:py-32 px-6 lg:px-12 border-b border-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-2xl lg:text-3xl text-stone-800 leading-relaxed font-light mb-6">
              We believe great spaces are built on a foundation of trust, precision, and thoughtful design.
            </p>
            <p className="font-sans text-base text-stone-500 leading-relaxed font-light max-w-2xl mx-auto">
              From the first brick to the final finish, KM Core &amp; Decor brings together civil construction expertise and interior design sensibility under one roof — so your vision is realized by a single, accountable team.
            </p>
          </div>
        </section>

        {/* ════════ SERVICES ════════ */}
        <section id="services" className="bg-white py-28 lg:py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 lg:mb-20 max-w-3xl">
              <SectionLabel>Our Expertise</SectionLabel>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-stone-900 font-light mb-5">
                Comprehensive construction &amp; design services.
              </h2>
              <p className="font-sans text-base text-stone-500 leading-relaxed font-light max-w-xl">
                Six core capabilities that take your project from an empty plot or tired room to a finished, beautiful space.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
              {SERVICES.map((s) => (
                <article key={s.index} className="group bg-white p-8 lg:p-10 transition-colors duration-300 hover:bg-stone-50 cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-5xl font-light" style={{ color: '#e7e5e4' }}>{s.index}</span>
                    <span className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:border-stone-300 transition-colors" style={{ color: BRONZE }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl text-stone-900 mb-3 font-light">{s.title}</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed font-light">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PROJECTS ════════ */}
        <section id="projects" className="bg-stone-50 py-28 lg:py-32 px-6 lg:px-12 border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <SectionLabel>Selected Work</SectionLabel>
                <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-stone-900 font-light">
                  Featured projects.
                </h2>
              </div>
              <p className="font-sans text-sm text-stone-500 leading-relaxed font-light max-w-sm">
                A glimpse of residential and commercial spaces we&rsquo;ve designed and built across Vadodara.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PROJECTS.map((p) => (
                <div key={p.id} className="group overflow-hidden bg-stone-200 cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={`${p.title} — ${p.category} project by KM Core & Decor`} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 mb-2">{p.category}</p>
                      <p className="font-serif text-xl lg:text-2xl text-white font-light">{p.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PROCESS ════════ */}
        <section id="process" className="bg-white py-28 lg:py-32 px-6 lg:px-12 border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 lg:mb-20 max-w-2xl">
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-stone-900 font-light">
                A clear, collaborative process.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.n} className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-serif text-4xl font-light" style={{ color: BRONZE }}>{step.n}</span>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="flex-1 h-px bg-stone-200 hidden lg:block" />
                    )}
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 mb-3 font-light">{step.title}</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ WHY CHOOSE US ════════ */}
        <section className="bg-stone-900 py-28 lg:py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 lg:mb-20 max-w-2xl">
              <SectionLabel dark>Why KM Core &amp; Decor</SectionLabel>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-white font-light">
                Built on trust. Finished with pride.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {WHY_US.map((item, i) => (
                <div key={i} className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                  <span className="font-serif text-2xl font-light block mb-4" style={{ color: '#c4a87a' }}>0{i + 1}</span>
                  <h3 className="font-serif text-lg text-white mb-3 font-light">{item.title}</h3>
                  <p className="font-sans text-sm text-white/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TESTIMONIALS ════════ */}
        <section id="feedback" className="bg-white py-20 lg:py-24 px-6 lg:px-12 border-t border-stone-200">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Client Stories</SectionLabel>

            <div className="relative min-h-[220px] mt-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`transition-all duration-700 ${i === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                  <svg className="w-10 h-10 mx-auto mb-6" style={{ color: BRONZE, opacity: 0.5 }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                  <p className="font-serif text-xl lg:text-2xl text-stone-800 mb-8 leading-relaxed font-light italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-px bg-stone-300" />
                    <div>
                      <p className="font-sans text-sm font-medium text-stone-900">{t.name}</p>
                      <p className="font-sans text-xs text-stone-500 tracking-wide">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 mt-10">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`transition-all duration-300 h-1 rounded-full ${i === activeTestimonial ? 'w-8 bg-stone-900' : 'w-2 bg-stone-300 hover:bg-stone-400'}`}
                  aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FAQ (AEO optimized) ════════ */}
        <section id="faq" className="bg-stone-50 py-24 lg:py-28 px-6 lg:px-12 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <SectionLabel>Frequently Asked</SectionLabel>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-stone-900 font-light">
                Questions, answered.
              </h2>
            </div>
            <div>
              {FAQS.map((faq, i) => (
                <FaqItem key={i} faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CONTACT ════════ */}
        <section id="contact" className="relative bg-white py-28 lg:py-32 px-6 lg:px-12 border-t border-stone-200 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-stone-100 blur-3xl opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <div className="mb-16 lg:mb-20 max-w-2xl">
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-stone-900 font-light">
                Let&rsquo;s build something beautiful together.
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* LEFT — Info */}
              <div className="lg:col-span-2 space-y-6">
                <a href="tel:+919106549945"
                  className="group block bg-stone-900 text-white rounded-lg p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-stone-900/20 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50">Call us directly</span>
                    <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Phone</p>
                  <p className="font-serif text-3xl font-light tracking-wide">+91 91065 49945</p>
                  <p className="font-sans text-xs text-white/50 mt-3">Tap to call — we&rsquo;d love to hear from you</p>
                </a>

                <div className="bg-stone-50 border border-stone-200 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: BRONZE }}>
                      <span className="font-serif text-xl text-white">KM</span>
                    </div>
                    <div>
                      <p className="font-serif text-lg text-stone-900">Kartavya Mandot</p>
                      <p className="font-sans text-xs tracking-wide text-stone-400">Principal Designer &amp; Founder</p>
                    </div>
                  </div>
                  <div className="-my-4">
                    {CONTACT_DETAILS.map((detail) => (<ContactDetailRow key={detail.label} detail={detail} />))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-stone-100 flex items-center gap-3">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 mr-1">Follow</span>
                    {SOCIALS.map((s) => (
                      <a key={s.label} href={s.href} aria-label={s.label}
                        className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-stone-900 hover:text-stone-900 transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — Form */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-stone-200 rounded-lg p-8 lg:p-12 shadow-sm">
                  <div className="mb-10">
                    <h3 className="font-serif text-2xl text-stone-900 font-light mb-2">Send us a message</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed max-w-md">
                      Share your vision and we&rsquo;ll get back to you with ideas. No pressure, just a conversation.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ════════ FOOTER ════════ */}
      <footer className="bg-stone-900 text-white px-6 lg:px-12 pt-20 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <Logo className="h-16 lg:h-20 w-auto" invert />
                <div className="leading-none">
                  <p className="font-serif text-lg font-medium">KM Core &amp; Decor</p>
                  <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-white/50 mt-1.5">Civil &amp; Interiors</p>
                </div>
              </div>
              <p className="font-serif text-base italic font-light" style={{ color: '#c4a87a' }}>
                Elevating Spaces, Enriching Lives.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-5">Services</h4>
              <ul className="space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.index}><a href="#services" className="font-sans text-sm text-white/70 hover:text-white transition-colors">{s.title}</a></li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-5">Explore</h4>
              <ul className="space-y-3">
                <li><a href="#studio" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Studio</a></li>
                <li><a href="#projects" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#process" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Process</a></li>
                <li><a href="#faq" className="font-sans text-sm text-white/70 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact NAP */}
            <div>
              <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-5">Contact</h4>
              <address className="not-italic space-y-3">
                <p className="font-sans text-sm text-white/70 leading-relaxed">512/513 National Plaza, Opposite Bank of Baroda, Alkapuri, Vadodara - 390007</p>
                <p><a href="tel:+919106549945" className="font-sans text-sm text-white/70 hover:text-white transition-colors">+91 91065 49945</a></p>
                <p><a href="mailto:kmcoredecor@gmail.com" className="font-sans text-sm text-white/70 hover:text-white transition-colors">kmcoredecor@gmail.com</a></p>
                <p><a href="https://www.kmcoredecor.in" className="font-sans text-sm text-white/70 hover:text-white transition-colors">www.kmcoredecor.in</a></p>
              </address>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="font-sans text-xs text-white/40">© {new Date().getFullYear()} KM Core &amp; Decor. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
