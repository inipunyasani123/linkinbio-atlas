/* Atlas Studio — konsultan brand & desain di Bandung (fiktif). Satu sumber isi
   untuk halaman tautan, indeks karya, dan layanan. Klien, harga, dan jadwal
   adalah contoh purwarupa desain; domain .example sengaja tidak bisa dihubungi. */

import { hariBerikut, rentang, tambahHari, tgl } from './waktu';

export const SITE = 'https://linkinbio-atlas.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const PROFIL = {
  nama: 'Atlas Studio',
  kota: 'Bandung',
  surel: 'halo@atlasstudio.example',
  bio: 'Konsultan brand & desain. Kami membantu bisnis tampil tegas, rapi, dan mudah diingat.',
  handle: '@atlas.studio',
};

export const LINKS = [
  { no: '01', label: 'Karya terpilih', meta: 'Lima proyek, 2024–2026', href: '/karya' },
  { no: '02', label: 'Layanan & harga', meta: 'Identitas · situs · audit merek', href: '/layanan' },
  { no: '03', label: 'Catatan studio', meta: 'Proses & pemikiran kami', href: '/karya#catatan' },
  { no: '04', label: 'Jadwalkan pertemuan', meta: '30 menit, gratis', href: '/layanan#jadwal' },
];

export const KARYA = [
  { no: '01', gambar: '/images/karya/kopi-sindang.webp', alt: 'Gelas kertas Kopi Sindang dengan logotipe dicap miring dan embun di permukaannya.', tahun: 2026, nama: 'Kopi Sindang', sektor: 'Kedai kopi', lingkup: 'Identitas & kemasan', ringkas: 'Logotipe yang tetap terbaca dicap di gelas kertas basah.', hasil: 'Kemasan 6 varian dalam satu sistem warna' },
  { no: '02', gambar: '/images/karya/tenun-garut.webp', alt: 'Kisi motif tenun Koperasi Tenun Garut di samping label gantung berlogo kotak dan bulat.', tahun: 2025, nama: 'Koperasi Tenun Garut', sektor: 'Kriya', lingkup: 'Identitas & situs', ringkas: 'Motif tenun dijadikan grid, bukan hiasan.', hasil: 'Pesanan daring pertama dalam 3 minggu' },
  { no: '03', gambar: '/images/karya/klinik-gigi.webp', alt: 'Papan penunjuk Klinik Gigi Pagi: angka lantai 2 besar, panah tebal, dan ikon gigi.', tahun: 2025, nama: 'Klinik Gigi Pagi', sektor: 'Kesehatan', lingkup: 'Identitas & penunjuk arah', ringkas: 'Penunjuk arah besar untuk pasien yang lupa kacamata.', hasil: '14 papan penunjuk, 2 lantai' },
  { no: '04', gambar: '/images/karya/lontar-kecil.webp', alt: 'Delapan sampul buku Penerbit Lontar Kecil dari satu templat, masing-masing berwarna dan berbentuk lain.', tahun: 2024, nama: 'Penerbit Lontar Kecil', sektor: 'Penerbitan', lingkup: 'Sistem sampul buku', ringkas: 'Satu templat sampul untuk 30 judul tanpa terlihat seragam.', hasil: '30 sampul dalam satu sistem' },
  { no: '05', gambar: '/images/karya/film-pendek.webp', alt: 'Logo Pekan Film Pendek Bandung yang dipotong lima, di atas pita film hitung mundur dari 5 ke 1.', tahun: 2024, nama: 'Pekan Film Pendek Bandung', sektor: 'Acara', lingkup: 'Identitas acara', ringkas: 'Logo yang bisa dipotong menjadi hitung mundur.', hasil: 'Dipakai di 9 jenis media' },
];

export const CATATAN = [
  { tanggal: '22 Sep 2026', judul: 'Logo terbaik kami terlihat buruk di presentasi', isi: 'Logo Kopi Sindang terlihat biasa di layar. Baru terasa benar ketika dicap miring di gelas yang berembun — tempat ia akan hidup.' },
  { tanggal: '30 Agu 2026', judul: 'Mengapa kami selalu mencetak dulu', isi: 'Setiap identitas kami cetak di kertas murah sebelum dipresentasikan. Warna yang selamat di sana biasanya selamat di mana-mana.' },
  { tanggal: '14 Jul 2026', judul: 'Brief satu halaman', isi: 'Kami meminta klien menulis brief di satu halaman saja. Yang tidak muat biasanya belum diputuskan.' },
];

export const PAKET = [
  { nama: 'Audit merek', harga: 4500000, waktu: '1 minggu', isi: ['Tinjauan logo, warna, dan huruf yang dipakai sekarang', 'Daftar 10 perbaikan berurutan prioritas', 'Satu sesi presentasi'] },
  { nama: 'Identitas dasar', harga: 12000000, waktu: '4 minggu', isi: ['Logotipe + versi ikon', 'Palet warna & pasangan huruf', 'Panduan merek 12 halaman', 'Templat kartu nama & media sosial'] },
  { nama: 'Identitas + situs', harga: 28000000, waktu: '8 minggu', isi: ['Semua di Identitas dasar', 'Situs 5 halaman yang bisa Anda ubah sendiri', 'Sesi pelatihan tim'] },
];

export const PROSES = ['Brief satu halaman', 'Riset & arah', 'Cetak & uji', 'Serah terima'];

// Slot pertemuan pekan depan (Senin–Jumat), jam WIB. Tanggal dihitung dari hari
// ini supaya slot yang ditawarkan tidak pernah sudah lewat.
const POLA_SLOT = [
  { id: 'sen', jam: '10.00', ada: true },
  { id: 'sel', jam: '14.00', ada: true },
  { id: 'rab', jam: '10.00', ada: false },
  { id: 'kam', jam: '15.30', ada: true },
  { id: 'jum', jam: '09.00', ada: true },
];
export function slotPekanDepan(hari) {
  const senin = hariBerikut(hari, 1);
  const slot = POLA_SLOT.map((s, i) => ({ ...s, hari: tgl(tambahHari(senin, i), 'hari') }));
  return { slot, pekan: rentang(senin, tambahHari(senin, 4)) };
}
