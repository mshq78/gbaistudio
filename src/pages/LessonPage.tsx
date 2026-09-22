import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { continueLearningByte } from '../data/mockData.ts';
import { toPersianDigits } from '../utils/persian.ts';

export function LessonPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-between p-4 space-y-4 text-slate-800 animate-in fade-in duration-150">
      <div className="space-y-4">
        {/* Top Navigation Bar with Back Button */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 py-1.5 px-2.5 -mr-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 transition-colors font-medium text-xs cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 text-[#1E6FA8]" />
            <span>بازگشت</span>
          </button>
          <span className="text-xs font-semibold text-slate-500">
            محتوای آموزشی
          </span>
        </div>

        {/* Minimal Lesson Header */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-slate-700">گرابایت</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{toPersianDigits(continueLearningByte.durationMinutes)} دقیقه</span>
            </div>
          </div>

          <h1 className="text-base font-bold text-slate-800">
            {continueLearningByte.title}
          </h1>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>پیشرفت:</span>
            <span className="font-bold text-[#1F9A8A]">
              {toPersianDigits(continueLearningByte.progressPercent)}٪
            </span>
          </div>
        </div>

        {/* Placeholder Notice */}
        <div className="p-8 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-2 mt-4">
          <div className="w-10 h-10 rounded-xl bg-[#1F9A8A]/10 text-[#1F9A8A] flex items-center justify-center mx-auto">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-800">
            صفحه محتوای آموزشی در مرحله بعد طراحی می‌شود
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            در این فاز تنها ساختار ناوبری و جهت‌گیری بصری ارزیابی می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
}
