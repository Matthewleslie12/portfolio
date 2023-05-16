import Navbar from "./componenets/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="App bg-gray-200 px-8">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
