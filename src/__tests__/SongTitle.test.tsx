import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SongTitle from "../components/SongTitle";
import { Song } from "../types";

describe("SongTitle", () => {
  it("renders with placeholder text when no song is selected", () => {
    const { container } = render(<SongTitle selectedSong={null} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with placeholder text when song is undefined", () => {
    const { container } = render(<SongTitle selectedSong={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with song title and artist", () => {
    const song: Song = {
      id: "1",
      title: "Test Song",
      artist: "Test Artist",
      genre: "Test Genre",
      duration: 180,
      cover: "https://google.com/cover.jpg",
      song: "test-song.mp3",
    };

    const { container } = render(<SongTitle selectedSong={song} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with long title and artist", () => {
    const longSong: Song = {
      id: "2",
      title:
        "This is a very long song title that might wrap to multiple lines and test the layout",
      artist:
        "This is a very long artist name that might also wrap and test the layout",
      genre: "Test Genre",
      duration: 300,
      cover: "https://google.com/cover.jpg",
      song: "test-song.mp3",
    };

    const { container } = render(<SongTitle selectedSong={longSong} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with empty title and artist", () => {
    const emptySong: Song = {
      id: "3",
      title: "",
      artist: "",
      genre: "Test Genre",
      duration: 180,
      cover: "https://google.com/cover.jpg",
      song: "test-song.mp3",
    };

    const { container } = render(<SongTitle selectedSong={emptySong} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with special characters in title and artist", () => {
    const specialSong: Song = {
      id: "4",
      title: 'Song with "quotes" & symbols!',
      artist: "Artist with émojis 🎵 & symbols",
      genre: "Test Genre",
      duration: 180,
      cover: "https://google.com/cover.jpg",
      song: "test-song.mp3",
    };

    const { container } = render(<SongTitle selectedSong={specialSong} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
