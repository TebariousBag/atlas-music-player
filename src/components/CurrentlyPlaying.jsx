import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="bg-picton-blue w-full">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls className="w-full" />
    </div>
  );
}
