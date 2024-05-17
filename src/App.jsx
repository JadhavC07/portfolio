import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./components/Resume";
import Blog from "./Pages/blogs/Blog";
import BlogOne from "./Pages/blogs/BlogOne";

const Loader = () => {
  return (
    <div className="loader">
      <div className="justify-content-center jimu-primary-loading"></div>
    </div>
  );
};
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/home" element={<Home />} />
            <Route path="portfolio/skills" element={<Skills />} />
            <Route path="portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="portfolio/contact" element={<Contact />} />
            <Route path="portfolio/resume" element={<Resume />} />
            <Route path="portfolio/blogs" element={<BlogOne />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
