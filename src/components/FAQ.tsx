const faqs = [
  {
    q: "Apakah bisa lihat live CCTV dari HP?",
    a: "Menurut alur dalam PRD, link akses privat diberikan saat check-in dan bisa dibuka dari HP tanpa instalasi aplikasi. Halaman ini tidak menyediakan feed kamera. Konfirmasikan ketersediaan, waktu akses, dan cara membuka link dengan tim sebelum kunjungan.",
  },
  {
    q: "Apakah kucing dan anjing benar-benar terpisah total?",
    a: "Pengaturan dalam PRD memisahkan ruangan, jalur masuk, serta jadwal bermain kucing dan anjing untuk grooming, hotel, dan daycare. Minta tim menjelaskan pengaturan aktual untuk kunjungan sahabatmu; foto di halaman ini adalah ilustrasi, bukan bukti fasilitas.",
  },
  {
    q: "Bagaimana kalau hewan saya sedang sakit/dalam pengobatan?",
    a: "Ceritakan kondisi kesehatan, obat, instruksi dokter, dan kebutuhan khusus sebelum kunjungan agar tim dapat menilai kesesuaian perawatan dan mencatatnya dalam Paspor Sahabat. PRD menyebut koordinasi dokter hewan on-call, tetapi pengaturan dan ketersediaannya harus dikonfirmasi. Penerimaan hewan sakit atau pemberian obat tidak otomatis dijamin.",
  },
  {
    q: "Apakah bisa titip untuk hewan selain kucing/anjing?",
    a: "PRD mencantumkan kemungkinan penitipan hewan kecil seperti kelinci dan hamster. Ceritakan jenis, ukuran, kebiasaan, dan kebutuhan sahabatmu terlebih dahulu. Kesesuaian perawatan, ketersediaan kandang, dan penerimaan hewan lain harus dikonfirmasi oleh tim; bukan ketersediaan yang dijamin.",
  },
  {
    q: "Apakah ada dokter hewan standby?",
    a: "PRD menyebut dokter hewan on-call, bukan dokter yang selalu berada di lokasi. Konfirmasikan pengaturan on-call, prosedur kondisi darurat, dan koordinasi dengan pet parent sebelum menitipkan. Ketersediaan maupun waktu respons dokter belum diverifikasi dan tidak dijamin di halaman ini.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-cream text-ink" aria-labelledby="faq-heading">
      <style>{`
        #faq summary { list-style: none; }
        #faq summary::-webkit-details-marker { display: none; }
        #faq summary::after { content: ""; width: 10px; height: 10px; border-right: 2px solid #23573d; border-bottom: 2px solid #23573d; transform: rotate(45deg); flex: none; margin-right: 4px; }
        #faq details[open] summary::after { transform: rotate(225deg); }
        #faq summary:focus-visible { outline: 3px solid #23573d; outline-offset: 4px; border-radius: 8px; }
      `}</style>
      <div className="wrap grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <h2 id="faq-heading" className="section-heading">Pertanyaan Umum.</h2>
          <p className="intro mt-5">Biar kamu bisa menyiapkan kunjungan dengan lebih tenang.</p>
          <p className="mt-4 leading-relaxed text-muted">Kebutuhan tiap sahabat berbeda. Hal yang belum pasti perlu dibahas dengan tim, bukan diasumsikan dari foto atau contoh di halaman ini.</p>
          <a href="#booking" className="text-link mt-5 inline-block">Tuliskan kebutuhan khusus</a>
        </div>
        <div className="min-w-0 border-t border-border">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index === 0} className="border-b border-border py-1">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-5 py-5 text-base font-bold leading-relaxed text-leaf hover:text-ink">
                {faq.q}
              </summary>
              <p className="max-w-[68ch] pb-6 pr-5 leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
