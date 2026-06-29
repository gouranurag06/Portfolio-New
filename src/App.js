import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./Navbar";
import Main from "./Main";
import AboutMe from "./About_me";
import WhyHireMe from "./WhyHireMe";
import Skills from "./Skills";
import Projects from "./projects";
import ContactForm from "./ContactForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-wave">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Main />
          <AboutMe />
          <WhyHireMe />
          <Skills />
          <Projects />
          <ContactForm />
        </div>
      )}
    </>
  );
}

export default App;