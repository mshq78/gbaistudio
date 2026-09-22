import { Award, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RecentAchievement } from '../types.ts';

interface SecondaryDiscoveryProps {
  achievement: RecentAchievement;
}

export function SecondaryDiscovery({ achievement }: SecondaryDiscoveryProps) {
  const navigate = useNavigate();

  return (
    <section className="pt-2 pb-3">
      {/* Quiet inline achievement row without a heavy card container */}
      <button
        type="button"
        onClick={() => navigate('/me')}
        className="w-full py-2 px-1 flex items-center justify-between text-xs text-slate-500 hover:text-slate-800 transition-colors group cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#F2A93B]/90" />
          <span className="font-medium text-slate-700 group-hover:text-[#1E6FA8] transition-colors">
            {achievement.title}
          </span>
          <span className="text-[11px] text-slate-400">• {achievement.earnedDate}</span>
        </div>

        <ChevronLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1E6FA8] group-hover:-translate-x-0.5 transition-transform" />
      </button>
    </section>
  );
}
