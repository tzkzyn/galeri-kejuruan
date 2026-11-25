import React from 'react';

export default function Letter() {
  return (
    <section id="letter" data-8b-section="letter">
      <div
        className="letter__sheet m-surface"
        style={{ padding: "clamp(24px, 3.2vw, 44px)" }}
      >
        <h2 className="m-text-3">Pesan Kepala Balai Besar</h2>
        <p
          className="letter__quote m-text-2"
          style={{
            fontSize: "clamp(1.2rem, 1rem + 1vw, 1.75rem)",
            lineHeight: 1.5,
            marginTop: "12px",
            fontWeight: 500,
          }}
        >
          &ldquo;Pendidikan kejuruan bukan sekadar mengajarkan keterampilan teknis, melainkan menumbuhkan daya cipta, karakter kerja industri, dan rasa bangga atas karya tangan anak bangsa.&rdquo;
        </p>
        <div className="letter__sign" style={{ marginTop: "20px" }}>
          <p className="m-text-4" style={{ fontSize: "1rem", fontWeight: 600 }}>
            BBPPMPV Bidang Mesin dan Teknik Industri
          </p>
          <p className="letter__signature" style={{ fontSize: "0.95rem" }}>
            Kementerian Pendidikan Dasar dan Menengah RI
          </p>
        </div>
      </div>
      <p
        className="letter__motto m-text-2"
        style={{
          "--len": 18,
          textAlign: "center",
          margin: "clamp(24px, 3.5vw, 38px) auto 0",
          width: "100%",
          fontSize: "clamp(1.45rem, 1.15rem + 1vw, 2rem)",
        } as React.CSSProperties}
      >
        SMK Bisa, <b>SMK Hebat!</b>
      </p>
    </section>
  );
}
