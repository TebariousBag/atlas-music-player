import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full p-6 md:w-1/2">
        <CurrentlyPlaying />
      </div>
      <div className="w-full p-6 md:w-1/2">
        <Playlist />
      </div>
    </div>
  );
}
