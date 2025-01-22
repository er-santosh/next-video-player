'use client';

import { memo } from 'react';

import ReactPlayer, { ReactPlayerProps } from 'react-player';

import ControlButtons from '@/components/video-player/control-buttons';
import Progress from '@/components/video-player/progress';

import { usePlayer } from '@/hooks/use-player';

interface VideoPlayerProps
  extends Pick<ReactPlayerProps, 'url' | 'controls' | 'loop'> {
  autoplay?: boolean;
  showCustomControls?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = memo(
  ({ autoplay, showCustomControls, url, controls, loop, className }) => {
    const {
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
      handleEnded,
      handleRestart,
      handleError,
    } = usePlayer({
      options: {
        autoplay,
        loop,
      },
    });

    return (
      <div className={`relative w-full h-auto`}>
        <div className={`relative w-full h-0 pb-[56.25%] ${className}`}>
          <ReactPlayer
            ref={playerRef}
            url={url}
            onDuration={handleDuration}
            onProgress={handleTimeUpdate}
            playing={playing}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onError={handleError}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
            controls={controls}
            loop={loop}
            muted={autoplay}
            height="100%"
            width="100%"
            className="absolute top-0 left-0 bg-black"
          />
        </div>
        <div className="mt-2 flex flex-1">
          <div className="bg-slate-100 p-4 flex gap-2 sm:items-end flex-col sm:flex-row rounded-lg w-full">
            <div className="flex-1">
              <Progress
                currentTime={currentTime}
                duration={duration}
                playedProgress={playedProgress}
              />
            </div>
            {showCustomControls && (
              <ControlButtons
                playing={playing}
                handlePlay={handlePlay}
                handlePause={handlePause}
                handleRestart={handleRestart}
                handleStop={handleStop}
              />
            )}
          </div>
        </div>
      </div>
    );
  },
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
