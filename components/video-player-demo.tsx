'use client';

import React, { useState } from 'react';

import { demoVideos } from '@/data/demo-videos';

import Playlist from '@/components/playlist';
import VideoPlayer from './video-player';

interface PlayerControlProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const PlayerControl: React.FC<PlayerControlProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-5 w-5 text-blue-600"
        />
        {label}
      </label>
    </div>
  );
};

const VideoPlayerDemo: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<string>(
    demoVideos[0].source,
  );
  const [selectedVideo, setSelectedVideo] = useState<number>(demoVideos[0].id);
  const [playerState, setPlayerState] = useState({
    autoplay: false,
    showControls: false,
    showCustomControls: true,
    loop: false,
  });

  const handleVideoChange = (selectedId: number) => {
    const selectedVideo = demoVideos.find((video) => video.id === selectedId);

    if (selectedVideo) {
      setCurrentVideo(selectedVideo.source);
      setSelectedVideo(selectedId);
    }
  };

  const handlePlayerStateChange = (
    id: keyof typeof playerState,
    checked: boolean,
  ) => {
    setPlayerState((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex flex-col md:min-w-[700px] lg:min-w-[900px] gap-4">
        <div className="flex items-center justify-between gap-4 px-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Video Player Demo
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <VideoPlayer
              key={playerState.showControls ? 'show' : 'hide'}
              autoplay={playerState.autoplay}
              controls={playerState.showControls}
              url={currentVideo}
              showCustomControls={playerState.showCustomControls}
              loop={playerState.loop}
            />
          </div>
          <div className="w-full md:w-1/3 relative">
            <Playlist
              demoVideos={demoVideos}
              selectedVideo={selectedVideo}
              loop={playerState.loop}
              handleVideoChange={handleVideoChange}
              toggleLoop={() =>
                handlePlayerStateChange('loop', !playerState.loop)
              }
            />
          </div>
        </div>
        <div className="space-y-4">
          <PlayerControl
            label="Show Controls"
            checked={playerState.showControls}
            onChange={(checked) =>
              handlePlayerStateChange('showControls', checked)
            }
          />
          <PlayerControl
            label="Show Custom Controls"
            checked={playerState.showCustomControls}
            onChange={(checked) =>
              handlePlayerStateChange('showCustomControls', checked)
            }
          />
          <PlayerControl
            label="Loop"
            checked={playerState.loop}
            onChange={(checked) => handlePlayerStateChange('loop', checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerDemo;
