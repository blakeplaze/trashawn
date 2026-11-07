"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function Book() {
  const [sent, setSent] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const about = String(data.get("about") || "A show");
    const message = String(data.get("message") || "").trim();
    const subject = `${about} — ${name || "Booking"}`;
    const body = [`From: ${name}`, `Email: ${email}`, "", message].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(`Ready for ${site.email}. Your mail app should open with this note.`);
    window.location.href = href;
  }

  return (
    <section id="book" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="kicker text-gold">03 — Book</p>
          <h2 className="display mt-3 text-5xl leading-none sm:text-6xl">Write the room.</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-mute">
            Shows, sessions, and press go to {site.email}. Say who you are and what the night is.
          </p>
        </div>
        <form onSubmit={onSubmit} className="rounded-[1.6rem] bg-white/50 p-6 sm:p-8">
          <label className="kicker text-mute" htmlFor="name">Name</label>
          <input id="name" name="name" required className="field mb-6" autoComplete="name" />
          <label className="kicker text-mute" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="field mb-6" autoComplete="email" />
          <label className="kicker text-mute" htmlFor="about">This is for</label>
          <select id="about" name="about" className="field mb-6">
            <option>A show</option>
            <option>A session</option>
            <option>Press</option>
            <option>Something else</option>
          </select>
          <label className="kicker text-mute" htmlFor="message">Note</label>
          <textarea id="message" name="message" required rows={4} className="field mb-8 resize-none" />
          <button type="submit" className="btn btn-solid">Send the note</button>
          {sent ? <p className="mt-4 text-sm text-mute">{sent}</p> : null}
        </form>
      </div>
    </section>
  );
}
