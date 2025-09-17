import placeholderImage from "../assets/placeholder.svg";
import { CoverArtProps } from "../types";

export default function CoverArt({ selectedSong }: CoverArtProps) {
  return (
    <div className="w-full">
      <img
        src={selectedSong?.cover || placeholderImage}
        className="border-aero rounded-lg border-4 dark:border-gray-500 dark:bg-gray-600"
      />
    </div>
  );
}
