import { Compass, BookOpen } from 'lucide-react';

export function LearningPage() {
  return (
    <div className="flex-1 flex flex-col justify-between p-4 space-y-4 text-slate-800 animate-in fade-in duration-150">
      <div className="space-y-4">
        {/* Header */}
        <div className="pt-2 pb-1 border-b border-slate-200/60">
          <h1 className="text-lg font-bold text-slate-800">یادگیری و مهارت‌ها</h1>
          <p className="text-xs text-slate-500">مسیرهای توسعه شایستگی در پردیس گرا</p>
        </div>

        {/* Minimal Placeholder Notice */}
        <div className="p-8 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-3 mt-6">
          <div className="w-12 h-12 rounded-2xl bg-[#1E6FA8]/10 text-[#1E6FA8] flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-sm font-bold text-slate-800">
            صفحه یادگیری در مرحله بعد طراحی می‌شود
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            این بخش در معماری گسترش‌یافته گرابایت میزبان کاتالوگ دوره‌ها، میکرولرنینگ، پادکست‌های توسعه فردی و پایش مهارت‌های سازمانی خواهد بود.
          </p>
        </div>
      </div>
    </div>
  );
}
