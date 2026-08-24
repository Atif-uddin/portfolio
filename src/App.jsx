import { useEffect, useState } from 'react'
import { 
  Sun, 
  Moon, 
  Mail, 
  ExternalLink, 
  FileText, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Layers,
  MapPin,
  Calendar,
  Briefcase
} from 'lucide-react'

// Custom SVGs for GitHub and LinkedIn to ensure zero dependency glitch
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.68 1.68 0 1 0 0 3.36 1.68 1.68 0 0 0 0-3.36z" />
    </svg>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const internships = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Code for India',
      duration: 'May 2026 – Jul 2026',
      location: 'Hyderabad, IN',
      description: 'Delivered an Application Management System (AMS) independently, handling database schema design to frontend role-based routing. Implemented RBAC across 3 user roles (Super Admin, Webinar Host, Student) with protected REST APIs, and integrated Google OAuth & Resend for automated role-based transactional emails.'
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Good Barley Co',
      duration: 'Dec 2025 – May 2026',
      location: 'Hyderabad, IN',
      description: 'Built and tested responsive user interfaces, managed MongoDB database operations, and optimized backend API performance for an early-stage startup product. Contributed across REST API development, database design, and application performance improvements.'
    }
  ]

  const projects = [
    {
      title: 'Enterprise QR Code Management System',
      description: 'Engineered an enterprise QR platform for TalentYug with dynamic QR generation, Cloudinary image storage, and live database adapter switching between MongoDB and Supabase PostgreSQL. Built an advanced print layout engine with custom paper sizes and PDF export.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Cloudinary', 'Zod', 'Tailwind CSS'],
      github: 'https://github.com/Atif-uddin/QR-code-generator',
      live: 'https://qr-code-generator-atif10.vercel.app/'
    },
    {
      title: 'Application Management System (AMS)',
      description: 'Built a multi-role web platform from scratch with RBAC supporting Super Admin, Webinar Host, and Student access levels. Features protected route architecture, host assignment, registration tracking, Google OAuth, and Resend email workflows.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Google OAuth', 'Resend'],
      github: 'https://github.com/Atif-uddin/webinar-ams',
      live: null
    },
    {
      title: 'E-Commerce Platform',
      description: 'Production-grade full-stack e-commerce application with separate user and admin dashboards, inventory management, shopping cart, and order tracking. Features 20+ tested RESTful API endpoints and automated order confirmation emails via Resend.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Resend', 'Tailwind CSS'],
      github: 'https://github.com/Atif-uddin/E-commerce',
      live: null
    },
    {
      title: 'Random Password Generator',
      description: 'Fast, client-side security password generator with real-time strength feedback, one-click clipboard copy, and customizable character configurations.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Atif-uddin/password-generator',
      live: 'https://atif-uddin.github.io/password-generator/'
    }
  ]

  const skillGroups = [
    {
      title: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend',
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'Vite', 'Context API']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth 2.0', 'Resend']
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'PostgreSQL (Supabase)', 'Mongoose', 'MongoDB Atlas']
    },
    {
      title: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Cloudinary', 'Vercel']
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

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#000000] text-zinc-900 dark:text-zinc-100 bg-grid-pattern transition-colors duration-200">
      
      {/* Floating Bottom / Header Dock Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 shadow-lg text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <a href="#about" className="px-3 py-1.5 rounded-full hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          About
        </a>
        <a href="#experience" className="px-3 py-1.5 rounded-full hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          Experience
        </a>
        <a href="#projects" className="px-3 py-1.5 rounded-full hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          Projects
        </a>
        <a href="#skills" className="px-3 py-1.5 rounded-full hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          Skills
        </a>
        <a href="#contact" className="px-3 py-1.5 rounded-full hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          Contact
        </a>
        <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800 mx-1" />
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="p-1.5 rounded-full hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
      </nav>

      {/* Main Single Column Container */}
      <main className="max-w-2xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-32">
        
        {/* Intro / Hero Header */}
        <section id="about" className="mb-16">
          
          {/* Availability status badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for SDE-1 & Full-Stack Roles
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3">
            Mohammad Atifuddin
          </h1>
          
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-medium mb-6">
            Full Stack Developer (MERN & Next.js) based in Hyderabad, IN
          </p>

          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            I'm a full-stack engineer with 6+ months of internship experience building production-ready web applications end-to-end. I focus on clean architecture, reliable REST APIs, database schemas, and responsive user interfaces.
          </p>

          {/* Clean text action links */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium">
            <a 
              href="mailto:uddinatif34@gmail.com" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" /> Email me
            </a>
            <a 
              href="/Atifuddin_Resume.pdf" 
              download="Atifuddin_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </a>
            <a 
              href="https://github.com/Atif-uddin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" /> GitHub <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammad-atifuddin-139774217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 dark:text-zinc-500 mb-6">
            Work Experience
          </h2>

          <div className="space-y-8">
            {internships.map((job, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {job.role} <span className="text-zinc-400 font-normal">at</span> <span className="font-semibold text-zinc-900 dark:text-zinc-100">{job.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
                    {job.duration}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                  {job.location}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="mb-16 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 dark:text-zinc-500">
              Selected Projects
            </h2>
            <a 
              href="https://github.com/Atif-uddin?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              View all on GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/60 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 shrink-0 text-xs font-medium">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white inline-flex items-center gap-1 transition-colors"
                      >
                        Code <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors"
                      >
                        Live <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="mb-16 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 dark:text-zinc-500 mb-6">
            Skills & Technologies
          </h2>

          <div className="space-y-4">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 text-sm">
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 w-28 shrink-0 uppercase pt-1">
                  {group.title}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 dark:text-zinc-500 mb-6">
            Education & Certifications
          </h2>

          <div className="space-y-6 text-sm">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  B.Tech in Computer Science & Design (CSD)
                </h3>
                <span className="text-xs font-mono text-zinc-400 shrink-0">2022 – 2026</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Sree Chaitanya College of Engineering • CGPA: 7.2 / 10
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Full Stack Web Development (MERN Stack)
                </h3>
                <span className="text-xs font-mono text-zinc-400 shrink-0">Jan 2026 – May 2026</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Code for India • Certificate of Completion
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Get In Touch Section */}
        <section id="contact" className="pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 dark:text-zinc-500 mb-3">
            Contact
          </h2>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Have a project in mind, an open role, or just want to say hi? Send me a message or write directly to <a href="mailto:uddinatif34@gmail.com" className="text-zinc-900 dark:text-zinc-100 font-medium underline underline-offset-4 hover:text-indigo-600 dark:hover:text-indigo-400">uddinatif34@gmail.com</a>.
          </p>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-lg bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 outline-none text-xs sm:text-sm text-zinc-900 dark:text-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-lg bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 outline-none text-xs sm:text-sm text-zinc-900 dark:text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">Message</label>
              <textarea
                rows="4"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 outline-none text-xs sm:text-sm text-zinc-900 dark:text-white transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium text-xs sm:text-sm hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {formStatus === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Send Message
                </>
              )}
            </button>

            {formStatus === 'success' && (
              <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2">
                <CheckCircle2 className="w-4 h-4" /> Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-xs sm:text-sm font-medium text-red-500 pt-2">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            )}
          </form>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
            <span>© {new Date().getFullYear()} Mohammad Atifuddin</span>
            <span className="font-mono text-[11px]">atifuddin.dev</span>
          </div>
        </section>

      </main>

    </div>
  )
}