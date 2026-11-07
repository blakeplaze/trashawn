import Image from "next/image";
import { talks } from "@/lib/site";
import { Listen } from "@/components/Listen";
import { Book } from "@/components/Book";

const ribbon = ["I Miss You", "Get Away", "Just Being Real", "Titles", "R&B", "TraShawn"];

export default function HomePage() {
  const loop = [...ribbon, ...ribbon];

  return (
    <div id="top">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:py-16">
        <div>
          <p className="kicker text-brick">R&amp;B · Soul</p>
          <h1 className="display mt-4 text-[clamp(4.6rem,11vw,8.4rem)] leading-[0.82] tracking-[-0.03em]">
            Tra&apos;
            <br />
            <span className="italic text-brick">Kyng</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8">
            Off the record, TraShawn. On the record, a voice that stays in the room.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#listen" className="btn btn-solid">Play I Miss You</a>
            <a href="#book" className="btn btn-ghost">Book him</a>
          </div>
        </div>
        <figure>
          <div className="portrait-frame">
            <Image
              src="/portrait.png"
              alt="Tra' Kyng in a white turtleneck and gold, seated against a brick wall in warm light"
              width={1200}
              height={675}
              priority
              className="aspect-[4/5] w-full object-cover object-[96%_48%] sm:aspect-[5/6]"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between text-sm text-mute">
            <span>Sunday light</span>
            <span className="kicker">The kyng in Tra&apos;</span>
          </figcaption>
        </figure>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {loop.map((word, index) => (
            <span key={`${word}-${index}`} className="display text-2xl italic text-ink/80">
              {word}
              <span className="mx-3 text-gold not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Listen />

      <section id="story" className="border-y border-ink/10 bg-white/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="kicker text-gold">02 — Story</p>
            <p className="display mt-4 text-4xl leading-[1.05] italic sm:text-5xl">
              “The kyng in Tra&apos;.”
            </p>
          </div>
          <div className="space-y-5 text-lg leading-8">
            <p>
              Tra&apos; Kyng is the name on the music. TraShawn is the name he answers to.
              The songs are R&amp;B, sung close: <em>I Miss You</em>, <em>Get Away</em>,{" "}
              <em>Just Being Real</em>, and <em>Titles</em> from the Dymez soundtrack.
            </p>
            <p>
              He is a singer and a songwriter. That is the work. The gold, the brick,
              the white turtleneck — that is just how the light hit him.
            </p>
            <p className="text-mute">
              Apple Music files him under R&amp;B/Soul, still as Tra&apos; Kyng. This site
              keeps both names in the same sentence, on purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="kicker text-gold">In conversation</p>
        <h2 className="display mt-3 text-5xl leading-none">Long form</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {talks.map((talk) => (
            <a
              key={talk.id}
              href={`https://www.youtube.com/watch?v=${talk.id}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.4rem] border border-ink/10 bg-white/45 p-6 transition hover:-translate-y-0.5 hover:border-ink/30"
            >
              <p className="kicker text-mute">YouTube</p>
              <p className="display mt-3 text-3xl group-hover:text-brick">{talk.title}</p>
              <p className="mt-2 text-mute">{talk.note}</p>
            </a>
          ))}
        </div>
      </section>

      <Book />
    </div>
  );
}
