import { Home, Compass, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { path: '/', label: 'خانه', icon: Home },
    { path: '/learning', label: 'یادگیری', icon: Compass },
    { path: '/me', label: 'من', icon: User },
  ];

  return (
    <nav 
      aria-label="ناوبری اصلی"
      className="sticky bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-6 py-2 z-30 shrink-0"
    >
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;

          return (
            <button
              key={tab.path}
              type="button"
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center py-1 px-4 rounded-xl transition-all duration-150 cursor-pointer min-w-[64px] ${
                isActive
                  ? 'text-[#1E6FA8] font-bold'
                  : 'text-slate-500 hover:text-slate-700 font-medium'
              }`}
            >
              <div className={`relative p-1 rounded-full transition-transform ${isActive ? 'scale-105' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
                {isActive && (
                  <span className="absolute -bottom-0.5 inset-x-1.5 h-0.5 bg-[#1E6FA8] rounded-full" />
                )}
              </div>
              <span className="text-[11px] whitespace-nowrap tracking-tight mt-0.5">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
