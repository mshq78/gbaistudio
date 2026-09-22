import { ArrowRight, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { activeChallenge } from '../data/mockData.ts';
import { toPersianDigits } from '../utils/persian.ts';

export function ChallengePage() {
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
            جزئیات چالش
          </span>
        </div>

        {/* Minimal Challenge Header */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#F2A93B]">
              روز {toPersianDigits(activeChallenge.currentDay)} از {toPersianDigits(activeChallenge.totalDays)}
            </span>
          </div>

          <h1 className="text-base font-bold text-slate-800">
            {activeChallenge.title}
          </h1>

          <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
            <span className="text-slate-400 ml-1">تمرین امروز:</span>
            <span>{activeChallenge.todayTaskTitle}</span>
          </div>
        </div>

        {/* Placeholder Notice */}
        <div className="p-8 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-2 mt-4">
          <div className="w-10 h-10 rounded-xl bg-[#F2A93B]/10 text-[#F2A93B] flex items-center justify-center mx-auto">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-800">
            صفحه جزئیات چالش در مرحله بعد طراحی می‌شود
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            در این فاز تنها ساختار ناوبری و جهت‌گیری بصری ارزیابی می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
}
