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
        <button
          onClick={handlePause}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Pause
        </button>
      ) : (
        <button
          onClick={handlePlay}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Play
        </button>
      )}
      <button
        onClick={handleStop}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Stop
      </button>
      <button
        onClick={handleRestart}
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Restart
      </button>
    </div>
  );
};

export default ControlButtons;
