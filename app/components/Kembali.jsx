import Link from 'next/link';

// Bilah atas halaman dalam bergaya indeks Swiss.
export default function Kembali({ judul }) {
  return (
    <header className="flex items-center justify-between border-b-2 border-ink px-6 py-4 md:px-12">
      <Link href="/" className="-my-2 inline-flex min-h-11 items-center py-2 font-display text-lg font-extrabold uppercase tracking-tight hover:text-accent">
        <span aria-hidden="true">← </span>Atlas Studio<span className="text-accent">.</span>
      </Link>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/65">{judul}</span>
    </header>
  );
}
