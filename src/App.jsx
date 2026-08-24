import { useEffect, useState } from 'react'
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Server, 
  Send, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  MapPin,
  Calendar
} from 'lucide-react'

// Custom SVG Icons for GitHub & LinkedIn
function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.68 1.68 0 1 0 0 3.36 1.68 1.68 0 0 0 0-3.36z" />
    </svg>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const internships = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Code for India',
      duration: 'May 2026 – Jul 2026',
      location: 'Hyderabad, IN',
      highlights: [
        'Delivered a full-stack Application Management System (AMS) independently, handling database schema design to frontend role-based routing.',
        'Implemented RBAC across 3 user roles (Super Admin, Webinar Host, Student) with protected REST APIs and separated role-specific dashboards.',
        'Integrated Google OAuth for one-click authentication and Resend for automated transactional emails across user roles.'
      ]
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Good Barley Co',
      duration: 'Dec 2025 – May 2026',
      location: 'Hyderabad, IN',
      highlights: [
        'Built and tested responsive React UIs, managed MongoDB database operations, and optimized backend API routes for an early-stage product.',
        'Contributed across full-stack REST API development, database design, and application performance optimization initiatives.'
      ]
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Production-grade full-stack e-commerce web app with separate user & admin dashboards, product management, cart, and order tracking.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Resend', 'Tailwind CSS'],
      features: [
        'JWT authentication with protected routing and admin RBAC.',
        'Automated order confirmation emails via Resend API.',
        'Designed & tested 20+ RESTful API endpoints in Postman.'
      ],
      githubLink: 'https://github.com/Atif-uddin/E-commerce',
      liveLink: null
    },
    {
      title: 'Enterprise QR Code Management',
      description: 'Enterprise QR platform for TalentYug featuring dynamic QR generation, Cloudinary image storage, and print layout customization.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Cloudinary', 'Zod', 'Tailwind CSS'],
      features: [
        'Live DB adapter switching between MongoDB & Supabase PostgreSQL.',
        'Advanced print layout engine supporting all paper sizes & PDF download.',
        'Runtime schema validation with Zod and type-safe API routes.'
      ],
      githubLink: 'https://github.com/Atif-uddin/QR-code-generator',
      liveLink: 'https://qr-code-generator-atif10.vercel.app/'
    },
    {
      title: 'Application Management System (AMS)',
      description: 'Multi-role web platform built from scratch with RBAC supporting Super Admin, Webinar Host, and Student access levels.',
      tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'OAuth 2.0', 'Resend'],
      features: [
        'Super Admin dashboard for host management, webinar topics, and user accounts.',
        'Protected route architecture ensuring strict role-based authorization.',
        'Google OAuth sign-in and Resend email notifications.'
      ],
      githubLink: 'https://github.com/Atif-uddin/webinar-ams',
      liveLink: null
    },
    {
      title: 'Random Password Generator',
      description: 'Responsive security password generator built with React and Tailwind CSS featuring real-time strength evaluation.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      features: [
        'Real-time strength indicator & character set customization.',
        'One-click instant clipboard copy function.',
        'Fully responsive UI published on GitHub Pages.'
      ],
      githubLink: 'https://github.com/Atif-uddin/password-generator',
      liveLink: 'https://atif-uddin.github.io/password-generator/'
    }
  ]

  const skillCategories = [
    {
      category: 'Languages & Core',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Vite', 'Context API']
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'OAuth 2.0', 'Resend API']
    },
    {
      category: 'Databases & ORM',
      skills: ['MongoDB', 'PostgreSQL (Supabase)', 'Mongoose', 'MongoDB Atlas']
    },
    {
      category: 'Developer Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Cloudinary', 'Vercel']
    }
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setErrorMessage('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json().catch(() => ({}))
      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        console.error('Contact submit error:', data.error)
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 7000)
      }
    } catch (error) {
      console.error(error)
      setErrorMessage(error.message || 'Network error. Please try again.')
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 7000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F19] dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-[#0B0F19]/90 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="#about" className="group flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono text-sm font-semibold shadow-sm group-hover:scale-105 transition-transform">
              MA
            </span>
            <span>Mohammad <span className="text-indigo-600 dark:text-indigo-400">Atifuddin</span></span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Atifuddin_Resume.pdf"
              download="Atifuddin_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md"
            >
              Resume
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19] px-6 pt-4 pb-6 space-y-4 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Atifuddin_Resume.pdf"
              download="Atifuddin_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm"
            >
              Download Resume
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-3xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for SDE-1 / Full Stack Developer Roles
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Full Stack Developer building <span className="text-indigo-600 dark:text-indigo-400">production-ready</span> web apps.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Mohammad Atifuddin</strong>. Full Stack Engineer (MERN Stack & Next.js) with 6+ months of hands-on startup & agency internship experience. I turn complex database schemas, REST APIs, and authentication flows into clean, high-performance web applications.
          </p>

          {/* Quick Info / Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-y border-slate-200 dark:border-slate-800/80 mb-8 font-sans">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Experience</p>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">6+ Months Intern</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Core Stack</p>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">MERN & Next.js</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">Hyderabad, India</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
              Explore Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-slate-800 dark:text-slate-200 font-medium text-sm sm:text-base transition-colors bg-white dark:bg-slate-900/50"
            >
              Contact Me
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a 
                href="https://github.com/Atif-uddin" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohammad-atifuddin-139774217" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Internship Experience */}
      <section id="experience" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              Internship Experience
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
              Hands-on engineering contributions at technology organizations.
            </p>
          </div>

          <div className="space-y-8">
            {internships.map((job, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base">{job.company}</p>
                  </div>
                  <div className="text-left md:text-right font-sans text-sm text-slate-500 dark:text-slate-400">
                    <p className="flex items-center gap-1.5 md:justify-end">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      {job.duration}
                    </p>
                    <p className="flex items-center gap-1.5 md:justify-end mt-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="text-indigo-500 shrink-0 font-bold mt-1">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <Layers className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
              Real-world full-stack web applications engineered with production features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/60 transition-all group"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-indigo-500 font-bold">›</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project External Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" /> Code
                    </a>
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-600 select-none">
                        Live Demo (Soon)
                      </span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <Code2 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              Technical Stack
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
              Languages, frameworks, databases, and developer tools I build with.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((sec, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                  {sec.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sec.skills.map((sk, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-500 transition-colors"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Education */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-1">
                <GraduationCap className="w-5 h-5" /> Education & Degree
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                B.Tech in Computer Science & Design (CSD)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Sree Chaitanya College of Engineering • Karimnagar, India
              </p>
            </div>
            <div className="text-left md:text-right font-sans">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium text-xs sm:text-sm border border-indigo-200 dark:border-indigo-800">
                CGPA: 7.2 / 10
              </span>
              <p className="text-slate-500 text-sm mt-2">2022 – 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/40 dark:bg-slate-900/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
              Open for full-stack engineering opportunities, project inquiries, or technical discussion. Drop a message below!
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 dark:text-white text-sm transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 dark:text-white text-sm transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 dark:text-white text-sm transition-all resize-none"
                  placeholder="Hi Atifuddin, I would like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-3.5 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                {formStatus === 'submitting' ? (
                  'Sending Message...'
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Message sent successfully! I will get back to you shortly.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium">
                  {errorMessage || 'Something went wrong. Please try again later.'}
                </div>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-10 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">
            © {new Date().getFullYear()} Mohammad Atifuddin. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a 
              href="https://github.com/Atif-uddin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammad-atifuddin-139774217" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="mailto:uddinatif34@gmail.com" 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}