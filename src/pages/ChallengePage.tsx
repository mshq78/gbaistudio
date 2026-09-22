import { ArrowRight, Target, Award } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { activeChallenge } from '../data/mockData.ts';
import { toPersianDigits } from '../utils/persian.ts';

export function ChallengePage() {
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
            جزئیات چالش
          </span>
        </div>

        {/* Challenge Header in Gerabyte Shell */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#F2A93B] bg-[#F2A93B]/10 px-2 py-0.5 rounded-md">
              {activeChallenge.theme}
            </span>
            <span className="text-xs font-bold text-slate-700">
              روز {toPersianDigits(activeChallenge.currentDay)} از {toPersianDigits(activeChallenge.totalDays)}
            </span>
          </div>

          <h1 className="text-base font-bold text-slate-800">
            {activeChallenge.title}
          </h1>

          <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs">
            <span className="font-bold text-amber-900 block mb-0.5">تمرین فعال امروز:</span>
            <p className="text-slate-700">{activeChallenge.todayTaskTitle}</p>
          </div>
        </div>

        {/* Required Placeholder Notice */}
        <div className="p-6 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-2 mt-4">
          <div className="w-10 h-10 rounded-xl bg-[#F2A93B]/10 text-[#F2A93B] flex items-center justify-center mx-auto">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-800">
            صفحه جزئیات چالش در مرحله بعد طراحی می‌شود
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            ارزیابی روزانه، بازخورد همتایان سازمانی و جدول پیشرفت چالش در نسخه‌های آینده توسعه می‌یابند.
          </p>
        </div>
      </div>
    </div>
  );
}
