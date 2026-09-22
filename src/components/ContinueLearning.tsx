import { Play, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MicroLearningByte } from '../types.ts';
import { toPersianDigits } from '../utils/persian.ts';

interface ContinueLearningProps {
  learningByte: MicroLearningByte;
}

export function ContinueLearning({ learningByte }: ContinueLearningProps) {
  const navigate = useNavigate();

  return (
    <section className="space-y-1.5 pt-2">
      {/* Section Label */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs font-bold text-slate-500 tracking-tight">
          ادامه یادگیری
        </h3>
        <span className="text-[11px] text-slate-400">
          {toPersianDigits(learningByte.durationMinutes)} دقیقه
        </span>
      </div>

      {/* Integrated row instead of an isolated floating card */}
      <div
        onClick={() => navigate(`/lessons/${learningByte.id}`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') navigate(`/lessons/${learningByte.id}`);
        }}
        className="group p-3 rounded-xl bg-white/70 hover:bg-white border border-slate-200/60 transition-all duration-150 cursor-pointer text-right flex items-center justify-between gap-3"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-[#1E6FA8] transition-colors">
              {learningByte.title}
            </h4>
          </div>

          {/* Micro progress line */}
          <div className="flex items-center gap-2 mt-2">
            <div className="w-24 bg-slate-200/80 rounded-full h-1 overflow-hidden">
              <div
                className="bg-[#1F9A8A] h-full rounded-full"
                style={{ width: `${learningByte.progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              {toPersianDigits(learningByte.progressPercent)}٪
            </span>
          </div>
        </div>

        {/* Continuation affordance */}
        <div className="flex items-center gap-1 text-xs font-bold text-[#1E6FA8] group-hover:text-[#009BEC] transition-colors shrink-0 px-2 py-1.5 rounded-lg bg-[#1E6FA8]/8 group-hover:bg-[#1E6FA8]/15">
          <span>ادامه</span>
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        </div>
      </div>
    </section>
  );
}
