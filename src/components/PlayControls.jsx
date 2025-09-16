import { SkipBack, Pause, Play, SkipForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-french-blue mx-2 text-center text-2xl font-bold">1x</p>
      <button className="mx-2 cursor-pointer rounded">
        <SkipBack className="fill-french-blue text-french-blue" />
      </button>
      <button className="mx-2 cursor-pointer rounded-xl border-2 p-4">
        <Play className="fill-french-blue text-french-blue" />
      </button>
      <button className="mx-2 cursor-pointer rounded">
        <SkipForward className="fill-french-blue text-french-blue" />
      </button>
      <button className="fill-french-blue text-french-blue mx-2 cursor-pointer rounded">
        <Shuffle />
      </button>
    </div>
  );
}
