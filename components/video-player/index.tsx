'use client';

import { memo } from 'react';

import ReactPlayer, { ReactPlayerProps } from 'react-player';

import ControlButtons from '@/components/video-player/control-buttons';
import Progress from '@/components/video-player/progress';

import { usePlayer } from '@/hooks/use-player';

interface VideoPlayerProps
  extends Pick<ReactPlayerProps, 'url' | 'style' | 'controls' | 'loop'> {
  autoplay?: boolean;
  showCustomControls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = memo(
  ({
    style = {
      height: '100%',
      width: '100%',
    },
    autoplay,
    showCustomControls,
    url,
    controls,
    loop,
  }) => {
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
      <>
        <div style={style}>
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
            height={'100%'}
            width={'100%'}
          />
        </div>
        <Progress
          currentTime={currentTime}
          duration={duration}
          playedProgress={playedProgress}
        />
        <div className="flex items-center justify-end mt-2">
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
      </>
    );
  },
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
