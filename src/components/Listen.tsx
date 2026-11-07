"use client";

import { useState } from "react";
import { tracks } from "@/lib/site";

export function Listen() {
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);
  const track = tracks[active];

  function choose(index: number) {
    setActive(index);
    setStarted(true);
  }

  return (
    <section id="listen" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="kicker text-gold">01 — Listen</p>
          <h2 className="display mt-3 text-5xl leading-none sm:text-6xl">The records</h2>
        </div>
        <div className={`disc hidden sm:block ${started ? "" : "is-paused"}`} aria-hidden />
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="overflow-hidden rounded-2xl bg-ink shadow-[0_24px_60px_rgba(33,22,16,0.16)]">
          <div className="aspect-video">
            <iframe
              key={`${track.id}-${started}`}
              title={`${track.title} by Tra' Kyng`}
              src={`https://www.youtube-nocookie.com/embed/${track.id}?rel=0${started ? "&autoplay=1" : ""}`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <ol>
          {tracks.map((item, index) => {
            const on = index === active;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`track-row ${on ? "is-on" : ""}`}
                  onClick={() => choose(index)}
                  aria-current={on ? "true" : undefined}
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="display text-3xl leading-none">{item.title}</span>
                    <span className="kicker text-mute">{item.year}</span>
                  </span>
                  <span className="mt-2 block text-sm text-mute">{item.note}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
