import { useEffect, useState } from 'react'
import { Terminal, Mail, ExternalLink, Code2, Database, LayoutTemplate, Server, Send } from 'lucide-react'

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
  const [typingText, setTypingText] = useState('')
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  
  const fullText = "Mohammad Atifuddin\nFull Stack Web Developer\n> MERN Stack | Next.js | TypeScript"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)
    return () => clearInterval(typingInterval)
  }, [])

  const skillsRow1 = [
    { name: 'React.js', icon: <Code2 className="w-5 h-5 text-cyan-400" /> },
    { name: 'Next.js', icon: <Server className="w-5 h-5 text-slate-800 dark:text-slate-200" /> },
    { name: 'TypeScript', icon: <Code2 className="w-5 h-5 text-blue-500" /> },
    { name: 'JavaScript (ES6+)', icon: <Code2 className="w-5 h-5 text-yellow-500" /> },
    { name: 'Tailwind CSS', icon: <LayoutTemplate className="w-5 h-5 text-sky-400" /> },
    { name: 'HTML5 & CSS3', icon: <LayoutTemplate className="w-5 h-5 text-orange-500" /> },
    { name: 'Vite', icon: <Code2 className="w-5 h-5 text-purple-400" /> },
    { name: 'Context API', icon: <Code2 className="w-5 h-5 text-emerald-400" /> },
  ]

  const skillsRow2 = [
    { name: 'Node.js', icon: <Server className="w-5 h-5 text-green-500" /> },
    { name: 'Express.js', icon: <Server className="w-5 h-5 text-slate-400" /> },
    { name: 'REST APIs', icon: <Server className="w-5 h-5 text-orange-400" /> },
    { name: 'MongoDB & Atlas', icon: <Database className="w-5 h-5 text-emerald-500" /> },
    { name: 'PostgreSQL (Supabase)', icon: <Database className="w-5 h-5 text-blue-400" /> },
    { name: 'JWT & OAuth 2.0', icon: <Code2 className="w-5 h-5 text-purple-400" /> },
    { name: 'Resend Email', icon: <Send className="w-5 h-5 text-emerald-400" /> },
    { name: 'Git & GitHub', icon: <GithubIcon className="w-5 h-5 text-slate-400" /> },
    { name: 'Postman', icon: <Send className="w-5 h-5 text-orange-500" /> },
    { name: 'Cloudinary & Vercel', icon: <Server className="w-5 h-5 text-indigo-400" /> },
  ]

  const internships = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Code for India',
      duration: 'May 2026 – Jul 2026',
      location: 'Hyderabad, IN',
      description: [
        'Delivered a full-stack Application Management System (AMS) independently, handling everything from database schema design to frontend role-based routing.',
        'Implemented RBAC across 3 user roles — Super Admin, Webinar Host, and Student — with protected REST APIs and fully separated role-specific dashboards.',
        'Integrated Google OAuth for one-click sign-in and Resend for automated transactional emails across all user roles.'
      ]
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Good Barley Co',
      duration: 'Dec 2025 – May 2026',
      location: 'Hyderabad, IN',
      description: [
        'Built and tested responsive UIs, managed MongoDB database operations, and optimized backend API performance for an early-stage startup product.',
        'Contributed across the full stack — from REST API development and database design to product promotion and content optimization initiatives.'
      ]
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Production-grade full-stack e-commerce app with separate user/admin dashboards, product management, and order tracking.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Resend', 'Tailwind CSS'],
      features: [
        'JWT authentication with protected routing and admin RBAC.',
        'Automated order confirmation emails via Resend.',
        'Designed and tested 20+ RESTful API endpoints.'
      ],
      icon: <LayoutTemplate className="w-6 h-6" />,
      githubLink: 'https://github.com/Atif-uddin/E-commerce',
      liveLink: null
    },
    {
      title: 'Enterprise QR Code Management',
      description: 'Enterprise QR platform for TalentYug with dynamic QR generation and print layout engine.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Cloudinary', 'Zod', 'Tailwind CSS'],
      features: [
        'Live DB adapter switching between MongoDB and Supabase.',
        'Advanced print layout engine with PDF download.',
        'Runtime schema validation with Zod and fully type-safe API routes.'
      ],
      icon: <Database className="w-6 h-6" />,
      githubLink: 'https://github.com/Atif-uddin/QR-code-generator',
      liveLink: 'https://qr-code-generator-atif10.vercel.app/'
    },
    {
      title: 'Application Management System (AMS)',
      description: 'Multi-role web platform from scratch with RBAC supporting Super Admin, Webinar Host, and Student roles.',
      tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'OAuth', 'Resend'],
      features: [
        'Super Admin can create hosts, assign topics, and deactivate users.',
        'Protected route architecture for specific dashboard access.',
        'Google OAuth sign-in and role-based emails.'
      ],
      icon: <Server className="w-6 h-6" />,
      githubLink: 'https://github.com/Atif-uddin/webinar-ams',
      liveLink: null
    },
    {
      title: 'Random Password Generator',
      description: 'Responsive password generator on GitHub Pages with real-time strength feedback.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      features: [
        'Real-time strength feedback.',
        'One-click clipboard copy.',
        'Fully customizable character options.'
      ],
      icon: <Code2 className="w-6 h-6" />,
      githubLink: 'https://github.com/Atif-uddin/password-generator',
      liveLink: 'https://atif-uddin.github.io/password-generator/'
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
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      console.error(error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0A0A0A] dark:text-slate-200 transition-colors duration-300 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800/50 bg-slate-50/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Terminal className="w-6 h-6 text-emerald-500" />
            <a href="#">Atifuddin<span className="text-emerald-500">.dev</span></a>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
            <a
              href="/Atifuddin_Resume.pdf"
              download="Atifuddin_Resume.pdf"
              className="px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border border-slate-300 dark:border-slate-800 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-colors"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight text-slate-900 dark:text-white">
              Building real <br/>
              solutions at <span className="text-emerald-500">scale.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Full Stack Developer (MERN) with 6+ months of internship experience shipping production-ready web applications from database schema to responsive UIs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                View Projects
              </a>
              <a href="https://github.com/Atif-uddin" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-500 font-medium rounded-lg transition-colors flex items-center gap-2 bg-white dark:bg-slate-900">
                <GithubIcon className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>
          
          {/* Animated Terminal Window */}
          <div className="w-full rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#111] shadow-2xl">
            <div className="bg-slate-200 dark:bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-300 dark:border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs font-mono text-slate-500">atifuddin@dev: ~</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base h-[250px] text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
              <span className="text-emerald-500">❯</span> ./greet.sh
              <br/><br/>
              {typingText}
              <span className="animate-pulse bg-emerald-500 w-2 h-5 inline-block align-middle ml-1"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800/50">
        <div className="mb-12">
          <h3 className="text-3xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            <Terminal className="w-8 h-8 text-emerald-500" />
            Internship Experience
          </h3>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{internship.role}</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-lg">{internship.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">{internship.duration}</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">{internship.location}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {internship.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="text-emerald-500 mt-1.5">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800/50">
        <div className="mb-12">
          <h3 className="text-3xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            <Terminal className="w-8 h-8 text-emerald-500" />
            Featured Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all hover:-translate-y-1">
              <div className="mb-6 inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {project.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {project.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">▹</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((item, idx) => (
                  <span key={idx} className="font-mono text-xs px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> Code
                </a>
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-600 cursor-not-allowed select-none">
                    <ExternalLink className="w-4 h-4" /> Live Demo (Soon)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h3 className="text-3xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            <Terminal className="w-8 h-8 text-emerald-500" />
            Technical Stack
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            Technologies and tools I work with every day (hover to pause).
          </p>
        </div>

        {/* Floating Ticker Row 1 */}
        <div className="flex overflow-hidden py-3 select-none">
          <div className="animate-marquee flex gap-4">
            {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/80 hover:shadow-emerald-500/10 transition-all font-mono text-sm shrink-0"
              >
                {skill.icon}
                <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Ticker Row 2 */}
        <div className="flex overflow-hidden py-3 select-none mt-2">
          <div className="animate-marquee-reverse flex gap-4">
            {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/80 hover:shadow-emerald-500/10 transition-all font-mono text-sm shrink-0"
              >
                {skill.icon}
                <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800/50">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In <span className="text-emerald-500">Touch</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300 font-mono">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-50 dark:bg-[#0A0A0A] border border-slate-300 dark:border-slate-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300 font-mono">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-50 dark:bg-[#0A0A0A] border border-slate-300 dark:border-slate-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300 font-mono">Message</label>
              <textarea
                rows="5"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-50 dark:bg-[#0A0A0A] border border-slate-300 dark:border-slate-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm resize-none"
                placeholder="Hello Atifuddin..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full md:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 font-mono"
            >
              {formStatus === 'submitting' ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
            
            {formStatus === 'success' && (
              <p className="text-emerald-500 font-mono text-sm mt-4">Message sent successfully! I'll get back to you soon.</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-500 font-mono text-sm mt-4">Something went wrong. Please try again later.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/50 py-12 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/Atif-uddin" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-atifuddin-139774217" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="mailto:uddinatif34@gmail.com" className="text-slate-400 hover:text-emerald-500 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-slate-500 dark:text-slate-500 font-mono text-sm">
          Designed & Built by Mohammad Atifuddin
        </p>
      </footer>
    </div>
  )
}