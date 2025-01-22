import React from 'react';

import { RxLoop } from 'react-icons/rx';

import { Video } from '@/types/video';

interface PlaylistProps {
  demoVideos: Video[];
  selectedVideo: number;
  loop: boolean;
  handleVideoChange: (id: number) => void;
  toggleLoop: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  demoVideos,
  selectedVideo,
  loop,
  handleVideoChange,
  toggleLoop,
}) => {
  return (
    <div className="border border-gray-300 rounded-md shadow-sm">
      <div className="rounded-t-md p-2 border-b">
        <RxLoop
          className={`text-2xl cursor-pointer ${
            loop ? 'text-blue-600' : 'text-gray-600'
          }`}
          onClick={toggleLoop}
          title="Toggle Loop"
        />
      </div>
      {demoVideos.map((video) => (
        <div
          key={video.id}
          onClick={() => handleVideoChange(video.id)}
          className={`p-3 cursor-pointer border-b border-gray-200 hover:bg-gray-100 ${
            selectedVideo === video.id ? 'bg-blue-100' : ''
          }`}
        >
          {video.title}
        </div>
      ))}
    </div>
  );
};

export default Playlist;
