import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop.jsx";

function App() {
    return (
        <main className="bg-[#0a192f] min-h-screen text-slate-300">
            <Navbar />
            <BackToTop />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}

export default App;