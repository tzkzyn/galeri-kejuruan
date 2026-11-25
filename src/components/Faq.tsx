import React from 'react';

export default function Faq() {
  const faqs = [
    {
      q: "Apa itu Galeri Kejuruan BBPPMPV BMTI?",
      a: "Galeri Kejuruan adalah 'Perwujudan Gagasan Lewat Materi Kejuruan', yakni pusat sumber belajar, sarana pelatihan mandiri & terbimbing, serta etalase pameran inovasi teknologi kejuruan di bawah naungan BBPPMPV BMTI Kemendikbudristek."
    },
    {
      q: "Siapa saja yang dapat mengikuti program di Galeri Kejuruan?",
      a: "Program terbuka untuk Guru SMK, Kepala Sekolah, Pengawas, Instruktur Balai Latihan Kerja, tenaga kependidikan kejuruan, serta siswa dan mahasiswa vokasi di seluruh Indonesia."
    },
    {
      q: "Bagaimana cara mendaftar pelatihan mandiri dan terbimbing?",
      a: "Pendaftaran pelatihan dilakukan secara terpusat melalui portal SINTESA BBPPMPV BMTI di alamat sintesa.kejuruan.id dengan menggunakan akun SIMPKB atau akun resmi pendidik."
    },
    {
      q: "Apakah institusi atau sekolah dapat berkunjung ke Galeri Kejuruan Cimahi?",
      a: "Ya, BBPPMPV BMTI menerima kunjungan studi tiru, benchmarking, dan eksplorasi laboratorium teknologi dari sekolah, perguruan tinggi, maupun industri dengan mengajukan surat permohonan kunjungan terlebih dahulu."
    },
    {
      q: "Apakah peserta memperoleh sertifikat setelah menyelesaikan diklat?",
      a: "Setiap peserta yang menuntaskan seluruh aktivitas pembelajaran, asesmen, dan uji kompetensi akan memperoleh sertifikat resmi bernomor registrasi dari Kementerian."
    }
  ];

  return (
    <section id="faq" data-8b-section="faq">
      <div className="faq__intro">
        <h2 className="m-text-2">Pertanyaan <b>Umum (FAQ)</b></h2>
        <p className="m-text-6">
          Informasi seputar pendaftaran diklat, layanan fasilitas, kunjungan, serta pemanfaatan materi di Galeri Kejuruan.
        </p>
      </div>
      <div className="faq__list">
        {faqs.map((faq, idx) => (
          <details className="faq__item" key={idx}>
            <summary className="faq__q">
              <span className="m-text-4">{faq.q}</span>
              <span className="faq__icon" aria-hidden="true"><span className="faq__fill"></span></span>
            </summary>
            <p className="faq__a">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
