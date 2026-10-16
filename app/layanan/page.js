import { PAKET, PROSES, SITE, rp } from '@/lib/atlas';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import Jadwal from '../components/Jadwal';

export const metadata = {
  title: 'Layanan & Harga',
  description: 'Tiga layanan Atlas Studio — audit merek, identitas dasar, identitas + situs — dengan harga, durasi, proses, dan slot pertemuan 30 menit.',
  alternates: { canonical: `${SITE}/layanan` },
};

export default function Layanan() {
  return (
    <>
      <Kembali judul="Index 02 — Layanan" />
      <main className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <h1 className="rise text-5xl font-extrabold uppercase leading-[0.95] md:text-7xl">Layanan<br />& harga<span className="text-accent">.</span></h1>
        <p className="rise mt-5 max-w-md text-sm leading-relaxed text-ink/75" style={{ animationDelay: '0.08s' }}>Harga tetap, ditulis di depan. Tidak ada biaya revisi tersembunyi — dua putaran sudah termasuk.</p>

        <ul className="mt-12 grid border-t-2 border-ink md:grid-cols-3">
          {PAKET.map((p, i) => (
            <li key={p.nama} className={`hairline border-b py-8 md:border-b-0 md:px-6 ${i ? 'md:border-l' : 'md:pl-0'}`}>
              <p className="font-mono text-xs text-ink/60">0{i + 1}</p>
              <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight">{p.nama}</h2>
              <p className="mt-4 font-display text-3xl font-extrabold">{rp(p.harga)}</p>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink/65">{p.waktu}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.isi.map((x) => <li key={x} className="flex gap-2"><span aria-hidden="true" className="text-accent">—</span>{x}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <section aria-labelledby="proses-h" className="mt-16">
          <h2 id="proses-h" className="font-mono text-xs uppercase tracking-[0.25em] text-ink/65">Proses</h2>
          <ol className="mt-4 grid grid-cols-2 gap-px bg-ink/15 md:grid-cols-4">
            {PROSES.map((s, i) => (
              <li key={s} className="bg-paper p-5">
                <span className="font-display text-4xl font-extrabold text-accent">{i + 1}</span>
                <p className="mt-2 font-semibold uppercase tracking-tight">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        <Jadwal hari={hariIniWIB()} />
        <p className="mt-8 text-xs text-ink/65">Harga dan slot adalah contoh purwarupa desain.</p>
      </main>
    </>
  );
}
