import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CoverArt from "../components/CoverArt";
import { Song } from "../types";

describe("CoverArt", () => {
  it("renders with placeholder when no song is selected", () => {
    const { container } = render(<CoverArt selectedSong={null} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with placeholder when song has no cover", () => {
    const songWithoutCover: Song = {
      id: "1",
      title: "Test Song",
      artist: "Test Artist",
      genre: "Test Genre",
      duration: 180,
      cover: "",
      song: "test-song.mp3",
    };

    const { container } = render(<CoverArt selectedSong={songWithoutCover} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with song cover when song has cover", () => {
    const songWithCover: Song = {
      id: "2",
      title: "Test Song",
      artist: "Test Artist",
      genre: "Test Genre",
      duration: 180,
      cover: "https://example.com/cover.jpg",
      song: "test-song.mp3",
    };

    const { container } = render(<CoverArt selectedSong={songWithCover} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with undefined song", () => {
    const { container } = render(<CoverArt selectedSong={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
