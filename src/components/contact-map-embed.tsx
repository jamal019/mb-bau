'use client';

import { useState } from 'react';

type ContactMapEmbedProps = {
  embedSrc: string;
  title: string;
};

export function ContactMapEmbed({ embedSrc, title }: ContactMapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <div className="relative min-h-[360px] bg-slate-100 lg:min-h-full">
        <iframe
          title={title}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-[360px] overflow-hidden bg-slate-100 lg:min-h-full">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.03),rgba(37,99,235,0.08)),linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]" />
      <div className="absolute left-[16%] top-[18%] h-24 w-40 rounded-2xl border border-white/80 bg-white/90 shadow-lg backdrop-blur" />
      <div className="absolute left-[22%] top-[25%] h-3 w-24 rounded-full bg-slate-300" />
      <div className="absolute left-[22%] top-[33%] h-3 w-16 rounded-full bg-slate-200" />
      <div className="absolute right-[22%] top-[26%] flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Zm0-8.25A2.25 2.25 0 1 1 12 8.25a2.25 2.25 0 0 1 0 4.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="relative z-10 flex min-h-[360px] items-end p-6 sm:p-8">
        <div className="max-w-sm rounded-2xl border border-white/80 bg-white/92 p-6 shadow-xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Interaktive Karte</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Karte bei Bedarf laden</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Externe Karten werden erst nach Klick geladen. Das ist datensparsamer und reduziert Drittanbieter-Skripte
            auf der Seite.
          </p>
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="mt-5 inline-flex rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Karte laden
          </button>
        </div>
      </div>
    </div>
  );
}
