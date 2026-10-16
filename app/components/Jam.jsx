'use client';

import { useEffect, useState } from 'react';

// Jam Bandung (WIB) di pojok panel tinta; diperbarui tiap 30 detik.
export default function Jam() {
  const [jam, setJam] = useState('');
  useEffect(() => {
    const f = () => setJam(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }));
    f();
    const t = setInterval(f, 30000);
    return () => clearInterval(t);
  }, []);
  return (
    <p className="font-mono text-xs text-white/70">
      BDG <span className="tabular-nums">{jam || '--.--'}</span><span className="tick" aria-hidden="true">_</span>
    </p>
  );
}
