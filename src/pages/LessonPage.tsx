import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { continueLearningByte } from '../data/mockData.ts';
import { toPersianDigits } from '../utils/persian.ts';

export function LessonPage() {
  const navigate = useNavigate();
  const { id } = useParams();

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
            محتوای آموزشی گرابایت
          </span>
        </div>

        {/* Lesson Header in Gerabyte Shell */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#1F9A8A] bg-[#1F9A8A]/10 px-2 py-0.5 rounded-md">
              {continueLearningByte.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{toPersianDigits(continueLearningByte.durationMinutes)} دقیقه</span>
            </div>
          </div>

          <h1 className="text-base font-bold text-slate-800">
            {continueLearningByte.title}
          </h1>

          <p className="text-xs text-slate-500 leading-relaxed">
            {continueLearningByte.keyTakeaway}
          </p>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span>پیشرفت کنونی:</span>
            <span className="font-bold text-[#1F9A8A]">
              گام {toPersianDigits(continueLearningByte.currentStep)} از {toPersianDigits(continueLearningByte.totalSteps)} ({toPersianDigits(continueLearningByte.progressPercent)}٪)
            </span>
          </div>
        </div>

        {/* Required Placeholder Notice */}
        <div className="p-6 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-2 mt-4">
          <div className="w-10 h-10 rounded-xl bg-[#1F9A8A]/10 text-[#1F9A8A] flex items-center justify-center mx-auto">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-800">
            صفحه محتوای آموزشی در مرحله بعد طراحی می‌شود
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            پلیر تعاملی گرابایت، خلاصه‌های متنی و تمرین‌های شایستگی پس از نهایی‌سازی ساختار کلی به این بخش افزوده می‌شوند.
          </p>
        </div>
      </div>
    </div>
  );
}
