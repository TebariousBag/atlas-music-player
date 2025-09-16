import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="my-4 flex w-full items-center">
      <Volume2 className="mx-2 fill-black" />
      <input
        type="range"
        min="0"
        max="100"
        className="slider w-full cursor-pointer accent-gray-500"
      />
    </div>
  );
}
