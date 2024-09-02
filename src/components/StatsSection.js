import React from "react";
import "./StatsSection.css"; // import file CSS untuk styling

function StatsSection() {
  return (
    <section className="stats">
      <div className="stat-item">
        <h3>2626</h3>
        <p>Pengiriman Selesai</p>
      </div>
      <div className="stat-item">
        <h3>2000</h3>
        <p>Pelanggan Puas</p>
      </div>
      <div className="stat-item">
        <h3>95%</h3>
        <p>Tingkat Retensi</p>
      </div>
      <div className="stat-item">
        <h3>130</h3>
        <p>Jumlah Gudang</p>
      </div>
    </section>
  );
}

export default StatsSection;
