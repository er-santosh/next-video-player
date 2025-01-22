import { memo } from 'react';

import { FaPause, FaPlay, FaStop } from 'react-icons/fa6';
import { MdOutlineRestartAlt } from 'react-icons/md';

import { Button } from '@/components/ui/button';

interface ControlButtonsProps {
  playing?: boolean;
  handlePlay: () => void;
  handlePause: () => void;
  handleStop: () => void;
  handleRestart: () => void;
}

const ControlButtons = ({
  playing,
  handlePause,
  handlePlay,
  handleRestart,
  handleStop,
}: ControlButtonsProps) => {
  return (
    <div className="flex space-x-2">
      {playing ? (
        <Button
          size={'icon'}
          className="bg-sky-100 hover:bg-sky-200 text-sky-400"
          onClick={handlePause}
        >
          <FaPause />
        </Button>
      ) : (
        <Button
          size={'icon'}
          className="bg-sky-100 hover:bg-sky-200 text-sky-400"
          onClick={handlePlay}
        >
          <FaPlay />
        </Button>
      )}
      <Button
        size={'icon'}
        className="bg-orange-100 hover:bg-orange-200 text-orange-400"
        onClick={handleStop}
      >
        <FaStop />
      </Button>
      <Button
        size={'icon'}
        className="bg-green-100 hover:bg-green-200 text-green-400"
        onClick={handleRestart}
      >
        <MdOutlineRestartAlt />
      </Button>
    </div>
  );
};

export default memo(ControlButtons);
