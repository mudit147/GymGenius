'use client';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Code2, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

const routes = [
  {
    label: 'Progress Tracker',
    icon: MessageSquare,
    href: '/progresstracker',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    label: 'Workout Plan',
    icon: Code2,
    href: '/workoutplan',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-5xl md-text-4xl font-bold text-center text-slate-700">
          GymGenius
        </h2>
        <h2 className="text-2xl md-text-4xl font-bold text-center text-slate-500">
          Your Personal AI Trainer
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center text-slate-600">
          GymGenius is a custom workout generator powered by OpenAI&apos;s
          ChatGPT.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-8">
        {routes.map((route) => (
          <Card
            onClick={() => router.push(route.href)}
            key={route.href}
            className="p-8 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div
              className={cn(
                'p-10 w-full rounded-md flex items-center justify-center gap-x-4',
                route.bgColor,
              )}
            >
              <route.icon className={cn('w-8 h-8', route.color)} />
              <div className="font-semibold flex">{route.label}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
