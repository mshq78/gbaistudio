import { Play, BookOpen, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MicroLearningByte } from '../types.ts';
import { toPersianDigits } from '../utils/persian.ts';

interface ContinueLearningProps {
  learningByte: MicroLearningByte;
}

export function ContinueLearning({ learningByte }: ContinueLearningProps) {
  const navigate = useNavigate();

  const handleOpenLesson = () => {
    navigate(`/lessons/${learningByte.id}`);
  };

  return (
    <section className="space-y-2">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
          <span>ادامه یادگیری</span>
        </h3>
        <span className="text-xs text-slate-500 font-medium">
          {learningByte.category}
        </span>
      </div>

      {/* Learning Row / Restrained Object navigating to /lessons/:id */}
      <div 
        onClick={handleOpenLesson}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpenLesson(); }}
        className="group relative p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#1E6FA8]/40 shadow-2xs transition-all duration-150 cursor-pointer text-right"
      >
        <div className="flex items-start gap-3">
          {/* Subtle Icon Box */}
          <div className="w-10 h-10 rounded-lg bg-[#1F9A8A]/10 text-[#1F9A8A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1F9A8A] group-hover:text-white transition-colors duration-150">
            <BookOpen className="w-5 h-5" />
          </div>

          {/* Learning Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-[#1E6FA8] transition-colors">
                {learningByte.title}
              </h4>
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium shrink-0 bg-slate-100 px-2 py-0.5 rounded-md">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{toPersianDigits(learningByte.durationMinutes)} دقیقه</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 line-clamp-1 mt-1 mb-2.5">
              {learningByte.keyTakeaway}
            </p>

            {/* Progress row */}
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#1F9A8A] h-full rounded-full transition-all duration-300"
                  style={{ width: `${learningByte.progressPercent}%` }}
                />
              </div>
              <span className="text-[11px] font-semibold text-slate-600 shrink-0">
                {toPersianDigits(learningByte.progressPercent)}٪
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenLesson();
                }}
                className="px-2.5 py-1 rounded-lg bg-[#1E6FA8]/10 hover:bg-[#1E6FA8] text-[#1E6FA8] hover:text-white text-xs font-bold transition-colors inline-flex items-center gap-1 cursor-pointer shrink-0"
              >
                <span>ادامه</span>
                <Play className="w-2.5 h-2.5 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
