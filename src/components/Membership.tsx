import React from 'react';

export default function Membership() {
  const steps = [
    {
      mono: "1",
      surface: "m-surface",
      title: "Registrasi Akun",
      sub: "Langkah Awal",
      desc: "Guru dan tenaga kependidikan mendaftar atau login melalui akun SIMPKB / SINTESA BMTI untuk mengakses platform.",
      features: [
        "Login Single Sign-On (SSO)",
        "Verifikasi identitas pendidik",
        "Pilih peminatan keahlian",
        "Akses dashboard belajar pribadi"
      ],
      cta: "Daftar Akun"
    },
    {
      mono: "2",
      surface: "m-surface-2",
      title: "Pilih Pembelajaran",
      sub: "Mandiri atau Terbimbing",
      desc: "Menentukan jalur diklat yang diinginkan: belajar mandiri sesuai waktu luang atau bergabung dalam gelombang pelatihan terbimbing.",
      features: [
        "Eksplorasi silabus & modul",
        "Video instruksional animasi",
        "Simulasi praktikum & virtual lab",
        "Tugas proyek & portofolio"
      ],
      cta: "Pilih Kompetensi"
    },
    {
      mono: "3",
      surface: "m-surface-3",
      title: "Asesmen & Sertifikat",
      sub: "Evaluasi Hasil Belajar",
      desc: "Pengerjaan kuis akhir dan asesmen kompetensi untuk menerbitkan sertifikat resmi berstandar Kemendikbudristek.",
      features: [
        "Uji pemahaman online",
        "Penilaian instruktur & DUDI",
        "Penerbitan E-Sertifikat bernomor",
        "Rekognisi angka kredit guru"
      ],
      cta: "Cek Alur Lengkap"
    }
  ];

  return (
    <section
      id="membership"
      data-8b-section="membership"
      style={{ paddingTop: "clamp(32px, 4vw, 56px)" }}
    >
      <div
        className="membership__head"
        style={{
          textAlign: "center",
          marginBottom: "clamp(28px, 4vw, 44px)",
        }}
      >
        <h2
          className="membership__title m-text-2"
          style={{ "--len": 18, margin: "0 auto" } as React.CSSProperties}
        >
          Alur <b>Pembelajaran</b>
        </h2>
      </div>
      <div className="membership__cards">
        {steps.map((card, idx) => (
          <div className="membership__card" key={idx}>
            <div className={`membership__flip ${card.surface}`}>
              <div className="membership__front">
                <span className="membership__mono">{card.mono}</span>
                <h3 className="m-text-4">{card.title}</h3>
                <p className="m-text-3">{card.sub}</p>
                <p>{card.desc}</p>
                <ul className="membership__perks">
                  {card.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
                <a className="m-btn" href="https://sintesa.kejuruan.id/" target="_blank" rel="noopener noreferrer">
                  <span className="m-btn__label">{card.cta}</span>
                </a>
              </div>
              <div className="membership__back" aria-hidden="true">
                <span className="membership__mono">{card.mono}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
