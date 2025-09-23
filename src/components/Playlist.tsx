import PlayListItem from "./PlayListItem";
import { PlaylistProps } from "../types";

export default function Playlist({
  songs,
  selectedSongId,
  onSongSelect,
}: PlaylistProps) {
  return (
    <div className="border-aero h-full rounded border-4 bg-blue-200 p-4 dark:border-gray-500 dark:bg-gray-600">
      <div>
        <p className="text-french-blue mb-5 text-2xl font-bold dark:text-gray-300">
          Playlist
        </p>
      </div>
      <div className="space-y-2">
        {songs.map((song) => (
          <PlayListItem
            key={song.id}
            song={song}
            isSelected={selectedSongId === song.id}
            onClick={() => onSongSelect(song.id)}
          />
        ))}
      </div>
    </div>
  );
}
