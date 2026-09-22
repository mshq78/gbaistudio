import { Check, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ActiveChallenge as ActiveChallengeType } from '../types.ts';
import { toPersianDigits } from '../utils/persian.ts';

interface ActiveChallengeProps {
  challenge: ActiveChallengeType;
  onToggleCompleteToday: () => void;
}

export function ActiveChallenge({
  challenge,
  onToggleCompleteToday,
}: ActiveChallengeProps) {
  const navigate = useNavigate();

  return (
    <section className="space-y-1.5 pt-2">
      {/* Section Label */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs font-bold text-slate-500 tracking-tight">
          چالش هفته
        </h3>
        <span className="text-[11px] text-[#F2A93B] font-semibold">
          روز {toPersianDigits(challenge.currentDay)} از {toPersianDigits(challenge.totalDays)}
        </span>
      </div>

      {/* Integrated surface matching learning section */}
      <div className="p-3.5 rounded-xl bg-white/70 border border-slate-200/60 space-y-2.5">
        {/* Title row */}
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => navigate(`/challenges/${challenge.id}`)}
            className="text-right text-sm font-bold text-slate-800 hover:text-[#1E6FA8] transition-colors cursor-pointer flex items-center gap-1 group"
          >
            <span>{challenge.title}</span>
            <ChevronLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1E6FA8] group-hover:-translate-x-0.5 transition-all" />
          </button>

          {/* 7-Day Micro Dots */}
          <div className="flex items-center gap-1 shrink-0">
            {Array.from({ length: challenge.totalDays }).map((_, idx) => {
              const dayNum = idx + 1;
              const isCompleted = dayNum < challenge.currentDay || (dayNum === challenge.currentDay && challenge.completedToday);
              const isCurrent = dayNum === challenge.currentDay && !challenge.completedToday;

              return (
                <span
                  key={dayNum}
                  className={`w-2 h-1 rounded-full transition-all ${
                    isCompleted
                      ? 'bg-[#2E9E6B]'
                      : isCurrent
                      ? 'bg-[#F2A93B]'
                      : 'bg-slate-200'
                  }`}
                  title={`روز ${dayNum}`}
                />
              );
            })}
          </div>
        </div>

        {/* Today's Action Bar */}
        <div className="pt-2 border-t border-slate-200/50 flex items-center justify-between gap-3 text-xs">
          <p className="text-slate-600 line-clamp-1 flex-1">
            <span className="text-slate-400 ml-1">تمرین امروز:</span>
            {challenge.todayTaskTitle}
          </p>

          <button
            type="button"
            onClick={onToggleCompleteToday}
            className={`px-2.5 py-1 rounded-lg font-medium flex items-center gap-1 transition-all shrink-0 cursor-pointer text-xs active:scale-95 ${
              challenge.completedToday
                ? 'bg-[#2E9E6B]/15 text-[#2E9E6B]'
                : 'bg-slate-100 hover:bg-[#F2A93B]/20 text-slate-700 hover:text-amber-800'
            }`}
          >
            <Check className={`w-3 h-3 ${challenge.completedToday ? 'stroke-[2.5]' : 'opacity-60'}`} />
            <span>{challenge.completedToday ? 'انجام شد' : 'ثبت تمرین'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
