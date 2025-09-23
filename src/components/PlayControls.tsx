import { SkipBack, Pause, Play, SkipForward, Shuffle } from "lucide-react";
import { PlayControlsProps } from "../types";

export default function PlayControls({
  playSpeed,
  canGoBack,
  canGoForward,
  isShuffleOn,
  isPlaying,
  onChangeSpeed,
  ongoBack,
  ongoForward,
  onShuffleToggle,
  onPlayPause,
}: PlayControlsProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <button
        className="text-french-blue mx-2 text-center text-2xl font-bold dark:text-gray-300"
        onClick={onChangeSpeed}
      >
        {playSpeed}x
      </button>

      <button
        onClick={ongoBack}
        disabled={!canGoBack}
        className={`mx-2 rounded ${canGoBack ? "cursor-pointer" : "cursor-not-allowed opacity-50"} `}
      >
        <SkipBack className="fill-french-blue text-french-blue dark:fill-gray-300 dark:text-gray-300" />
      </button>

      <button
        onClick={onPlayPause}
        className="border-aero mx-2 cursor-pointer rounded-xl border-2 p-4 hover:opacity-50 dark:border-gray-300"
      >
        {isPlaying ? (
          <Pause className="fill-french-blue text-french-blue dark:fill-gray-300 dark:text-gray-300" />
        ) : (
          <Play className="fill-french-blue text-french-blue dark:fill-gray-300 dark:text-gray-300" />
        )}
      </button>

      <button
        onClick={ongoForward}
        disabled={!canGoForward}
        className={`${canGoForward ? "cursor-pointer" : "cursor-not-allowed opacity-50"} mx-2 cursor-pointer rounded-xl p-4 dark:border-gray-300`}
      >
        <SkipForward className="fill-french-blue text-french-blue dark:fill-gray-300 dark:text-gray-300" />
      </button>

      <button
        onClick={onShuffleToggle}
        className={`mx-2 cursor-pointer rounded hover:opacity-50 ${
          isShuffleOn
            ? "text-blue-600 dark:text-blue-400"
            : "text-french-blue dark:text-gray-300"
        }`}
      >
        <Shuffle />
      </button>
    </div>
  );
}
