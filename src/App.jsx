import { useEffect, useState } from 'react'
import { 
  Sun, 
  Moon, 
  Mail, 
  ExternalLink, 
  FileText, 
  Send, 
  CheckCircle2, 
  ArrowUpRight,
  Code2, 
  Database, 
  Server, 
  Layers, 
  Briefcase,
  GraduationCap,
  Sparkles,
  GitCommit,
  Terminal,
  Globe,
  Check
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
      highlights: [
        'Delivered an end-to-end Application Management System (AMS) independently, handling database schema design, protected REST APIs, and role-based frontend routing.',
        'Implemented RBAC across 3 distinct user roles (Super Admin, Webinar Host, Student) with dedicated permission-guarded dashboards.',
        'Integrated Google OAuth for one-click authentication and Resend for automated role-based transactional emails.'
      ]
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Good Barley Co',
      duration: 'Dec 2025 – May 2026',
      location: 'Hyderabad, IN',
      highlights: [
        'Built and tested responsive React user interfaces, managed MongoDB database collections, and optimized backend REST API latency.',
        'Contributed across full-stack feature development, database indexing, and product growth initiatives.'
      ]
    }
  ]

  const projects = [
    {
      title: 'Enterprise QR Code Management System',
      description: 'Engineered an enterprise QR platform for TalentYug with dynamic QR generation, Cloudinary image storage, and live database adapter switching between MongoDB and Supabase PostgreSQL. Built an advanced print layout engine supporting custom paper sizes with PDF export.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Cloudinary', 'Zod', 'Tailwind CSS'],
      github: 'https://github.com/Atif-uddin/QR-code-generator',
      live: 'https://qr-code-generator-atif10.vercel.app/'
    },
    {
      title: 'Application Management System (AMS)',
      description: 'Built a multi-role web platform from scratch with RBAC supporting Super Admin, Webinar Host, and Student access levels. Features protected route architecture, webinar session assignment, registration tracking, Google OAuth, and automated Resend emails.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Google OAuth', 'Resend'],
      github: 'https://github.com/Atif-uddin/webinar-ams',
      live: null
    },
    {
      title: 'E-Commerce Platform',
      description: 'Production-grade full-stack e-commerce application with separate user and admin dashboards, product inventory management, shopping cart, and order tracking. Features 20+ tested RESTful API endpoints and automated order confirmation emails via Resend.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Resend', 'Tailwind CSS'],
      github: 'https://github.com/Atif-uddin/E-commerce',
      live: null
    },
    {
      title: 'Random Password Generator',
      description: 'Fast, client-side security password generator with real-time strength evaluation, one-click clipboard copy, and customizable character configurations.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Atif-uddin/password-generator',
      live: 'https://atif-uddin.github.io/password-generator/'
    }
  ]

  // Dual Row Floating Tech Stack Items
  const techRow1 = [
    { name: 'React.js', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { name: 'Next.js', icon: <Server className="w-4 h-4 text-slate-800 dark:text-slate-100" /> },
    { name: 'TypeScript', icon: <Code2 className="w-4 h-4 text-blue-500" /> },
    { name: 'JavaScript (ES6+)', icon: <Code2 className="w-4 h-4 text-yellow-500" /> },
    { name: 'Tailwind CSS', icon: <Layers className="w-4 h-4 text-sky-400" /> },
    { name: 'HTML5 & CSS3', icon: <Layers className="w-4 h-4 text-orange-500" /> },
    { name: 'Vite', icon: <Code2 className="w-4 h-4 text-purple-400" /> },
    { name: 'Context API', icon: <Code2 className="w-4 h-4 text-emerald-400" /> }
  ]

  const techRow2 = [
    { name: 'Node.js', icon: <Server className="w-4 h-4 text-green-500" /> },
    { name: 'Express.js', icon: <Server className="w-4 h-4 text-slate-400" /> },
    { name: 'REST APIs', icon: <Server className="w-4 h-4 text-orange-400" /> },
    { name: 'MongoDB & Atlas', icon: <Database className="w-4 h-4 text-emerald-500" /> },
    { name: 'PostgreSQL (Supabase)', icon: <Database className="w-4 h-4 text-blue-400" /> },
    { name: 'JWT & OAuth 2.0', icon: <Code2 className="w-4 h-4 text-purple-400" /> },
    { name: 'Resend API', icon: <Send className="w-4 h-4 text-emerald-400" /> },
    { name: 'Git & GitHub', icon: <GithubIcon className="w-4 h-4 text-slate-400" /> },
    { name: 'Postman', icon: <Send className="w-4 h-4 text-orange-500" /> },
    { name: 'Cloudinary & Vercel', icon: <Server className="w-4 h-4 text-indigo-400" /> }
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
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#000000] text-zinc-900 dark:text-zinc-100 bg-grid-pattern transition-colors duration-200 antialiased">
      
      {/* Floating Bottom Dock Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-2 px-4 py-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800 shadow-xl text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
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
        <a href="#github" className="px-3 py-1.5 rounded-full hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          Activity
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
          {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
        </button>
      </nav>

      {/* Main Single Column Container */}
      <main className="max-w-3xl sm:max-w-4xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-36 space-y-20">
        
        {/* Intro / Hero Header */}
        <section id="about" className="space-y-8">
          
          {/* Availability status badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for SDE-1 & Full-Stack Developer Roles
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3">
              Mohammad Atifuddin
            </h1>
            <p className="text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-400">
              Full Stack Software Developer & Engineer
            </p>
          </div>

          {/* Point-wise clear introduction (0xomer style) */}
          <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 shadow-sm space-y-3.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-emerald-500 shrink-0 font-bold mt-0.5">▹</span>
              <span><strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Specialization:</strong> Full Stack Web Development (MERN Stack & Next.js), RESTful API design, database architecture, and authentication flows.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-emerald-500 shrink-0 font-bold mt-0.5">▹</span>
              <span><strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Experience:</strong> 6+ months of hands-on internship experience building and shipping production-ready web platforms end-to-end.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-emerald-500 shrink-0 font-bold mt-0.5">▹</span>
              <span><strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Core Stack:</strong> React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, PostgreSQL (Supabase), and Tailwind CSS.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-emerald-500 shrink-0 font-bold mt-0.5">▹</span>
              <span><strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Location:</strong> Hyderabad, Telangana, India.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-emerald-500 shrink-0 font-bold mt-0.5">▹</span>
              <span><strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Objective:</strong> Looking for an SDE-1 role to build scalable systems and solve real-world problems.</span>
            </p>
          </div>

          {/* Quick Action Link Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a 
              href="mailto:uddinatif34@gmail.com" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              <Mail className="w-4 h-4" /> Email me
            </a>
            <a 
              href="/Atifuddin_Resume.pdf" 
              download="Atifuddin_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium text-xs sm:text-sm transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" /> Resume (PDF)
            </a>
            <a 
              href="https://github.com/Atif-uddin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium text-xs sm:text-sm transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammad-atifuddin-139774217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium text-xs sm:text-sm transition-colors shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

        </section>

        {/* Floating Technical Stack Section (Dual-Row Horizontal Marquee) */}
        <section id="skills" className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/90 overflow-hidden">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2.5">
              <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Technical Stack & Skills
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Core technologies, frameworks, and developer tools I work with daily (hover to pause).
            </p>
          </div>

          {/* Row 1: Left to Right Marquee */}
          <div className="flex overflow-hidden py-1.5 select-none -mx-4 sm:-mx-8">
            <div className="animate-marquee flex gap-3 px-2">
              {[...techRow1, ...techRow1, ...techRow1].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/90 shadow-sm hover:border-indigo-500/60 font-mono text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 shrink-0 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left Marquee */}
          <div className="flex overflow-hidden py-1.5 select-none -mx-4 sm:-mx-8">
            <div className="animate-marquee-reverse flex gap-3 px-2">
              {[...techRow2, ...techRow2, ...techRow2].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/90 shadow-sm hover:border-indigo-500/60 font-mono text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 shrink-0 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/90">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2.5">
              <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Work & Internship Experience
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Engineering contributions at tech startups and organizations.
            </p>
          </div>

          <div className="space-y-6">
            {internships.map((job, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 pb-3 border-b border-zinc-100 dark:border-zinc-900">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-zinc-50">
                      {job.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {job.company} • <span className="text-xs font-normal text-zinc-500">{job.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 shrink-0">
                    {job.duration}
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {job.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-indigo-500 font-bold mt-1 text-xs">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/90">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Full-stack web platforms engineered with modern architectures.
              </p>
            </div>
            <a 
              href="https://github.com/Atif-uddin?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
            >
              All repositories on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all space-y-4 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 shrink-0 text-xs font-semibold">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white inline-flex items-center gap-1 transition-colors px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
                      >
                        <GithubIcon className="w-3.5 h-3.5" /> Code <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                    {project.live ? (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/40"
                      >
                        <Globe className="w-3.5 h-3.5" /> Live Demo <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-zinc-400 dark:text-zinc-600 text-xs px-2.5 py-1 select-none">
                        Live Demo (Soon)
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Contributions Section */}
        <section id="github" className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/90">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2.5">
              <GitCommit className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              GitHub Contributions & Activity
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Public commit history, repositories, and continuous code activity.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 shadow-sm space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-900 text-sm">
              <div className="flex items-center gap-3">
                <GithubIcon className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
                <div>
                  <a 
                    href="https://github.com/Atif-uddin" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 inline-flex items-center gap-1"
                  >
                    @Atif-uddin <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-zinc-500">Active repository contributions & open source</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  Full Stack Engineer
                </span>
              </div>
            </div>

            {/* GitHub Contribution Activity Calendar Graph */}
            <div className="overflow-x-auto py-2">
              <img 
                src="https://ghchart.rshah.org/4f46e5/Atif-uddin" 
                alt="Mohammad Atifuddin GitHub Contribution Graph" 
                className="w-full min-w-[620px] rounded-lg dark:invert dark:hue-rotate-180 transition-all opacity-90 hover:opacity-100"
                loading="lazy"
              />
            </div>

            <p className="text-xs text-center text-zinc-400 dark:text-zinc-500 font-mono">
              Live contributions dynamically tracked from GitHub profile.
            </p>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/90">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 shadow-sm space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Degree</span>
                <span>2022 – 2026</span>
              </div>
              <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
                B.Tech in Computer Science & Design (CSD)
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Sree Chaitanya College of Engineering • CGPA: 7.2 / 10
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 shadow-sm space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Certification</span>
                <span>Jan 2026 – May 2026</span>
              </div>
              <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
                Full Stack Web Development (MERN)
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Code for India • Certificate of Completion
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Get In Touch Section */}
        <section id="contact" className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/90">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2.5">
              <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Get In Touch
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Have an open role, project, or question? Send a message directly below or write to <a href="mailto:uddinatif34@gmail.com" className="text-zinc-900 dark:text-zinc-100 font-medium underline underline-offset-4 hover:text-indigo-600 dark:hover:text-indigo-400">uddinatif34@gmail.com</a>.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 outline-none text-sm text-zinc-900 dark:text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 outline-none text-sm text-zinc-900 dark:text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                rows="4"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 outline-none text-sm text-zinc-900 dark:text-white transition-colors resize-none"
                placeholder="Hi Atifuddin, I would like to connect about..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition-opacity shadow-sm"
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
              <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Message delivered successfully! I will reply shortly.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-xs sm:text-sm font-medium text-red-500 pt-2">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            )}
          </form>

          {/* Footer note */}
          <div className="pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400 dark:text-zinc-500">
            <span>© {new Date().getFullYear()} Mohammad Atifuddin. All rights reserved.</span>
            <span className="font-mono text-xs">atifuddin.dev</span>
          </div>
        </section>

      </main>

    </div>
  )
}