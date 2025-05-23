import React from "react";
import Navbar from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import projetData from "../../data/projetData.json";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="background-wrapper">
        <Skills />
        <Projects projet={projetData} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
