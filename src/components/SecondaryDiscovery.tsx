import { ChevronLeft, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RecentAchievement } from '../types.ts';

interface SecondaryDiscoveryProps {
  achievement: RecentAchievement;
}

export function SecondaryDiscovery({ achievement }: SecondaryDiscoveryProps) {
  const navigate = useNavigate();

  return (
    <section className="space-y-2 pb-2">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs font-bold text-slate-700 tracking-tight flex items-center gap-1.5">
          <span>دستاورد اخیر</span>
        </h3>
        <span className="text-[11px] text-slate-500 font-medium">
          توسعه شایستگی سازمانی
        </span>
      </div>

      <div 
        onClick={() => navigate('/me')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/me'); }}
        className="p-3 rounded-xl bg-gradient-to-l from-white via-white to-[#F8F6F0] border border-slate-200/70 hover:border-slate-300 shadow-2xs flex items-center justify-between gap-3 cursor-pointer group text-right transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#2E9E6B]/10 text-[#2E9E6B] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#1E6FA8] transition-colors">
              {achievement.title}
            </h4>
            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
              {achievement.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-slate-500 shrink-0">
          <span>{achievement.earnedDate}</span>
          <ChevronLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1E6FA8] transition-colors" />
        </div>
      </div>
    </section>
  );
}
