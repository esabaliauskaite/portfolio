import { Nav, Hero, About, Projects, Skills, Experience, Contact, Footer } from './components';

const App = () => (
  <div id="top" className="site">
    <a className="skip-link" href="#main">Skip to content</a>
    <Nav />
    <main id="main" tabIndex={-1}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
