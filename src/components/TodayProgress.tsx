import { Flame, Zap } from 'lucide-react';
import { UserProfile } from '../types.ts';
import { toPersianDigits } from '../utils/persian.ts';

interface TodayProgressProps {
  user: UserProfile;
}

export function TodayProgress({ user }: TodayProgressProps) {
  const completed = user.todayCompletedBytes;
  const total = user.todayTotalBytes;

  return (
    <section aria-label="وضعیت یادگیری امروز" className="px-1 pt-1 pb-0.5">
      {/* Seamless typographic strip without a heavy card box */}
      <div className="flex items-center justify-between gap-3 text-xs text-slate-600">
        {/* Item 1: Daily Bytes with inline micro-dots */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-800 text-xs">
            {toPersianDigits(completed)} از {toPersianDigits(total)} گرابایت
          </span>
          <div className="flex items-center gap-1">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i < completed ? 'bg-[#1F9A8A]' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Divider dot */}
        <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />

        {/* Item 2: Streak */}
        <div className="flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-[#F2A93B] fill-[#F2A93B]/20" />
          <span className="font-medium text-slate-700">
            {toPersianDigits(user.streakDays)} روز پیوسته
          </span>
        </div>

        {/* Divider dot */}
        <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />

        {/* Item 3: XP */}
        <div className="flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-[#009BEC]" />
          <span className="font-semibold text-slate-800">
            {toPersianDigits(user.growthPoints)} XP
          </span>
        </div>
      </div>
    </section>
  );
}
