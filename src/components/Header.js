import React from "react";
import "./Header.css"; // import file CSS untuk styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://leap.digitalbisa.id/uploads/products/logos/LOGEE.png" alt="Logee Logo" />
      </div>
      <nav className="nav">
        <div class="header-left">
          <a href="#">Produk</a>
          <a href="#">Solusi</a>
          <a href="#">Hubungi</a>
          <a href="#">Artikel</a>
        </div>
      </nav>
      <div className="auth-buttons">
        <button className="btn btn-register">Daftar</button>
        <button className="btn btn-login">Masuk</button>
      </div>
    </header>
  );
}

export default Header;
