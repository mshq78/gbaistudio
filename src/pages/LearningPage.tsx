import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Check,
  Play,
  Lock,
  Target,
  Award,
  ArrowLeft,
  Clock,
  Zap,
} from 'lucide-react';
import { learningDomains } from '../data/mockData.ts';
import { toPersianDigits } from '../utils/persian.ts';
import { LessonItem, LessonState } from '../types.ts';

export function LearningPage() {
  const navigate = useNavigate();
  // Default selected domain is the first one: "شایستگی‌های فردی و سازمانی"
  const [selectedDomainId, setSelectedDomainId] = useState(learningDomains[0].id);

  const activeDomain =
    learningDomains.find((d) => d.id === selectedDomainId) || learningDomains[0];

  const currentUnit = activeDomain.currentUnit;

  // Find the primary current lesson for Continue Learning
  const inProgressLesson = currentUnit
    ? currentUnit.lessons.find((l) => l.state === 'in_progress') ||
      currentUnit.lessons.find((l) => l.state === 'available') ||
      currentUnit.lessons[0]
    : undefined;

  const handleLessonClick = (lesson: LessonItem) => {
    if (lesson.state === 'locked') return;
    navigate(`/lessons/${lesson.id}`);
  };

  const getLessonNodeIcon = (state: LessonState) => {
    switch (state) {
      case 'done':
        return (
          <div className="w-7 h-7 rounded-full bg-[#2E9E6B]/15 border border-[#2E9E6B]/40 text-[#2E9E6B] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        );
      case 'in_progress':
        return (
          <div className="w-7 h-7 rounded-full bg-[#1E6FA8] text-white flex items-center justify-center ring-4 ring-[#1E6FA8]/20 shadow-xs shrink-0">
            <Play className="w-3 h-3 fill-current ml-0.5" />
          </div>
        );
      case 'available':
        return (
          <div className="w-7 h-7 rounded-full bg-white border-2 border-[#1E6FA8]/70 text-[#1E6FA8] flex items-center justify-center shrink-0 shadow-2xs">
            <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
          </div>
        );
      case 'locked':
      default:
        return (
          <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center shrink-0">
            <Lock className="w-3 h-3 stroke-[2]" />
          </div>
        );
    }
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-2.5 pb-6 space-y-4 animate-in fade-in duration-150">
      {/* 1. LIGHTWEIGHT PAGE HEADER */}
      <header className="pt-2 pb-1 px-0.5">
        <h1 className="text-base font-bold text-slate-800 tracking-tight">
          یادگیری
        </h1>
        <p className="text-xs text-slate-500 font-normal mt-0.5">
          مسیر توسعه شایستگی‌های فردی و سازمانی
        </p>
      </header>

      {/* 2. DOMAIN SELECTOR: Horizontally scrollable selector for the 5 competency domains */}
      <section aria-label="انتخاب حوزه شایستگی" className="-mx-4 px-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 pb-1 min-w-max">
          {learningDomains.map((domain) => {
            const isSelected = domain.id === activeDomain.id;

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setSelectedDomainId(domain.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1E6FA8] text-white shadow-xs font-semibold'
                    : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-800 border border-slate-200/80'
                }`}
              >
                {domain.name}
              </button>
            );
          })}
        </div>
      </section>

      {currentUnit ? (
        <>
          {/* 3. ACTIVE DOMAIN SUMMARY: Contextual progress without a heavy card box */}
          <section className="px-1 pt-1 pb-1 space-y-1.5">
            <div className="flex items-baseline justify-between gap-2">
              <div>
                <h2 className="text-sm font-bold text-slate-800 tracking-tight">
                  {activeDomain.name}
                </h2>
                {activeDomain.activePathTitle && (
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activeDomain.activePathTitle}
                  </p>
                )}
              </div>

              {activeDomain.completedBytes !== undefined && activeDomain.totalBytes !== undefined && (
                <span className="text-xs font-bold text-[#1E6FA8] bg-[#1E6FA8]/10 px-2 py-0.5 rounded-md shrink-0">
                  {toPersianDigits(activeDomain.completedBytes)} از {toPersianDigits(activeDomain.totalBytes)} گرابایت
                </span>
              )}
            </div>

            {/* Restrained Domain Progress Bar */}
            {activeDomain.completedBytes !== undefined && activeDomain.totalBytes !== undefined && (
              <div className="w-full bg-slate-200/70 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#1E6FA8] h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${(activeDomain.completedBytes / activeDomain.totalBytes) * 100}%`,
                  }}
                />
              </div>
            )}
          </section>

          {/* 4. CONTINUE LEARNING: Primary action of the screen with clear visual emphasis */}
          {inProgressLesson && (
            <section aria-label="ادامه یادگیری" className="pt-1">
              <div
                onClick={() => handleLessonClick(inProgressLesson)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleLessonClick(inProgressLesson);
                }}
                className="relative p-4 rounded-2xl bg-white border border-[#1E6FA8]/30 shadow-2xs hover:border-[#1E6FA8]/60 transition-all duration-150 cursor-pointer group text-right overflow-hidden"
              >
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E6FA8]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative space-y-2.5">
                  {/* Badge row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1E6FA8] bg-[#1E6FA8]/10 px-2.5 py-0.5 rounded-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FA8]" />
                      <span>قدم بعدی • در حال یادگیری</span>
                    </span>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{toPersianDigits(inProgressLesson.durationMinutes)} دقیقه</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5 text-slate-600 font-semibold">
                        <Zap className="w-3 h-3 text-[#009BEC]" />
                        <span>{toPersianDigits(inProgressLesson.xp)} XP</span>
                      </span>
                    </div>
                  </div>

                  {/* Lesson Title */}
                  <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-[#1E6FA8] transition-colors">
                    {inProgressLesson.title}
                  </h3>

                  {/* Primary Action Button */}
                  <div className="pt-1 flex items-center justify-between gap-2">
                    <span className="text-xs text-slate-500 font-normal">
                      {currentUnit.title}
                    </span>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E6FA8] group-hover:bg-[#15537F] text-white text-xs font-bold shadow-2xs transition-colors">
                      <span>ادامه یادگیری</span>
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 5. CURRENT UNIT: Structured Vertical Progression Timeline */}
          <section aria-label="فهرست گام‌های فصل جاری" className="pt-2 space-y-3">
            {/* Unit Section Title */}
            <div className="px-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-600 tracking-tight">
                  {currentUnit.title}
                </h3>
                <span className="text-[11px] text-slate-400">
                  فصل جاری
                </span>
              </div>
              {currentUnit.description && (
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {currentUnit.description}
                </p>
              )}
            </div>

            {/* Structured Timeline Container */}
            <div className="relative pr-2 space-y-1">
              {/* Vertical connecting line aligned to center of nodes */}
              <div
                className="absolute top-4 bottom-4 right-[19px] w-0.5 bg-slate-200/80 -z-0"
                aria-hidden="true"
              />

              {/* Lessons Progression List */}
              {currentUnit.lessons.map((lesson) => {
                const isClickable = lesson.state !== 'locked';
                const isCurrent = lesson.state === 'in_progress';
                const isDone = lesson.state === 'done';

                return (
                  <div
                    key={lesson.id}
                    onClick={() => isClickable && handleLessonClick(lesson)}
                    className={`relative flex items-center gap-3 py-2 px-2 rounded-xl transition-all duration-150 ${
                      isClickable ? 'cursor-pointer hover:bg-white/80 group' : 'cursor-default opacity-75'
                    } ${isCurrent ? 'bg-white/90 border border-slate-200/80 shadow-2xs' : ''}`}
                  >
                    {/* Node status icon */}
                    <div className="relative z-10">
                      {getLessonNodeIcon(lesson.state)}
                    </div>

                    {/* Lesson Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={`text-xs font-bold truncate transition-colors ${
                            isDone
                              ? 'text-slate-700'
                              : isCurrent
                              ? 'text-slate-900 group-hover:text-[#1E6FA8]'
                              : lesson.state === 'available'
                              ? 'text-slate-800 group-hover:text-[#1E6FA8]'
                              : 'text-slate-500'
                          }`}
                        >
                          {lesson.title}
                        </h4>

                        {isCurrent && (
                          <span className="text-[10px] font-bold text-[#1E6FA8] bg-[#1E6FA8]/10 px-1.5 py-0.5 rounded shrink-0">
                            در حال یادگیری
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                        <span>{toPersianDigits(lesson.durationMinutes)} دقیقه</span>
                        <span>•</span>
                        <span>{toPersianDigits(lesson.xp)} XP</span>
                        {isDone && (
                          <>
                            <span>•</span>
                            <span className="text-[#2E9E6B] font-medium">تکمیل شده</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Action arrow if current or available */}
                    {isClickable && (
                      <ArrowLeft
                        className={`w-3.5 h-3.5 text-slate-300 transition-all shrink-0 ${
                          isCurrent
                            ? 'text-[#1E6FA8] group-hover:-translate-x-0.5'
                            : 'group-hover:text-slate-600 group-hover:-translate-x-0.5'
                        }`}
                      />
                    )}
                  </div>
                );
              })}

              {/* Checkpoint Milestone */}
              {currentUnit.checkpoint && (
                <div className="relative flex items-center gap-3 py-2.5 px-2 rounded-xl bg-slate-50/70 border border-dashed border-slate-200/90 text-slate-600 mt-1">
                  <div className="relative z-10 w-7 h-7 rounded-full bg-white border border-slate-300 text-slate-500 flex items-center justify-center shrink-0">
                    <Target className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs font-bold text-slate-700 truncate">
                        {currentUnit.checkpoint.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium shrink-0">
                        پس از اتمام فصل
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                      <span>سنجش عملی</span>
                      <span>•</span>
                      <span>{toPersianDigits(currentUnit.checkpoint.durationMinutes)} دقیقه</span>
                      <span>•</span>
                      <span className="font-semibold text-slate-600">
                        {toPersianDigits(currentUnit.checkpoint.xp)} XP
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 6. CERTIFICATE: Subtle Future Milestone */}
          {activeDomain.certificateTitle && (
            <section aria-label="گواهی پایان مسیر" className="pt-2">
              <div className="py-2.5 px-3 rounded-xl bg-white/50 border border-slate-200/60 flex items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Award className="w-4 h-4 text-[#1F9A8A] shrink-0" />
                  <div className="truncate">
                    <span className="font-medium text-slate-700 block truncate">
                      {activeDomain.certificateTitle}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      قابل دریافت پس از تکمیل تمامی فصل‌ها
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400 shrink-0">
                  پردیس گرا
                </span>
              </div>
            </section>
          )}
        </>
      ) : (
        /* TEMPORARY PROTOTYPE EMPTY-STATE: Simple, lightweight, minimal */
        <div className="pt-8 pb-10 px-4 text-center space-y-2 text-slate-600">
          <p className="text-xs font-semibold text-slate-700">
            محتوای این حوزه در مرحله بعد به نمونه طراحی اضافه می‌شود.
          </p>
          <p className="text-[11px] text-slate-400 max-w-xs mx-auto leading-relaxed">
            در این مرحله فقط ساختار و زبان طراحی بخش یادگیری در حال تثبیت است.
          </p>
        </div>
      )}
    </div>
  );
}
