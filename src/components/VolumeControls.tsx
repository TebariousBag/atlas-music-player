import { Volume2 } from "lucide-react";
import { VolumeControlsProps } from "../types";

export default function VolumeControls({
  volume,
  onVolumeChange,
}: VolumeControlsProps) {
  return (
    <div className="my-4 flex w-full items-center">
      <Volume2 className="fill-french-blue stroke-french-blue mx-2 dark:fill-gray-300 dark:stroke-gray-300" />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="slider accent-french-blue w-full cursor-pointer dark:accent-gray-300"
      />
    </div>
  );
}
