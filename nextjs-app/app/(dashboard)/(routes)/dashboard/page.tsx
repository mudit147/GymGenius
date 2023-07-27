'use client';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Dumbbell, LineChart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const routes = [
  {
    label: 'Progress Tracker',
    icon: LineChart,
    href: '/progresstracker',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    label: 'Workout Plan',
    icon: Dumbbell,
    href: '/workoutplan',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8 space-y-4 text-center flex flex-col items-center">
        <div className="relative w-20 h-20 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h2 className="text-5xl md:text-4xl font-bold text-slate-100">
          GymGenius
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-200">
          Your Personal AI Trainer
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-slate-300">
          GymGenius is a custom workout generator powered by OpenAI&apos;s
          ChatGPT.
        </p>
      </div>
      <div className="grid gap-y-10">
        {routes.map((route) => (
          <Card
            onClick={() => router.push(route.href)}
            key={route.href}
            className="p-5 w-full rounded-md flex items-center justify-center gap-x-4 border-white/5 bg-[#333333] hover:shadow-md transition cursor-pointer text-white"
          >
            <route.icon className={cn('w-8 h-8', route.color)} />
            <div className="font-semibold">{route.label}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
