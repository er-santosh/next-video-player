import { useCallback, useRef, useState } from 'react';

import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';

interface UsePlayerProps {
  options: {
    autoplay?: boolean;
    loop?: boolean;
  };
}

export const usePlayer = ({ options: { autoplay, loop } }: UsePlayerProps) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playedProgress, setPlayedProgress] = useState(0);
  const [playing, setPlaying] = useState(autoplay || false);
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleDuration = useCallback((duration: number) => {
    setDuration(duration);
  }, []);

  const handleTimeUpdate = useCallback((state: OnProgressProps) => {
    setCurrentTime(state.playedSeconds);
    setPlayedProgress(state.played);
  }, []);

  const handlePlay = useCallback(() => {
    if (!playing) {
      setPlaying(true);
    }
  }, [playing]);

  const handlePause = useCallback(() => {
    if (playing) {
      setPlaying(false);
    }
  }, [playing]);

  const handleStop = useCallback(() => {
    setPlaying(false);
    playerRef.current?.seekTo(0);
  }, []);

  const handleRestart = useCallback(() => {
    setPlaying(true);
    playerRef.current?.seekTo(0);
  }, []);

  const handleError = useCallback((error: Error) => {
    console.log('Error occurred', error);
  }, []);

  const handleEnded = useCallback(() => {
    if (loop) {
      handlePlay();
    } else {
      handleStop();
    }

    console.log({ loop, playing });
  }, [loop, handlePlay, handleStop, playing]);

  return {
    duration,
    currentTime,
    playing,
    playerRef,
    playedProgress,
    handleDuration,
    handleTimeUpdate,
    handlePlay,
    handlePause,
    handleStop,
    handleRestart,
    handleError,
    handleEnded,
  };
};
