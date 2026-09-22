/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { EventPage } from './pages/EventPage.tsx';
import { LessonPage } from './pages/LessonPage.tsx';
import { ChallengePage } from './pages/ChallengePage.tsx';
import { NotificationsPage } from './pages/NotificationsPage.tsx';
import { LearningPage } from './pages/LearningPage.tsx';
import { MePage } from './pages/MePage.tsx';
import { BottomNav } from './components/BottomNav.tsx';
import {
  currentUser as initialUser,
  activeChallenge as initialChallenge,
  initialNotifications,
} from './data/mockData.ts';
import { UserProfile, ActiveChallenge as ActiveChallengeType } from './types.ts';
import { Smartphone, Monitor, RotateCcw } from 'lucide-react';
import { toPersianDigits } from './utils/persian.ts';

function AppShell() {
  const location = useLocation();
  const [user, setUser] = useState<UserProfile>(initialUser);
  const [challenge, setChallenge] = useState<ActiveChallengeType>(initialChallenge);
  const [notifications] = useState(initialNotifications);
  const [showDeviceShell, setShowDeviceShell] = useState(true);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleToggleChallengeToday = () => {
    setChallenge((prev) => {
      const nextCompleted = !prev.completedToday;
      if (nextCompleted) {
        setUser((u) => ({ ...u, growthPoints: u.growthPoints + 15 }));
      } else {
        setUser((u) => ({ ...u, growthPoints: Math.max(340, u.growthPoints - 15) }));
      }
      return { ...prev, completedToday: nextCompleted };
    });
  };

  const handleResetPrototype = () => {
    setUser(initialUser);
    setChallenge(initialChallenge);
  };

  // Determine if bottom nav should be rendered (prominent on main tabs)
  const isMainTab = ['/', '/learning', '/me'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#EFECE6] text-slate-800 flex flex-col items-center justify-start p-0 md:py-6 selection:bg-[#009BEC]/20 selection:text-[#1E6FA8]">
      {/* Top Prototype Toolbar (Desktop Only Helper) */}
      <header className="hidden md:flex items-center justify-between w-full max-w-md mb-3 px-3 py-1.5 rounded-lg bg-white/70 backdrop-blur-xs border border-slate-300/60 text-xs text-slate-600 shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1E6FA8]" />
          <span className="font-bold text-slate-700">گرابایت • پیش‌نمایش معماری ناوبری</span>
          <span className="text-[11px] text-slate-400">۳۹۰ × ۸۴۴</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowDeviceShell(!showDeviceShell)}
            className="px-2 py-1 rounded hover:bg-slate-200/60 font-medium text-slate-700 flex items-center gap-1 cursor-pointer transition-colors"
            title="تغییر حالت قاب موبایل"
          >
            {showDeviceShell ? (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span>نمای باز</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5" />
                <span>قاب گوشی</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleResetPrototype}
            className="p-1 rounded hover:bg-slate-200/60 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            title="بازنشانی داده‌های تعاملی"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Viewport Container */}
      <main
        className={`w-full transition-all duration-200 ${
          showDeviceShell
            ? 'md:max-w-[390px] md:h-[844px] md:rounded-[44px] md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] md:border-[10px] md:border-[#1E293B] overflow-hidden'
            : 'max-w-md min-h-screen md:min-h-[844px]'
        } bg-[#F8F6F0] flex flex-col relative`}
      >
        {/* Mobile Device Status Bar (Desktop Shell simulation) */}
        <div className="hidden md:flex items-center justify-between px-6 pt-3 pb-1 text-[12px] font-semibold text-slate-700 select-none shrink-0">
          <span>{toPersianDigits('08:30')}</span>
          {/* Dynamic Island / Notch */}
          <div className="w-24 h-4 bg-slate-900 rounded-full" />
          <div className="flex items-center gap-1 text-[11px]">
            <span>5G</span>
            <div className="w-4 h-2 rounded-xs border border-slate-700 p-0.5 flex items-center justify-end">
              <div className="w-2.5 h-full bg-slate-700 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Scrollable Screen Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col justify-between">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  user={user}
                  challenge={challenge}
                  unreadCount={unreadCount}
                  onToggleChallengeToday={handleToggleChallengeToday}
                />
              }
            />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/lessons/:id" element={<LessonPage />} />
            <Route path="/challenges/:id" element={<ChallengePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/me" element={<MePage />} />
            {/* Fallback to home */}
            <Route
              path="*"
              element={
                <HomePage
                  user={user}
                  challenge={challenge}
                  unreadCount={unreadCount}
                  onToggleChallengeToday={handleToggleChallengeToday}
                />
              }
            />
          </Routes>

          {/* Bottom Persistent Navigation (Active on main tabs or available throughout) */}
          <BottomNav />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
