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

  const handleOpenChallenge = () => {
    navigate(`/challenges/${challenge.id}`);
  };

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
          <span>چالش توسعه فردی</span>
        </h3>
        <span className="text-xs text-[#F2A93B] font-semibold bg-[#F2A93B]/10 px-2 py-0.5 rounded-md">
          {toPersianDigits(challenge.rewardPoints)}+ امتیاز رشد
        </span>
      </div>

      <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
        {/* Title and Day Counter */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div 
            onClick={handleOpenChallenge} 
            className="cursor-pointer group flex-1"
          >
            <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#1E6FA8] transition-colors">
              {challenge.title}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {challenge.theme} • روز {toPersianDigits(challenge.currentDay)} از {toPersianDigits(challenge.totalDays)}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenChallenge}
            className="text-xs text-[#1E6FA8] hover:text-[#009BEC] font-medium flex items-center gap-0.5 pt-0.5 cursor-pointer"
          >
            <span>جزئیات</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 7-Day Micro Progress Dots */}
        <div className="flex items-center gap-1.5 mb-3">
          {Array.from({ length: challenge.totalDays }).map((_, idx) => {
            const dayNum = idx + 1;
            const isCompleted = dayNum < challenge.currentDay || (dayNum === challenge.currentDay && challenge.completedToday);
            const isCurrent = dayNum === challenge.currentDay && !challenge.completedToday;

            return (
              <div
                key={dayNum}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <div
                  className={`w-full h-1.5 rounded-full transition-all ${
                    isCompleted
                      ? 'bg-[#2E9E6B]'
                      : isCurrent
                      ? 'bg-[#F2A93B]'
                      : 'bg-slate-200'
                  }`}
                />
                <span className={`text-[10px] ${
                  isCurrent ? 'font-bold text-[#F2A93B]' : isCompleted ? 'font-medium text-[#2E9E6B]' : 'text-slate-400'
                }`}>
                  {toPersianDigits(dayNum)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Today's Action Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
          <p className="text-xs text-slate-600 line-clamp-1 flex-1">
            <span className="font-semibold text-slate-700">تمرین امروز:</span> {challenge.todayTaskTitle}
          </p>

          <button
            type="button"
            onClick={onToggleCompleteToday}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer active:scale-95 ${
              challenge.completedToday
                ? 'bg-[#2E9E6B]/10 text-[#2E9E6B] border border-[#2E9E6B]/30'
                : 'bg-slate-100 hover:bg-[#F2A93B]/20 text-slate-700 hover:text-amber-800'
            }`}
          >
            <Check className={`w-3.5 h-3.5 ${challenge.completedToday ? 'stroke-[2.5]' : 'opacity-60'}`} />
            <span>{challenge.completedToday ? 'انجام شد' : 'ثبت تمرین'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
