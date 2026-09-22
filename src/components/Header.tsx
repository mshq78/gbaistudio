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
    <header className="pt-2 pb-2 px-0.5 flex items-center justify-between">
      {/* User greeting and avatar */}
      <div className="flex items-center gap-3">
        <img
          src={user.avatarUrl}
          alt={user.firstName}
          className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-200/80 shadow-2xs"
        />

        <div>
          <h1 className="text-base font-bold text-slate-800 tracking-tight leading-tight">
            صبح بخیر، {user.firstName}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            سه‌شنبه، ۱ مهر • روز رویداد
          </p>
        </div>
      </div>

      {/* Header Actions: Notification Bell */}
      <button
        type="button"
        onClick={() => navigate('/notifications')}
        aria-label="اعلان‌ها"
        className="relative w-9 h-9 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#1E6FA8] border border-slate-200/80 flex items-center justify-center transition-colors active:scale-95 shadow-2xs cursor-pointer"
      >
        <Bell className="w-4 h-4" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#009BEC] ring-2 ring-white" />
        )}
      </button>
    </header>
  );
}
