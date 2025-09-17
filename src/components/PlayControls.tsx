import { SkipBack, Pause, Play, SkipForward, Shuffle } from "lucide-react";
import { PlayControlsProps } from "../types";

export default function PlayControls({
  playSpeed,
  goBack,
  onChangeSpeed,
  onBack,
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
        onClick={onBack}
        disabled={!goBack}
        className={`mx-2 rounded ${goBack ? "cursor-pointer" : "cursor-not-allowed opacity-50"} `}
      >
        <SkipBack
          className="fill-french-blue text-french-blue dark:fill-gray-300 dark:text-gray-300"
        />
      </button>

      <button className="mx-2 cursor-pointer rounded-xl border-2 p-4 dark:border-gray-300">
        <Play className="fill-french-blue text-french-blue dark:fill-gray-300 dark:text-gray-300" />
      </button>
      <button className="mx-2 cursor-pointer rounded">
        <SkipForward className="fill-french-blue text-french-blue dark:fill-gray-300 dark:text-gray-300" />
      </button>
      <button className="fill-french-blue text-french-blue mx-2 cursor-pointer rounded dark:fill-gray-300 dark:text-gray-300">
        <Shuffle />
      </button>
    </div>
  );
}
