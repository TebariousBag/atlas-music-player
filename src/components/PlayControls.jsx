import { SkipBack, Pause, Play, SkipForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="mx-2 text-center text-2xl">1x</p>
      <button className="mx-2 cursor-pointer rounded">
        <SkipBack />
      </button>
      <button className="mx-2 cursor-pointer rounded-xl border-2 p-4">
        <Play />
      </button>
      <button className="mx-2 cursor-pointer rounded">
        <SkipForward />
      </button>
      <button className="mx-2 cursor-pointer rounded">
        <Shuffle />
      </button>
    </div>
  );
}
