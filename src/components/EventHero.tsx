import { Calendar, Clock, MapPin, ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ActiveEvent } from '../types.ts';
import { toPersianDigits } from '../utils/persian.ts';

interface EventHeroProps {
  event: ActiveEvent;
}

export function EventHero({ event }: EventHeroProps) {
  const navigate = useNavigate();

  const handleEnterEvent = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-bl from-[#15537F] via-[#1E6FA8] to-[#124B70] text-white shadow-md shadow-[#1E6FA8]/15 border border-[#1E6FA8]/30">
      {/* Tasteful geometric architectural motif representing campus arches and connectivity */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -left-12 -bottom-16 w-64 h-64 text-[#009BEC]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 100 Q 100 20 180 100" stroke="white" strokeWidth="1.5" />
          <path d="M20 120 Q 100 40 180 120" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
        </svg>

        <svg
          className="absolute -right-16 -top-10 w-56 h-56 text-[#1F9A8A]"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="120" height="120" rx="30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" />
          <rect x="40" y="40" width="80" height="80" rx="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-32 h-32 rounded-full bg-[#009BEC]/20 blur-2xl" />
      </div>

      <div className="relative p-5">
        {/* Top meta pill row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/12 backdrop-blur-xs border border-white/15 text-xs text-white/90">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E9E6B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E9E6B]" />
            </span>
            <span className="font-medium tracking-tight">{event.statusText}</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-white/70 bg-black/15 px-2 py-0.5 rounded-md">
            <Users className="w-3 h-3 text-[#009BEC]" />
            <span>{toPersianDigits(event.attendeesCount)} نفر هم‌دوره</span>
          </div>
        </div>

        {/* Event Title and Subtitle */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-black text-white tracking-tight">
              {event.title}
            </h2>
            <span className="text-xs px-2 py-0.5 rounded bg-white/15 text-blue-100 font-medium">
              بوتکمپ سازمانی
            </span>
          </div>
          <p className="text-sm font-medium text-blue-100/90 mt-1">
            {event.subtitle}
          </p>
        </div>

        {/* Event Schedule & Location info */}
        <div className="space-y-1.5 mb-5 text-xs text-blue-50/85">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#009BEC] shrink-0" />
            <span className="font-medium">{toPersianDigits(event.time)}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/75">{event.dateText}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#1F9A8A] shrink-0" />
            <span>{event.location}</span>
            <span className="text-white/50 text-[11px]">({event.room})</span>
          </div>
        </div>

        {/* Primary Action Button navigating to dedicated Event screen */}
        <div className="pt-1 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleEnterEvent}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#15537F] hover:bg-blue-50 font-bold text-sm shadow-sm transition-all duration-150 active:scale-[0.98] group cursor-pointer"
          >
            <span>{event.ctaText}</span>
            <ArrowLeft className="w-4 h-4 text-[#009BEC] group-hover:-translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
