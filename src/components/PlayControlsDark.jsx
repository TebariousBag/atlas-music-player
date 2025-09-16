import { SkipBack, Pause, Play, SkipForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="mx-2 text-center text-2xl font-bold text-gray-500 dark:text-gray-500">
        1x
      </p>
      <button className="mx-2 rounded">
        <SkipBack className="fill-gray-500 text-gray-500 dark:fill-gray-500 dark:text-gray-500" />
      </button>
      <button className="mx-2 rounded-xl border-2 p-4 dark:border-gray-500">
        <Play className="fill-gray-500 text-gray-500 dark:fill-gray-500 dark:text-gray-500" />
      </button>
      <button className="mx-2 rounded">
        <SkipForward className="fill-gray-500 text-gray-500 dark:fill-gray-500 dark:text-gray-500" />
      </button>
      <button className="mx-2 rounded fill-gray-500 text-gray-500 dark:fill-gray-500 dark:text-gray-500">
        <Shuffle />
      </button>
    </div>
  );
}
