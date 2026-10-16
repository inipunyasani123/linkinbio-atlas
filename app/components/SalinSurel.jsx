'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function SalinSurel({ surel }) {
  const [tersalin, setTersalin] = useState(false);
  const salin = async () => {
    try { await navigator.clipboard.writeText(surel); setTersalin(true); setTimeout(() => setTersalin(false), 1600); } catch {}
  };
  return (
    <>
      <button type="button" onClick={salin} className="group -my-2 flex min-h-11 items-center gap-2 font-medium text-paper transition hover:text-accent" aria-label={`Salin alamat surel ${surel}`}>
        {surel} {tersalin ? <Check size={14} className="text-accent" aria-hidden="true" /> : <Copy size={14} className="opacity-60 group-hover:opacity-100" aria-hidden="true" />}
      </button>
      <p role="status" className="min-h-5 text-xs text-accent">{tersalin ? 'Tersalin.' : ''}</p>
    </>
  );
}
