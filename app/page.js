import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LINKS, PROFIL } from '@/lib/atlas';
import Jam from './components/Jam';
import SalinSurel from './components/SalinSurel';

// Panel tinta menyentuh tepi kiri layar; isinya tetap sejajar dengan wadah 72rem.
const KIRI = 'md:pl-[max(3rem,calc((100vw-72rem)/2+3rem))]';
const KANAN = 'md:pr-[max(3.5rem,calc((100vw-72rem)/2+3.5rem))]';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Panel kiri — tinta */}
      <section aria-labelledby="studio" className={`rise relative flex flex-col justify-between bg-ink px-8 py-10 text-paper md:w-[44%] md:py-14 md:pr-12 ${KIRI}`}>
        <div>
          <div className="flex items-center justify-between">
            <span aria-hidden="true" className="grid h-11 w-11 place-items-center border border-white/25 font-display text-lg font-bold">A</span>
            <Jam />
          </div>
          <h1 id="studio" className="mt-14 text-5xl font-extrabold uppercase leading-[0.95] md:mt-24 md:text-6xl">
            Atlas<br />Studio<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{PROFIL.bio}</p>
        </div>
        <div className="mt-12 space-y-2 text-sm text-white/75">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/65">Kontak</p>
          <SalinSurel surel={PROFIL.surel} />
          <p>{PROFIL.kota}, Indonesia · juga di Instagram & Behance sebagai {PROFIL.handle}</p>
        </div>
      </section>

      {/* Panel kanan — indeks */}
      <section aria-label="Indeks tautan" className={`flex flex-1 flex-col justify-center px-8 py-12 md:pl-14 ${KANAN}`}>
        <p className="rise text-[11px] uppercase tracking-[0.3em] text-ink/65" style={{ animationDelay: '0.08s' }}>Index — pilih tujuan</p>
        <nav className="mt-6" aria-label="Tautan utama">
          {LINKS.map((l, i) => (
            <Link
              key={l.no}
              href={l.href}
              className="rise hairline group flex items-baseline gap-5 border-t py-5 transition-[background-color,color,padding] last:border-b hover:bg-ink hover:px-4 hover:text-paper"
              style={{ animationDelay: `${0.12 + i * 0.05}s` }}
            >
              <span className="font-mono text-xs text-ink/60 transition group-hover:text-accent">{l.no}</span>
              <span className="flex-1">
                <span className="block font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{l.label}</span>
                <span className="mt-0.5 block text-xs text-ink/65 transition group-hover:text-paper/75">{l.meta}</span>
              </span>
              <ArrowUpRight size={20} className="translate-y-1 text-ink/50 transition duration-300 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <p className="rise mt-8 text-xs text-ink/65" style={{ animationDelay: '0.4s' }}>Studio fiktif untuk purwarupa desain — klien dan harga hanya contoh.</p>
      </section>
    </main>
  );
}
