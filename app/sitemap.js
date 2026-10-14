const SITE = "https://linkinbio-atlas.pintuweb.id";

export default function sitemap() {
  const now = new Date();
  return ["", "/karya", "/layanan"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
