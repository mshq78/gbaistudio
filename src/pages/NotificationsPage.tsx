import { ArrowRight, Bell, Calendar, BookOpen, Target, CheckCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { initialNotifications } from '../data/mockData.ts';
import { useState } from 'react';

export function NotificationsPage() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

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

          <button
            type="button"
            onClick={markAllRead}
            className="text-xs text-[#009BEC] hover:underline font-medium cursor-pointer"
          >
            خوانده شدن همه
          </button>
        </div>

        {/* Notifications Title */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1E6FA8]/10 text-[#1E6FA8] flex items-center justify-center">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-800">مرکز اعلان‌ها</h1>
            <p className="text-xs text-slate-500">یادآوری‌های رویداد و یادگیری</p>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-2.5">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-3.5 rounded-xl border text-xs transition-colors ${
                notif.read
                  ? 'bg-white border-slate-200/80 text-slate-600'
                  : 'bg-blue-50/50 border-blue-200/80 text-slate-800'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="font-bold flex items-center gap-1.5">
                  {!notif.read && (
                    <span className="w-2 h-2 rounded-full bg-[#009BEC]" />
                  )}
                  {notif.title}
                </span>
                <span className="text-[11px] text-slate-400">{notif.timeAgo}</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                {notif.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
