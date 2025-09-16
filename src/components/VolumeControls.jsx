import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="flex items-center">
      <Volume2 />
      <input type="range" />
    </div>
  );
}
