const skills = [
  'React',
  'Tailwind CSS',
  'Vite',
  'JavaScript',
  'Accessibility',
  'Responsive UI',
]

const projects = [
  {
    title: 'Featured Project',
    description:
      'A polished case study for your best work. Highlight the problem, your process, and the measurable result.',
  },
  {
    title: 'Client Collaboration',
    description:
      'Use this section for freelance work, agency projects, or product features where collaboration mattered.',
  },
  {
    title: 'Experimental Build',
    description:
      'Show something playful here: animations, design systems, dashboards, or an app that explores a new idea.',
  },
]

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          Your Name
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      <main id="home" className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-8 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              Frontend developer portfolio starter
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Build a portfolio that feels fast, modern, and unmistakably yours.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                This starter gives you a clean React + Tailwind foundation for showcasing
                your skills, featured work, and contact details.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Now building</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Portfolio website</h2>
              <p className="mt-3 text-slate-300">
                Customize this panel with your elevator pitch, current availability, or
                the kind of roles and clients you are targeting.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/50 p-8 backdrop-blur lg:grid-cols-2"
        >
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">About</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Introduce who you are and how you work.
            </h2>
          </div>
          <div className="space-y-4 text-slate-300">
            <p>
              Add a concise summary here about your background, the products you like to
              build, and what makes your approach valuable to teams or clients.
            </p>
            <p>
              Good portfolios usually focus on clarity: who you help, what you ship, and
              the results your work creates.
            </p>
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Projects</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Feature the work you want more of.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/10"
              >
                <p className="text-sm text-sky-300">Case study</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-sky-400/20 bg-sky-400/10 p-8 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-200">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Ready to turn this into your portfolio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Swap in your name, projects, links, and brand styling. You can also split this
            into reusable components once your sections start growing.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            hello@example.com
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
