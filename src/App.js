import Navbar from "./componenets/Navbar";
import Tech from "./componenets/Tech";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="bg-gray-200 px-8">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
