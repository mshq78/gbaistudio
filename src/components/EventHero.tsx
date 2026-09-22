import { Clock, MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ActiveEvent } from '../types.ts';
import { toPersianDigits } from '../utils/persian.ts';

interface EventHeroProps {
  event: ActiveEvent;
}

export function EventHero({ event }: EventHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B6396] via-[#1E6FA8] to-[#134D73] text-white shadow-md shadow-[#1E6FA8]/15">
      {/* Refined geometric architectural curves representing campus innovation */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -left-10 -bottom-14 w-60 h-60 text-[#009BEC]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 100 Q 100 10 190 100" stroke="white" strokeWidth="1.5" />
        </svg>

        <svg
          className="absolute -right-12 -top-12 w-48 h-48 text-[#1F9A8A]"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="120" height="120" rx="32" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
        </svg>

        {/* Ambient subtle lighting */}
        <div className="absolute top-0 right-1/4 w-36 h-36 rounded-full bg-[#009BEC]/25 blur-2xl" />
      </div>

      <div className="relative p-5">
        {/* Active badge */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-xs border border-white/20 text-xs text-white">
            <span className="w-2 h-2 rounded-full bg-[#2E9E6B] animate-pulse" />
            <span className="font-medium tracking-tight">{event.statusText}</span>
          </div>
        </div>

        {/* Event Title & Subtitle */}
        <div className="mb-4">
          <h2 className="text-2xl font-black text-white tracking-tight">
            {event.title}
          </h2>
          <p className="text-sm font-medium text-blue-100/90 mt-1">
            {event.subtitle}
          </p>
        </div>

        {/* Schedule & Location */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-5 text-xs text-blue-50/90">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#009BEC] shrink-0" />
            <span className="font-medium">{toPersianDigits(event.time)}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#1F9A8A] shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Primary CTA button */}
        <button
          type="button"
          onClick={() => navigate(`/events/${event.id}`)}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#15537F] hover:bg-blue-50 font-bold text-sm shadow-sm transition-all duration-150 active:scale-[0.99] group cursor-pointer"
        >
          <span>{event.ctaText}</span>
          <ArrowLeft className="w-4 h-4 text-[#009BEC] group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
