import { useState, useEffect } from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { PlaylistSong, Song } from "../types";

interface CurrentlyPlayingProps {
  selectedSong: PlaylistSong | null;
}

export default function CurrentlyPlaying({
  selectedSong,
}: CurrentlyPlayingProps) {
  const [fullSongData, setFullSongData] = useState<Song | null>(null);

  useEffect(() => {
    if (!selectedSong) {
      setFullSongData(null);
      return;
    }

    const fetchFullSongData = async () => {
      try {
        const response = await fetch(`/api/v1/songs/${selectedSong.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch song data");
        }
        const songData: Song = await response.json();
        setFullSongData(songData);
      } catch (error) {
        console.error("Error fetching song data:", error);
        setFullSongData(null);
      }
    };

    fetchFullSongData();
  }, [selectedSong]);

  return (
    <div className="bg-picton-blue w-full dark:border-gray-500 dark:bg-gray-600">
      <CoverArt selectedSong={fullSongData} />
      <SongTitle selectedSong={fullSongData} />
      <PlayControls />
      <VolumeControls className="w-full" />
    </div>
  );
}
