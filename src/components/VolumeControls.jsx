import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="my-4 flex w-full items-center">
      <Volume2 className="fill-french-blue stroke-french-blue mx-2" />
      <input
        type="range"
        min="0"
        max="100"
        className="slider accent-french-blue w-full cursor-pointer"
      />
    </div>
  );
}
