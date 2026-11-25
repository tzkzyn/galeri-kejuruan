import React from 'react';

export default function Manifesto() {
  return (
    <section id="manifesto" data-8b-section="manifesto">
      <div className="manifesto__ground" aria-hidden="true"></div>
      <div className="manifesto__inner">
        <h2 className="m-rule" data-8b-motion="rule">
          <span className="m-rule__line" aria-hidden="true"></span>
          <span className="m-rule__label">Perwujudan Gagasan Lewat Materi Kejuruan</span>
          <span className="m-rule__line" aria-hidden="true"></span>
        </h2>
        <p className="manifesto__text m-text-2">
          Galeri Kejuruan adalah <b>"Perwujudan Gagasan lewat Materi Kejuruan"</b>, merupakan pusat atau sumber belajar yang bermuara pada wahana peningkatan kompetensi guru kejuruan di berbagai <b>Kompetensi Keahlian.</b> Diinisiasi oleh BBPPMPV BMTI untuk <b>memerdekakan Guru dan Siswa</b> dalam pembelajaran berbasis kompetensi yang dapat diakses secara virtual, kapan dan dimana saja.
        </p>
        <div className="manifesto__foot">
          <p className="manifesto__note">
            Pada Portal Pelatihan Mandiri – fasilitas yang diberikan kepada guru untuk melakukan latihan kompetensi keahlian sesuai pilihannya secara mandiri.
          </p>
          <a className="m-link" href="#clubs">Pelajari Pelatihan Terbimbing</a>
        </div>
      </div>
    </section>
  );
}
