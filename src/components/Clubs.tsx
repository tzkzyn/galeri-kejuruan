import React from 'react';

export default function Clubs() {
  const programs = [
    {
      mono: "1",
      seal: "PKB",
      surface: "m-surface",
      title: "Pengembangan Keprofesian Berkelanjutan (PKB)",
      meta: "3 Moda: Tatap Muka · Daring Murni · Daring Kombinasi",
      desc: "Program pemberdayaan komunitas Guru dan Tenaga Kependidikan melalui Ditjen GTK yang dilaksanakan oleh BBPPMPV sebagai UPT serta Dinas Pendidikan guna meningkatkan kualitas pengajaran berkelanjutan."
    },
    {
      mono: "2",
      seal: "DUDI",
      surface: "m-surface-2",
      title: "Upskilling dan Reskilling Berstandar Industri",
      meta: "Kemitraan Industri · Soft Skills · PJBL",
      desc: "Akselerasi peningkatan kompetensi guru kejuruan SMK sesuai dengan standar Dunia Usaha dan Dunia Industri (DUDI). Berlatih kurikulum berbasis proyek (PJBL) dan mengembangkan modul bersama DUDI."
    },
    {
      mono: "3",
      seal: "DIKSI",
      surface: "m-surface-3",
      title: "Suplemen Kompetensi Keahlian",
      meta: "Teaching Factory · Pengajar Tamu Industri",
      desc: "Diusung Direktorat Jenderal Pendidikan Vokasi untuk menciptakan kurikulum adaptif, agile, dan fleksibel berbasis riset terapan, mengantarkan guru berjiwa kewirausahaan tangguh dan berdaya saing tinggi."
    },
    {
      mono: "4",
      seal: "VR",
      surface: "m-surface-4",
      title: "Ruang Simulasi Virtual & Metaverse",
      meta: "Virtual Reality · Ruang Belajar Virtual 3D",
      desc: "Inovasi pembelajaran interaktif berbasis teknologi imersif yang memerdekakan guru dan siswa untuk melakukan eksplorasi alat dan praktikum kejuruan secara virtual, kapan pun dan di mana pun."
    }
  ];

  return (
    <section id="clubs" data-8b-section="clubs">
      <div className="clubs__head">
        <h2 className="m-text-2" data-8b-motion="embolden">Pelatihan <b>Terbimbing</b></h2>
        <p className="m-text-6">
          Program unggulan pendampingan dan diklat vokasi terstruktur yang diselenggarakan oleh BBPPMPV BMTI bersama Dunia Usaha dan Dunia Industri (DUDI).
        </p>
      </div>
      <ul className="clubs__grid">
        {programs.map((col, idx) => (
          <li className={`clubs__tile ${col.surface}`} key={idx}>
            <span className="clubs__mono" aria-hidden="true">
              {col.mono}<span className="clubs__seal">{col.seal}</span>
            </span>
            <h3 className="m-text-4">{col.title}</h3>
            <p className="clubs__when m-text-3">{col.meta}</p>
            <p className="clubs__text">{col.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
