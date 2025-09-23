// api response types from provided api
export interface PlaylistSong {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

// song extends from playlist giving the cover art and link to song
export interface Song extends PlaylistSong {
  cover: string;
  song: string;
}

// optional, skipping for now
export interface Lyrics {
  lyrics: string;
}

// compnent prop types
export interface CoverArtProps {
  selectedSong?: Song | null;
}

export interface SongTitleProps {
  selectedSong?: Song | null;
}

export interface PlayControlsProps {
  playSpeed: number;
  canGoBack: boolean;
  canGoForward: boolean;
  isShuffleOn: boolean;
  isPlaying: boolean;
  onChangeSpeed: () => void;
  ongoBack: () => void;
  ongoForward: () => void;
  onShuffleToggle: () => void;
  onPlayPause: () => void;
}

export interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export interface PlaylistItemProps {
  title: string;
  artist: string;
  duration: number;
  song: PlaylistSong;
  isSelected: boolean;
  onClick: () => void;
}

export interface PlaylistProps {
  songs: PlaylistSong[];
  selectedSongId: string | null;
  onSongSelect: (songId: string) => void;
}

export interface MusicPlayerProps {}

export interface AudioPlayerProps {
  selectedSong: PlaylistSong | null;
  isPlaying: boolean;
  volume: number;
  playSpeed: number;
  onSongEnd: () => void;
  onTimeUpdate: (currentTime: number, duration: number) => void;
}
