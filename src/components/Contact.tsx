import React from 'react';

export default function Contact() {
  return (
    <section id="contact" data-8b-section="contact">
      <div className="contact__layout">
        <div className="contact__door m-arch">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="Gedung pusat pelatihan vokasi BBPPMPV BMTI Cimahi"
            loading="lazy"
          />
          <span className="contact__leaf contact__leaf--l" aria-hidden="true"></span>
          <span className="contact__leaf contact__leaf--r" aria-hidden="true"></span>
        </div>

        <div className="contact__info">
          <h2 className="m-text-2">
            Kunjungi <b>Galeri Kejuruan</b>
          </h2>
          <p className="m-text-6" style={{ marginTop: "10px", opacity: 0.85 }}>
            Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Mesin dan Teknik Industri (BBPPMPV BMTI).
          </p>

          <div
            className="contact__details"
            style={{
              gap: "24px 32px",
              margin: "clamp(24px, 3.5vw, 36px) 0",
            }}
          >
            <div>
              <h3 className="m-text-3" style={{ color: "var(--color-3)", marginBottom: "6px" }}>
                Alamat Kantor
              </h3>
              <p style={{ lineHeight: 1.6, fontSize: "0.9375rem" }}>
                Jl. Pesantren KM 2, Cibabat, Cimahi Utara, Kota Cimahi, Jawa Barat 40513
              </p>
            </div>

            <div>
              <h3 className="m-text-3" style={{ color: "var(--color-3)", marginBottom: "6px" }}>
                Jam Operasional
              </h3>
              <p style={{ lineHeight: 1.6, fontSize: "0.9375rem" }}>
                Senin – Jumat: 08:00 – 16:00 WIB
                <br />
                Sabtu &amp; Minggu: Tutup (Kecuali Jadwal Diklat Khusus)
              </p>
            </div>

            <div
              style={{
                gridColumn: "1 / -1",
                paddingTop: "16px",
                borderTop: "1px solid color-mix(in srgb, var(--color-3) 14%, transparent)",
              }}
            >
              <h3 className="m-text-3" style={{ color: "var(--color-3)", marginBottom: "8px" }}>
                Kontak Layanan
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 28px",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                }}
              >
                <span>
                  <strong>Email:</strong> bbppmpv.bmti@kemdikbud.go.id
                </span>
                <span>
                  <strong>Telp:</strong> (022) 0000000
                </span>
                <span>
                  <strong>WhatsApp:</strong> 0800-0000-0000
                </span>
              </div>
            </div>
          </div>

          <form
            className="contact__form"
            method="post"
            action="#"
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              border: "1px solid color-mix(in srgb, var(--color-3) 14%, transparent)",
              boxShadow: "0 10px 28px rgba(15, 30, 54, 0.05)",
              gap: "24px 28px",
            }}
          >
            <label className="m-field">
              <span className="m-field__label">Nama Lengkap / Instansi</span>
              <input type="text" name="name" required placeholder="Contoh: SMKN 1 Cimahi" />
            </label>

            <label className="m-field">
              <span className="m-field__label">Alamat Email</span>
              <input type="email" name="email" required placeholder="nama@sekolah.sch.id" />
            </label>

            <label className="m-field contact__wide">
              <span className="m-field__label">Tujuan Kunjungan / Pertanyaan</span>
              <select name="interest">
                <option value="diklat">Informasi Pelatihan &amp; Diklat</option>
                <option value="kunjungan">Permohonan Kunjungan / Studi Tiru</option>
                <option value="kemitraan">Kemitraan Industri &amp; DUDI</option>
                <option value="materi">Konsultasi Materi Kejuruan</option>
              </select>
            </label>

            <label className="m-field contact__wide">
              <span className="m-field__label">Pesan / Rincian</span>
              <textarea
                name="message"
                rows={3}
                placeholder="Tuliskan pesan atau jadwal rencana kunjungan Anda..."
              ></textarea>
            </label>

            <div className="contact__wide" style={{ paddingTop: "4px" }}>
              <button className="m-btn" type="submit">
                <span className="m-btn__label">Kirim Pesan</span>
              </button>
            </div>

            <p className="contact__status" role="status" hidden>
              Terima kasih — pesan Anda telah diterima oleh tim layanan BBPPMPV BMTI.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
