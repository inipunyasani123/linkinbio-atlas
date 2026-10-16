'use client';

import { useState } from 'react';
import { slotPekanDepan } from '@/lib/atlas';
import useHariIni from './useHariIni';

export default function Jadwal({ hari: awal }) {
  const hari = useHariIni(awal);
  const { slot: SLOT, pekan } = slotPekanDepan(hari);
  const [pilih, setPilih] = useState(null);
  const [selesai, setSelesai] = useState(false);
  const slot = SLOT.find((s) => s.id === pilih);
  // Garis bawah isian harus terlihat di atas panel tinta (kontras ≥ 3:1).
  const input = 'w-full border-b-2 border-white/45 bg-transparent px-0 py-2 text-paper focus:border-accent';

  return (
    <section id="jadwal" aria-labelledby="jadwal-h" className="mt-16 scroll-mt-8 bg-ink p-6 text-paper md:p-10">
      <h2 id="jadwal-h" className="text-3xl font-extrabold uppercase leading-none md:text-4xl">Jadwalkan<br />pertemuan<span className="text-accent">.</span></h2>
      <p className="mt-3 text-sm text-white/75">30 menit lewat video, gratis. Pekan {pekan}, jam WIB.</p>

      {selesai ? (
        <div role="status" className="mt-8 border border-white/25 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Tercatat</p>
          <p className="mt-2 font-display text-2xl font-bold uppercase">{slot.hari} · {slot.jam}</p>
          <p className="mt-2 text-sm text-white/75">Ini purwarupa desain: tidak ada jadwal yang benar-benar dibuat.</p>
          <button type="button" onClick={() => { setSelesai(false); setPilih(null); }} className="mt-5 min-h-11 border border-white/40 px-4 py-2 text-sm uppercase tracking-wide hover:border-accent hover:text-accent">Pilih ulang</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); if (slot) setSelesai(true); }} className="mt-8">
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">1 — Pilih slot</legend>
            <div className="mt-3 grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-5 [&>*:last-child:nth-child(odd)]:col-span-2 sm:[&>*:last-child:nth-child(odd)]:col-span-1">
              {SLOT.map((s) => (
                <label key={s.id} className={`flex flex-col gap-1 p-4 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-accent ${!s.ada ? 'cursor-not-allowed bg-ink text-white/60' : pilih === s.id ? 'cursor-pointer bg-accent text-ink' : 'cursor-pointer bg-ink hover:bg-white/10'}`}>
                  <input type="radio" name="slot" value={s.id} disabled={!s.ada} checked={pilih === s.id} onChange={() => setPilih(s.id)} className="sr-only" />
                  <span className="text-xs uppercase tracking-wide">{s.hari}</span>
                  <span className={`font-display text-2xl font-bold ${!s.ada ? 'line-through' : ''}`}>{s.jam}</span>
                  {!s.ada && <span className="text-[11px]">terisi</span>}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-8 grid gap-6 sm:grid-cols-3">
            <legend className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-white/70">2 — Tentang Anda</legend>
            <div>
              <label htmlFor="j-nama" className="text-xs uppercase tracking-wide text-white/75">Nama</label>
              <input id="j-nama" required autoComplete="name" className={input} />
            </div>
            <div>
              <label htmlFor="j-usaha" className="text-xs uppercase tracking-wide text-white/75">Usaha</label>
              <input id="j-usaha" required autoComplete="organization" className={input} />
            </div>
            <div>
              <label htmlFor="j-surel" className="text-xs uppercase tracking-wide text-white/75">Surel</label>
              <input id="j-surel" type="email" required autoComplete="email" className={input} />
            </div>
          </fieldset>
          <button type="submit" disabled={!slot} className="mt-8 w-full bg-accent py-4 font-display text-lg font-bold uppercase tracking-tight text-white hover:bg-white hover:text-ink disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/60">
            {slot ? `Pesan ${slot.hari} · ${slot.jam}` : 'Pilih slot dulu'}
          </button>
          <p className="mt-3 text-xs text-white/65">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}
