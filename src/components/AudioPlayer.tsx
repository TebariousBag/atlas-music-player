import { useEffect, useRef } from "react";
import { PlaylistSong } from "../types";

interface AudioPlayerProps {
  selectedSong: PlaylistSong | null;
  isPlaying: boolean;
  volume: number;
  playSpeed: number;
  onSongEnd: () => void;
  onTimeUpdate: (currentTime: number, duration: number) => void;
}

export default function AudioPlayer({
  selectedSong,
  isPlaying,
  volume,
  playSpeed,
  onSongEnd,
  onTimeUpdate,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Handle volume changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100; // Convert percentage to 0-1 range
  }, [volume]);

  // Handle playback speed changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.playbackRate = playSpeed;
  }, [playSpeed]);

  // Handle song changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !selectedSong) return;

    // Fetch the full song data to get the audio URL
    const fetchSongData = async () => {
      try {
        const response = await fetch(`/api/v1/songs/${selectedSong.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch song data");
        }
        const songData = await response.json();
        audio.src = songData.song;
        audio.load();
      } catch (error) {
        console.error("Error fetching song data:", error);
      }
    };

    fetchSongData();
  }, [selectedSong]);

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      onSongEnd();
    };

    const handleTimeUpdate = () => {
      onTimeUpdate(audio.currentTime, audio.duration);
    };

    const handleLoadedMetadata = () => {
      onTimeUpdate(0, audio.duration);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [onSongEnd, onTimeUpdate]);

  return (
    <audio ref={audioRef} preload="metadata" style={{ display: "none" }} />
  );
}
