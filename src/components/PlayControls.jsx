import { SkipBack, Pause, Play, SkipForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center">
      <p>1x</p>
      <SkipBack />
      <Play />
      <SkipForward />
      <Shuffle />
    </div>
  );
}
