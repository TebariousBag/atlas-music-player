import { render, screen, waitFor } from "@testing-library/react";
import {
  describe,
  it,
  expect,
  vi,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import "@testing-library/jest-dom";
import MusicPlayer from "../components/MusicPlayer";
import { server } from "./mocks";

vi.mock("../components/AudioPlayer", () => ({
  default: () => <div data-testid="audio-player">Audio Player</div>,
}));

describe("MusicPlayer", () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "warn" });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("should render loading skeleton initially", () => {
    render(<MusicPlayer />);
    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });

  it("should fetch and display playlist data using MSW", async () => {
    render(<MusicPlayer />);
    await waitFor(
      () => {
        expect(
          screen.queryByTestId("loading-skeleton"),
        ).not.toBeInTheDocument();
      },
      { timeout: 10000 },
    );

    expect(screen.getByText("Test Song 1")).toBeInTheDocument();
    expect(screen.getByText("Test Artist 1")).toBeInTheDocument();
    expect(screen.getByText("Test Song 2")).toBeInTheDocument();
    expect(screen.getByText("Test Artist 2")).toBeInTheDocument();
    expect(screen.getByText("Test Song 3")).toBeInTheDocument();
    expect(screen.getByText("Test Artist 3")).toBeInTheDocument();
  });

  it("should set first song as selected by default", async () => {
    render(<MusicPlayer />);
    await waitFor(
      () => {
        expect(
          screen.queryByTestId("loading-skeleton"),
        ).not.toBeInTheDocument();
      },
      { timeout: 10000 },
    );

    expect(screen.getByText("Test Song 1")).toBeInTheDocument();
  });
});
