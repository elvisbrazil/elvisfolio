import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar glass">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content glass">
          <p className="hero-subtitle">Full Stack Developer</p>
          <h1>Keener</h1>
          <p className="hero-description">
            Desenvolvedor apaixonado por criar experiências digitais incríveis.
            Transformo ideias em código limpo e interfaces elegantes.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn btn-secondary">Contato</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-card glass">
            <div className="skill-icon">🎨</div>
            <h3>Frontend</h3>
            <p>Criação de interfaces modernas e responsivas com foco em UX</p>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Tailwind</span>
            </div>
          </div>

          <div className="skill-card glass">
            <div className="skill-icon">⚙️</div>
            <h3>Backend</h3>
            <p>APIs robustas e escaláveis com arquitetura bem definida</p>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          <div className="skill-card glass">
            <div className="skill-icon">☁️</div>
            <h3>DevOps</h3>
            <p>Deploy e infraestrutura na nuvem com CI/CD automatizado</p>
            <div className="skill-tags">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          <div className="project-card glass">
            <div className="project-image">🚀</div>
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>Plataforma completa de e-commerce com carrinho, pagamentos e dashboard admin.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Stripe</span>
              </div>
              <div className="project-links">
                <a href="#">Ver Demo →</a>
                <a href="#">GitHub →</a>
              </div>
            </div>
          </div>

          <div className="project-card glass">
            <div className="project-image">💬</div>
            <div className="project-content">
              <h3>Real-time Chat App</h3>
              <p>Aplicativo de chat em tempo real com salas, notificações e compartilhamento de arquivos.</p>
              <div className="project-tech">
                <span>Next.js</span>
                <span>Socket.io</span>
                <span>MongoDB</span>
                <span>Redis</span>
              </div>
              <div className="project-links">
                <a href="#">Ver Demo →</a>
                <a href="#">GitHub →</a>
              </div>
            </div>
          </div>

          <div className="project-card glass">
            <div className="project-image">📊</div>
            <div className="project-content">
              <h3>Analytics Dashboard</h3>
              <p>Dashboard interativo para visualização de dados com gráficos dinâmicos.</p>
              <div className="project-tech">
                <span>React</span>
                <span>D3.js</span>
                <span>Python</span>
                <span>FastAPI</span>
              </div>
              <div className="project-links">
                <a href="#">Ver Demo →</a>
                <a href="#">GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Contato</h2>
        <div className="contact-content glass">
          <p>
            Interessado em trabalhar juntos? Entre em contato!
            Estou sempre aberto a discutir novos projetos e oportunidades.
          </p>
          <div className="contact-links">
            <a href="mailto:keener@email.com" className="contact-link">
              ✉️ Email
            </a>
            <a href="https://github.com/keener" target="_blank" rel="noopener noreferrer" className="contact-link">
              💻 GitHub
            </a>
            <a href="https://linkedin.com/in/keener" target="_blank" rel="noopener noreferrer" className="contact-link">
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Keener. Feito com ❤️ e muito código.</p>
      </footer>
    </div>
  )
}

export default App
