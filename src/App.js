import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsSection />
    </div>
  );
}

export default App;
