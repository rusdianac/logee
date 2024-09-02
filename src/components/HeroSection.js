import React from "react";
import "./HeroSection.css"; // import file CSS untuk styling

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Transformasi Digital Terdepan <br /> Bisnis Logistik Anda
        </h1>
        <p>Logee hadir menghubungkan seluruh pemain logistik dalam satu ekosistem, memberikan solusi nyata untuk keuntungan bisnis Anda.</p>
        <div className="hero-buttons">
          <button className="btn btn-trial">Coba 7 Hari Gratis!</button>
          <button className="btn btn-video">Tonton Video</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
