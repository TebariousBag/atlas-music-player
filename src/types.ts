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
  onChangeSpeed: () => void;
  ongoBack: () => void;
  ongoForward: () => void;
}
