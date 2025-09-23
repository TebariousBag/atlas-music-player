import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";
import { PlaylistSong } from "../types";

export default function MusicPlayer() {
  const [songs, setSongs] = useState<PlaylistSong[]>([]);
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        setLoading(true);
        // loadingg skeleton stay a little longer
        const [response] = await Promise.all([
          fetch("/api/v1/playlist"),
          new Promise((resolve) => setTimeout(resolve, 3000)),
        ]);
        if (!response.ok) {
          throw new Error("Failed to fetch playlist");
        }
        const playlistData: PlaylistSong[] = await response.json();
        setSongs(playlistData);
        // set first song as selected
        if (playlistData.length > 0) {
          setSelectedSongId(playlistData[0].id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "error");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const handleSongSelect = (songId: string) => {
    setSelectedSongId(songId);
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="bg-picton-blue border-aero flex flex-col rounded-xl border-4 p-6 md:flex-row dark:border-gray-500 dark:bg-gray-600">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  // currently selected song
  const selectedSong = songs.find((song) => song.id === selectedSongId) || null;

  return (
    <div className="bg-picton-blue border-aero flex flex-col rounded-xl border-4 md:flex-row dark:border-gray-500 dark:bg-gray-600">
      <div className="w-full p-6 md:w-1/2">
        <CurrentlyPlaying selectedSong={selectedSong} />
      </div>
      <div className="w-full p-6 md:w-1/2">
        <Playlist
          songs={songs}
          selectedSongId={selectedSongId}
          onSongSelect={handleSongSelect}
        />
      </div>
    </div>
  );
}
