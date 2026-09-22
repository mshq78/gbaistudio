import { User, Award, ShieldCheck } from 'lucide-react';
import { currentUser } from '../data/mockData.ts';

export function MePage() {
  return (
    <div className="flex-1 flex flex-col justify-between p-4 space-y-4 text-slate-800 animate-in fade-in duration-150">
      <div className="space-y-4">
        {/* Profile Header */}
        <div className="pt-2 pb-3 border-b border-slate-200/60 flex items-center gap-3">
          <img
            src={currentUser.avatarUrl}
            alt={currentUser.firstName}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-xs"
          />
          <div>
            <h1 className="text-base font-bold text-slate-800">
              {currentUser.firstName} {currentUser.lastName}
            </h1>
            <p className="text-xs text-slate-500">
              {currentUser.title} • {currentUser.organization}
            </p>
          </div>
        </div>

        {/* Minimal Placeholder Notice */}
        <div className="p-8 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-3 mt-6">
          <div className="w-12 h-12 rounded-2xl bg-[#1F9A8A]/10 text-[#1F9A8A] flex items-center justify-center mx-auto">
            <User className="w-6 h-6" />
          </div>
          <h2 className="text-sm font-bold text-slate-800">
            صفحه پروفایل و هاب فردی در مرحله بعد طراحی می‌شود
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            این بخش شامل شناسنامه مهارت، گواهی‌نامه‌های معتبر رویدادها، ارزیابی ۳۶۰ درجه و سوابق توسعه فردی خواهد بود.
          </p>
        </div>
      </div>
    </div>
  );
}
