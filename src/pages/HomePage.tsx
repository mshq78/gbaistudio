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
    <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 animate-in fade-in duration-150">
      {/* 1. Header: lightweight, not a boxed card */}
      <Header user={user} unreadCount={unreadCount} />

      {/* 2. Primary Context Hero: ACTIVE EVENT TODAY */}
      <EventHero event={activeEvent} />

      {/* 3. Today / Progress: Compact and restrained */}
      <TodayProgress user={user} />

      {/* 4. Continue Learning: Focused and secondary to hero */}
      <ContinueLearning learningByte={continueLearningByte} />

      {/* 5. Active Challenge: Compact 7-day dialogue challenge */}
      <ActiveChallenge
        challenge={challenge}
        onToggleCompleteToday={onToggleChallengeToday}
      />

      {/* 6. Secondary Discovery: Recent achievement / campus milestone */}
      <SecondaryDiscovery achievement={recentAchievement} />
    </div>
  );
}
