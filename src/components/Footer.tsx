import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" data-8b-section="footer">
      <p className="footer__mark" aria-hidden="true" data-8b-motion="embolden">
        <span style={{ "--len": 15 } as React.CSSProperties}>
          galeri<b>kejuruan</b>
        </span>
      </p>
      <div className="footer__cols">
        <div>
          <h2 className="m-text-3">Sahabat Cerdas</h2>
          <p>
            BBPPMPV Bidang Mesin dan Teknik Industri (BBPPMPV BMTI)<br />
            Kementerian Pendidikan Dasar dan Menengah RI
          </p>
          <div style={{ marginTop: "14px", display: "flex", gap: "10px" }}>
            <a className="m-badge" href="https://www.facebook.com/bmti.kemdikbud/" target="_blank" rel="noopener noreferrer">FB</a>
            <a className="m-badge" href="https://www.instagram.com/bmti.kemdikbud/" target="_blank" rel="noopener noreferrer">IG</a>
            <a className="m-badge" href="https://twitter.com/bmti_kemdikbud" target="_blank" rel="noopener noreferrer">TW</a>
            <a className="m-badge" href="https://www.youtube.com/channel/UCKH7TY5zOLIa5uWYpDgZWjQ" target="_blank" rel="noopener noreferrer">YT</a>
          </div>
        </div>
        <div>
          <h2 className="m-text-3">Useful Links</h2>
          <ul>
            <li><a className="m-link" href="#hero">About Galeri</a></li>
            <li><a className="m-link" href="#board">Mitra Industri</a></li>
            <li><a className="m-link" href="https://sintesa.kejuruan.id/" target="_blank" rel="noopener noreferrer">Portal SINTESA</a></li>
            <li><a className="m-link" href="https://linktr.ee/metaversebmti" target="_blank" rel="noopener noreferrer">Metaverse BMTI</a></li>
          </ul>
        </div>
        <div>
          <h2 className="m-text-3">Help?</h2>
          <ul>
            <li><a className="m-link" href="#faq">FAQ</a></li>
            <li><a className="m-link" href="#membership">Alur Pembelajaran</a></li>
            <li><a className="m-link" href="#manifesto">Pelatihan Mandiri</a></li>
            <li><a className="m-link" href="#clubs">Pelatihan Terbimbing</a></li>
          </ul>
        </div>
        <div>
          <h2 className="m-text-3">Alamat</h2>
          <p>BBPPMPV BMTI</p>
          <p>Jl. Pesantren KM 2, Cibabat, Cimahi Utara 40513.</p>
          <p style={{ marginTop: "8px" }}>Email: bbppmpv.bmti@kemdikbud.go.id</p>
          <p>Tel/WA: (022) 0000000 / 0800-0000-0000</p>
        </div>
      </div>
      <div className="footer__base">
        <p>© 2022 - Galeri Kenjuruan. All Rights Reserved.</p>
        <p className="footer__legal">
          <a className="m-link" href="#footer">Privacy</a>
          <a className="m-link" href="#footer">Terms</a>
        </p>
      </div>
    </footer>
  );
}
