import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import profile from "./profile.jpg";

const projects = [
  {
    number: "01",
    title: "College Event & Activity Management System",
    description:
      "A full-stack platform for managing college events, student registrations, attendance, notifications, and certificates across Admin, Faculty, and Student roles.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],
    live: "https://college-event-management-system-gamma.vercel.app/",
    github: "https://github.com/anshulsharma48/college-event-management-system",
    featured: true,
  },
  {
    number: "02",
    title: "Attendance Analytics SaaS",
    description:
      "A production-ready attendance tracking platform with secure authentication, real-time attendance tracking, prediction tools, analytics, safe-bunk calculations, subject rankings, timelines, and heatmaps.",
    stack: ["React", "Firebase", "Firestore", "Storage", "Vercel"],
    live: "https://attendance-dashboard-gd2m.vercel.app/",
    github: "https://github.com/anshulsharma48/attendance-dashboard",
    featured: true,
  },
  {
    number: "03",
    title: "Quiz Application with Score Card",
    description:
      "A Java desktop quiz application with a Swing GUI, MySQL database integration through JDBC, scoring logic, and result tracking.",
    stack: ["Java", "Swing", "MySQL", "JDBC"],
    live: null,
    github:
      "https://github.com/anshulsharma48/Quiz-Application-with-Score-Card-using-Java-Swing-and-MySQL",
    featured: true,
  },
  {
    number: "04",
    title: "Face-Based Attendance Recorder",
    description:
      "A computer-vision mini project exploring face recognition and automated attendance recording using Python and OpenCV.",
    stack: ["Python", "OpenCV"],
    live: null,
    github: "https://github.com/anshulsharma48/FACE-BASED-ATTENDANCE-RECORDER",
    featured: false,
  },
];

const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Thunder Client"],
  },
  {
    label: "Core CS",
    skills: ["OOP", "DBMS", "DSA", "Operating Systems", "Software Engineering"],
  },
];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M14 5h5v5" />
        <path d="m19 5-9 9" />
        <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.8S18 0.4 15 2.3a13.4 13.4 0 0 0-6 0C6 0.4 4.8.8 4.8.8A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" rx="1" />
        <path d="M4 4h.01" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </>
    ),
    moon: (
      <>
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("anshul-theme");
    return saved ? saved === "dark" : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("anshul-theme", dark ? "dark" : "light");
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          AS<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDark((value) => !value)}
          >
            <Icon name={dark ? "sun" : "moon"} size={17} />
          </button>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={21} />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> Available for opportunities
            </div>
            <h1>
              Hi, I'm <span>Anshul Sharma.</span>
            </h1>
            <h2>
              MCA Student <b>·</b> Aspiring Software Developer
            </h2>
            <p className="hero-text">
              I build practical web applications and strengthen my software
              development skills through hands-on projects with React, Node.js,
              Java, and databases.
            </p>

            <div className="hero-buttons">
              <a className="button primary" href="#projects">
                View Projects <Icon name="arrow" size={17} />
              </a>
              <a
                className="button secondary"
                href="mailto:anshulbhardwaj0401@gmail.com"
              >
                Email Me <Icon name="mail" size={16} />
              </a>
            </div>

            <div className="quick-links">
              <a
                href="https://github.com/anshulsharma48"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" size={17} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anshul-0401-sharma/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" size={17} /> LinkedIn
              </a>
              <span className="location">Delhi, India</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <img src={profile} alt="Anshul Sharma" className="portrait" />
            </div>
            <div className="code-card">
              <div className="code-dots">
                <i />
                <i />
                <i />
              </div>
              <code>
                <span className="purple">const</span> developer = {"{"}
                <br />
                &nbsp;&nbsp;focus: <span className="blue">"software"</span>,
                <br />
                &nbsp;&nbsp;stack: <span className="blue">"MERN + Java"</span>
                <br />
                {"}"};
              </code>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div>
            <strong>03</strong>
            <span>Featured projects</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Core stacks</span>
          </div>
          <div>
            <strong>06+</strong>
            <span>Core CS subjects</span>
          </div>
          <div>
            <strong>2027</strong>
            <span>MCA graduation</span>
          </div>
        </section>

        <section id="skills" className="section content-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">01 / Skills</p>
              <h2>
                Tools I use to <span>build.</span>
              </h2>
            </div>
            <p>
              Focused on practical development, clean fundamentals, and
              continuous learning.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.label}>
                <h3>{group.label}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="soft-skills">
            <span>Problem Solving</span>
            <span>Quick Learning</span>
            <span>Time Management</span>
          </div>
        </section>

        <section
          id="projects"
          className="section content-section projects-section"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / Projects</p>
              <h2>
                Things I've <span>built.</span>
              </h2>
            </div>
            <p>
              Projects that reflect my progression from frontend fundamentals to
              full-stack application development.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article
                className={
                  project.featured
                    ? "project-card featured"
                    : "project-card secondary-project"
                }
                key={project.title}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-top">
                    <div>
                      <p className="project-label">
                        {project.featured
                          ? "Featured project"
                          : "Additional project"}
                      </p>
                      <h3>{project.title}</h3>
                    </div>
                    <div className="project-links">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <Icon name="external" size={17} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open GitHub for ${project.title}`}
                        >
                          <Icon name="github" size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-cta">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live Demo <Icon name="arrow" size={15} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Source Code <Icon name="arrow" size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="section content-section education-section"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 / Education</p>
              <h2>
                Learning the <span>fundamentals.</span>
              </h2>
            </div>
          </div>

          <div className="education-grid">
            <article className="education-card">
              <div className="edu-year">2025 — 2027</div>
              <div>
                <h3>Master of Computer Applications</h3>
                <p>JIMS, IPU</p>
                <span>Final Year · Expected 2027</span>
              </div>
            </article>
            <article className="education-card">
              <div className="edu-year">2022 — 2025</div>
              <div>
                <h3>Bachelor of Computer Applications</h3>
                <p>IITM, IPU</p>
                <span>Graduated 2025</span>
              </div>
            </article>
          </div>

          <div className="learning-block">
            <div>
              <p className="section-kicker">Courses & Workshops</p>
              <h3>Continuous learning</h3>
            </div>
            <div className="learning-items">
              <span>Python Essentials</span>
              <span>Java & C++ Problem Solving Workshop</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-inner">
            <div>
              <p className="section-kicker">04 / Contact</p>
              <h2>
                Let's build something <span>useful.</span>
              </h2>
              <p>
                I'm currently focused on software development and open to
                internship and placement opportunities.
              </p>
            </div>
            <a
              className="contact-email"
              href="mailto:anshulbhardwaj0401@gmail.com"
            >
              <span>anshulbhardwaj0401@gmail.com</span>
              <Icon name="arrow" size={20} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Anshul Sharma</p>
        <div>
          <a
            href="https://github.com/anshulsharma48"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anshul-0401-sharma/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:anshulbhardwaj0401@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
