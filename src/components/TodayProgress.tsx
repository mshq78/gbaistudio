import { Flame, Zap, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types.ts';
import { toPersianDigits } from '../utils/persian.ts';

interface TodayProgressProps {
  user: UserProfile;
  onOpenDetails?: () => void;
}

export function TodayProgress({ user, onOpenDetails }: TodayProgressProps) {
  const completed = user.todayCompletedBytes;
  const total = user.todayTotalBytes;

  return (
    <section 
      aria-label="وضعیت یادگیری امروز"
      className="py-2.5 px-3.5 rounded-xl bg-white/80 backdrop-blur-xs border border-slate-200/70 shadow-2xs text-slate-700"
    >
      <div className="flex items-center justify-between gap-2 text-xs">
        {/* Item 1: Daily Bytes Progress */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F9A8A]" />
            <span className="font-semibold text-slate-800 text-[13px]">
              {toPersianDigits(completed)} از {toPersianDigits(total)}
            </span>
            <span className="text-slate-500 text-[11px] truncate">گرابایت امروز</span>
          </div>

          {/* Micro progress segments */}
          <div className="flex items-center gap-1 w-12 shrink-0">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full flex-1 transition-all ${
                  i < completed ? 'bg-[#1F9A8A]' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-slate-200 shrink-0" />

        {/* Item 2: Streak */}
        <div className="flex items-center gap-1.5 shrink-0 px-1">
          <Flame className="w-3.5 h-3.5 text-[#F2A93B] fill-[#F2A93B]/20" />
          <span className="font-bold text-slate-800 text-xs">
            {toPersianDigits(user.streakDays)}
          </span>
          <span className="text-slate-500 text-[11px]">روز پیوسته</span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-slate-200 shrink-0" />

        {/* Item 3: XP / Points */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Zap className="w-3.5 h-3.5 text-[#009BEC]" />
          <span className="font-bold text-slate-800 text-xs">
            {toPersianDigits(user.growthPoints)}
          </span>
          <span className="text-slate-500 text-[11px]">XP</span>
        </div>
      </div>
    </section>
  );
}
