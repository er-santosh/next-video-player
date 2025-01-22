import { memo } from 'react';

import { Progress as ProgressBar } from '@/components/ui/progress';

interface ProgressProps {
  currentTime: number;
  duration: number;
  playedProgress: number;
}

const Progress = ({ currentTime, duration, playedProgress }: ProgressProps) => {
  const currentTimeInSeconds = `${currentTime.toFixed(2)}s`;
  const durationInSeconds = `${duration.toFixed(2)}s`;
  const playedPercent = playedProgress * 100;

  return (
    <div className="text-gray-800">
      <div className="mb-2">
        <span className="text-sm font-semibold">{`Current Time: ${currentTimeInSeconds}`}</span>
        <span className="text-sm font-semibold ml-2">{` / Duration: ${durationInSeconds}`}</span>
      </div>
      <div className="flex items-center gap-2">
        <ProgressBar
          value={playedPercent}
          className="w-full h-3 rounded-full bg-slate-200"
        />
        <span className="text-sm font-semibold">{`${playedPercent.toFixed(
          2,
        )}%`}</span>
      </div>
    </div>
  );
};

export default memo(Progress);
