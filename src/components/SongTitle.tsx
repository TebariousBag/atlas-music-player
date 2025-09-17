import { SongTitleProps } from "../types";

export default function SongTitle({ selectedSong }: SongTitleProps) {
  return (
    <div className="border-aero my-6 flex flex-col rounded-xl border-4 bg-blue-200 p-4 text-left dark:border-gray-500 dark:bg-gray-600">
      <h2 className="text-french-blue my-2 text-4xl font-bold dark:text-gray-300">
        {selectedSong?.title || "Song not selected"}
      </h2>
      <p className="my-2 text-xl text-slate-500 dark:text-gray-400">
        {selectedSong?.artist || "No artist selected"}
      </p>
    </div>
  );
}
