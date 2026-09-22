import { Header } from '../components/Header.tsx';
import { EventHero } from '../components/EventHero.tsx';
import { TodayProgress } from '../components/TodayProgress.tsx';
import { ContinueLearning } from '../components/ContinueLearning.tsx';
import { ActiveChallenge } from '../components/ActiveChallenge.tsx';
import { SecondaryDiscovery } from '../components/SecondaryDiscovery.tsx';
import { UserProfile, ActiveChallenge as ActiveChallengeType } from '../types.ts';
import {
  activeEvent,
  continueLearningByte,
  recentAchievement,
} from '../data/mockData.ts';

interface HomePageProps {
  user: UserProfile;
  challenge: ActiveChallengeType;
  unreadCount: number;
  onToggleChallengeToday: () => void;
}

export function HomePage({
  user,
  challenge,
  unreadCount,
  onToggleChallengeToday,
}: HomePageProps) {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-2.5 pb-4 space-y-3 animate-in fade-in duration-150">
      {/* 1. Header: Lightweight, unboxed */}
      <Header user={user} unreadCount={unreadCount} />

      {/* 2. ONE Dominant Active Event Hero */}
      <EventHero event={activeEvent} />

      {/* 3. Today Progress: Unboxed, integrated typographic strip */}
      <TodayProgress user={user} />

      {/* 4. Continue Learning: Natural next action, restrained surface */}
      <ContinueLearning learningByte={continueLearningByte} />

      {/* 5. Active Challenge: Restrained friendly gamification */}
      <ActiveChallenge
        challenge={challenge}
        onToggleCompleteToday={onToggleChallengeToday}
      />

      {/* 6. Secondary Discovery: Quiet inline achievement */}
      <SecondaryDiscovery achievement={recentAchievement} />
    </div>
  );
}
