interface ProgressProps {
  currentTime: number;
  duration: number;
  playedProgress: number;
}

const Progress = ({ currentTime, duration, playedProgress }: ProgressProps) => {
  const currentTimeInSeconds = `${currentTime.toFixed(2)}s`;
  const durationInSeconds = `${duration.toFixed(2)}s`;
  const playedPercent = `${(playedProgress * 100).toFixed(2)}%`;

  return (
    <div className="p-2">
      <div>
        <span>{`Current Time: ${currentTimeInSeconds}`}</span>
        <span>{` / Duration: ${durationInSeconds}`}</span>
      </div>
      <div className="flex items-center gap-2">
        <progress max={1} value={playedProgress} className="w-full" />
        <span>{playedPercent}</span>
      </div>
    </div>
  );
};

export default Progress;
