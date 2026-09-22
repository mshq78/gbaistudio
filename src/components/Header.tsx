import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types.ts';

interface HeaderProps {
  user: UserProfile;
  unreadCount: number;
}

export function Header({ user, unreadCount }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="pt-2 pb-3 px-1 flex items-center justify-between">
      {/* User greeting and avatar */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={user.avatarUrl}
            alt={user.firstName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/80 shadow-xs"
          />
          {/* Subtle online / campus presence indicator */}
          <span className="absolute bottom-0 left-0 w-2.5 h-2.5 rounded-full bg-[#2E9E6B] ring-2 ring-[#F8F6F0]" />
        </div>

        <div>
          <div className="flex items-center gap-1.5">
            <h1 className="text-base font-bold text-slate-800 tracking-tight">
              صبح بخیر، {user.firstName}
            </h1>
            <span className="text-xs px-1.5 py-0.5 rounded-md bg-[#1E6FA8]/10 text-[#1E6FA8] font-medium hidden xs:inline-block">
              پردیس گرا
            </span>
          </div>
          <p className="text-xs text-slate-500 font-normal">
            سه‌شنبه، ۱ مهر • روز رویداد حضوری
          </p>
        </div>
      </div>

      {/* Header Actions: Notification Bell navigating to /notifications */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => navigate('/notifications')}
          aria-label="اعلان‌ها"
          className="relative w-9 h-9 rounded-full bg-white/70 hover:bg-white text-slate-700 hover:text-[#1E6FA8] border border-slate-200/60 flex items-center justify-center transition-colors active:scale-95 shadow-2xs cursor-pointer"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#009BEC] ring-2 ring-white" />
          )}
        </button>
      </div>
    </header>
  );
}
