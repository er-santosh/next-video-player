import React from 'react';

import { RxLoop } from 'react-icons/rx';

import { cn } from '@/lib/utils';

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
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-xl font-semibold text-gray-800">Playlist</h3>
        <RxLoop
          className={`text-2xl cursor-pointer transition-colors duration-300 ${
            loop ? 'text-blue-600' : 'text-gray-500'
          } hover:text-blue-500`}
          onClick={toggleLoop}
          title="Toggle Loop"
        />
      </div>
      <div className="max-h-64 overflow-y-auto">
        {demoVideos.map(({ id, title, icon: Icon, iconColor }) => (
          <div
            key={id}
            onClick={() => handleVideoChange(id)}
            className={cn(
              'flex items-center justify-between p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50',
              {
                'bg-blue-100': selectedVideo === id,
              },
            )}
          >
            <div className="flex items-center gap-2">
              <Icon color={iconColor} />
              <span className="text-gray-700 text-sm capitalize font-medium">
                {title}
              </span>
            </div>
            {selectedVideo === id && (
              <span className="text-xs text-blue-600">Now Playing</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
