import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="display text-2xl">
          {site.name}
          <span className="mt-1 block font-sans text-xs tracking-[0.22em] text-mute uppercase not-italic">
            {site.given} · {site.domain}
          </span>
        </p>
        <div className="flex gap-5 text-sm">
          <a className="underline decoration-gold underline-offset-4" href={site.apple} target="_blank" rel="noreferrer">
            Apple Music
          </a>
          <a className="underline decoration-gold underline-offset-4" href={site.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a className="underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
