import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import VolumeControls from "../components/VolumeControls";

describe("VolumeControls", () => {
  const mockOnVolumeChange = () => {};

  it("renders with minimum volume (0)", () => {
    const { container } = render(
      <VolumeControls volume={0} onVolumeChange={mockOnVolumeChange} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with maximum volume (100)", () => {
    const { container } = render(
      <VolumeControls volume={100} onVolumeChange={mockOnVolumeChange} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with medium volume (50)", () => {
    const { container } = render(
      <VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with low volume (25)", () => {
    const { container } = render(
      <VolumeControls volume={25} onVolumeChange={mockOnVolumeChange} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with high volume (75)", () => {
    const { container } = render(
      <VolumeControls volume={75} onVolumeChange={mockOnVolumeChange} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom volume (33)", () => {
    const { container } = render(
      <VolumeControls volume={33} onVolumeChange={mockOnVolumeChange} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
