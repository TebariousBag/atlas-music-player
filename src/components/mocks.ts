import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { PlaylistSong, Song } from "../types";

// mock playlist data to replace api data
const mockPlaylist: PlaylistSong[] = [
  {
    id: "song1",
    title: "Test Song 1",
    artist: "Test Artist 1",
    genre: "Pop",
    duration: 180,
  },
  {
    id: "song2",
    title: "Test Song 2",
    artist: "Test Artist 2",
    genre: "Rock",
    duration: 240,
  },
  {
    id: "song3",
    title: "Test Song 3",
    artist: "Test Artist 3",
    genre: "Jazz",
    duration: 200,
  },
];

//mock song data
const mockSongs: Record<string, Song> = {
  song1: {
    id: "song1",
    title: "Test Song 1",
    artist: "Test Artist 1",
    genre: "Pop",
    duration: 180,
    cover: "/api/placeholder/300/300",
    song: "/api/placeholder/audio/song1.mp3",
  },
  song2: {
    id: "song2",
    title: "Test Song 2",
    artist: "Test Artist 2",
    genre: "Rock",
    duration: 240,
    cover: "/api/placeholder/300/300",
    song: "/api/placeholder/audio/song2.mp3",
  },
  song3: {
    id: "song3",
    title: "Test Song 3",
    artist: "Test Artist 3",
    genre: "Jazz",
    duration: 200,
    cover: "/api/placeholder/300/300",
    song: "/api/placeholder/audio/song3.mp3",
  },
};

// HTTP mock Handlers
export const handlers = [
  // Mock playlist endpoint
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json(mockPlaylist);
  }),

  // mock individual song endpoint
  http.get("/api/v1/songs/:id", ({ params }) => {
    const { id } = params;
    const song = mockSongs[id as string];

    if (!song) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(song);
  }),
];

export const server = setupServer(...handlers);
