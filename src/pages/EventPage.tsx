import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { activeEvent } from '../data/mockData.ts';
import { toPersianDigits } from '../utils/persian.ts';

export function EventPage() {
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
            صفحه رویداد
          </span>
        </div>

        {/* Minimal Event Summary */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1B6396] via-[#1E6FA8] to-[#134D73] text-white space-y-2">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E9E6B]" />
            <span>{activeEvent.statusText}</span>
          </div>

          <h1 className="text-xl font-black">{activeEvent.title}</h1>
          <p className="text-xs text-blue-100">{activeEvent.subtitle}</p>

          <div className="pt-2 border-t border-white/15 flex items-center gap-4 text-xs text-blue-100/90">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#009BEC]" />
              <span>{toPersianDigits(activeEvent.time)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#1F9A8A]" />
              <span>{activeEvent.location}</span>
            </div>
          </div>
        </div>

        {/* Placeholder Notice */}
        <div className="p-8 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-2 mt-4">
          <div className="w-10 h-10 rounded-xl bg-[#1E6FA8]/10 text-[#1E6FA8] flex items-center justify-center mx-auto">
            <Calendar className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-800">
            صفحه رویداد در مرحله بعد طراحی می‌شود
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            در این فاز تنها ساختار ناوبری و جهت‌گیری بصری ارزیابی می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
}
