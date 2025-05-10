import React from "react";
import Navbar from "../../components/Header";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects/Projects";
import projetData from "../../data/projetData.json";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects projet={projetData} />
    </div>
  );
};

export default Home;
