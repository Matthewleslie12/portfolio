import Navbar from "./componenets/Navbar";
import SideNav from "./componenets/SideNav";
import Tech from "./componenets/Tech";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div className="px-8">
        <Navbar />
        <SideNav />
      </div>
      <div className="px-8 md:px-36">
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
