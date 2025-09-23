import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";
import AudioPlayer from "./AudioPlayer";
import { PlaylistSong } from "../types";

export default function MusicPlayer() {
  const [songs, setSongs] = useState<PlaylistSong[]>([]);
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [playSpeed, setPlaySpeed] = useState(1);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        setLoading(true);

        // skeleton at 3 seconds
        const [response] = await Promise.all([
          fetch("/api/v1/playlist"),
          new Promise((resolve) => setTimeout(resolve, 3000)),
        ]);

        if (!response.ok) {
          throw new Error("Failed to fetch playlist");
        }
        const playlistData: PlaylistSong[] = await response.json();
        setSongs(playlistData);
        // set first song as selected song
        if (playlistData.length > 0) {
          setSelectedSongId(playlistData[0].id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  // stop song when selecting a new song
  const handleSongSelect = (songId: string) => {
    setSelectedSongId(songId);
    setIsPlaying(false);
  };

  // Audio control handlers
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleSpeedChange = () => {
    setPlaySpeed(
      playSpeed === 1
        ? 1.25
        : playSpeed === 1.25
          ? 1.5
          : playSpeed === 1.5
            ? 2
            : 1,
    );
  };

  const handleSongEnd = () => {
    setIsPlaying(false);
    // auto play song or stop song
    const currentIndex = songs.findIndex((song) => song.id === selectedSongId);
    if (currentIndex < songs.length - 1) {
      setSelectedSongId(songs[currentIndex + 1].id);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = (time: number, totalDuration: number) => {
    console.log(`Current time: ${time}, Duration: ${totalDuration}`);
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

  // get current selected song
  const selectedSong = songs.find((song) => song.id === selectedSongId) || null;

  return (
    <div className="bg-picton-blue border-aero flex flex-col rounded-xl border-4 md:flex-row dark:border-gray-500 dark:bg-gray-600">
      <div className="w-full p-6 md:w-1/2">
        <CurrentlyPlaying
          selectedSong={selectedSong}
          isPlaying={isPlaying}
          volume={volume}
          playSpeed={playSpeed}
          onPlayPause={handlePlayPause}
          onVolumeChange={handleVolumeChange}
          onSpeedChange={handleSpeedChange}
        />
      </div>
      <div className="w-full p-6 md:w-1/2">
        <Playlist
          songs={songs}
          selectedSongId={selectedSongId}
          onSongSelect={handleSongSelect}
        />
      </div>

      <AudioPlayer
        selectedSong={selectedSong}
        isPlaying={isPlaying}
        volume={volume}
        playSpeed={playSpeed}
        onSongEnd={handleSongEnd}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}
