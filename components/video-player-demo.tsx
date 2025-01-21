'use client';

import React, { useState } from 'react';

import { demoVideos } from '@/data/demo-videos';

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

const DemoPage: React.FC = () => {
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

  const handleVideoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
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
      <div className="flex flex-col w-[900px] gap-4">
        <div className="flex items-center justify-between gap-4 px-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Video Player Demo
          </h1>
          <div>
            <select
              value={selectedVideo}
              onChange={handleVideoChange}
              className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {demoVideos.map((video) => (
                <option key={video.id} value={video.id}>
                  {video.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-grow">
          <VideoPlayer
            autoplay={playerState.autoplay}
            controls={playerState.showControls}
            url={currentVideo}
            showCustomControls={playerState.showCustomControls}
            loop={playerState.loop}
            style={{
              height: '500px',
              width: '900px',
            }}
          />
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

export default DemoPage;
