import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />

        <section id="about" className="section">
          <h2>About</h2>
        </section>

        <section id="hours" className="section">
          <h2>Hours</h2>
        </section>
      </main>
    </>
  );
}

export default App;