import React from 'react'
import ReactDOM from 'react-dom/client'
import { Github, GitBranch, Rocket, Server, Terminal, Cloud, CheckCircle2, PlayCircle, Menu, X } from 'lucide-react'
import './index.css'

const steps = [
  { n: '01', title: 'Create React App', text: 'Build your application locally using React + Vite.', icon: Terminal },
  { n: '02', title: 'Git Repository', text: 'Initialize Git and commit your project history.', icon: GitBranch },
  { n: '03', title: 'Push to GitHub', text: 'Connect the local repository and push your code.', icon: Github },
  { n: '04', title: 'Deploy', text: 'Build the production files and publish the application.', icon: Rocket }
]

function App() {
  const [menu, setMenu] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const copyCommand = async () => {
    await navigator.clipboard.writeText('npm install && npm run dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="app">
      <nav className="nav">
        <div className="brand"><span className="brand-dot" /> DevOps<span>17</span></div>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="menu">
          {menu ? <X /> : <Menu />}
        </button>
        <div className={`links ${menu ? 'open' : ''}`}>
          <a href="#learn">Learn</a>
          <a href="#workflow">Workflow</a>
          <a href="#commands">Commands</a>
          <a href="#deploy">Deploy</a>
          <a className="github-btn" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="learn">
          <div className="hero-copy">
            <div className="eyebrow"><span>VIDEO 17</span> React + Vite → GitHub</div>
            <h1>From <em>localhost</em><br/>to the <strong>cloud.</strong></h1>
            <p>Learn the practical DevOps workflow for taking a Vite React application from your computer to a GitHub repository and preparing it for deployment.</p>
            <div className="actions">
              <a href="#workflow" className="primary"><PlayCircle size={19}/> Start Learning</a>
              <button className="secondary" onClick={copyCommand}>{copied ? 'Copied ✓' : 'Copy starter command'}</button>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-top"><span/><span/><span/><label>~/react-app</label></div>
            <div className="terminal-body">
              <p><b>$</b> npm create vite@latest my-app</p>
              <p><b>$</b> cd my-app</p>
              <p><b>$</b> npm install</p>
              <p className="dim"># start development server</p>
              <p><b>$</b> npm run dev</p>
              <p className="success">✓ Local: http://localhost:5173/</p>
              <p className="cursor">▌</p>
            </div>
          </div>
        </section>

        <section className="stats">
          <div><strong>React</strong><span>Frontend</span></div>
          <div><strong>Vite</strong><span>Build Tool</span></div>
          <div><strong>Git</strong><span>Version Control</span></div>
          <div><strong>GitHub</strong><span>Remote Repository</span></div>
        </section>

        <section className="section" id="workflow">
          <div className="section-heading">
            <div><span className="tag">THE WORKFLOW</span><h2>Four steps. One pipeline.</h2></div>
            <p>The basic flow you should understand before moving into CI/CD.</p>
          </div>
          <div className="steps">
            {steps.map(({n,title,text,icon:Icon}) => (
              <article className="step" key={n}>
                <div className="step-num">{n}</div>
                <div className="icon"><Icon size={22}/></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="command-section" id="commands">
          <div>
            <span className="tag">ESSENTIAL COMMANDS</span>
            <h2>Git commands to remember</h2>
            <p>Use these commands in your project folder after creating your React app.</p>
          </div>
          <div className="code-list">
            {[
              ['Initialize repository', 'git init'],
              ['Stage files', 'git add .'],
              ['Create commit', 'git commit -m "Initial commit"'],
              ['Connect GitHub', 'git remote add origin YOUR_REPO_URL'],
              ['Push code', 'git branch -M main && git push -u origin main']
            ].map(([label,cmd]) => <div className="code-row" key={label}><span>{label}</span><code>{cmd}</code></div>)}
          </div>
        </section>

        <section className="deploy" id="deploy">
          <div className="deploy-icon"><Cloud size={30}/></div>
          <div><span className="tag">NEXT STEP</span><h2>Build for production</h2><p>When your React app is ready, run <code>npm run build</code>. Vite creates the production files inside the <code>dist</code> folder.</p></div>
          <div className="build-box"><CheckCircle2 size={18}/><span>dist/ ready for deployment</span></div>
        </section>

        <section className="footer-cta">
          <Server size={28}/>
          <h2>Your DevOps journey starts here.</h2>
          <p>Understand the flow first. Then automate it with CI/CD, Docker and cloud infrastructure.</p>
          <a href="#learn" className="primary">Back to top ↑</a>
        </section>
      </main>

      <footer>Built with React + Vite · DevOps learning project</footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)