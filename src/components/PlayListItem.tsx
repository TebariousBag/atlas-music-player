import { PlaylistItemProps } from "../types";

export default function PlayListItem({
  title,
  artist,
  duration,
}: PlaylistItemProps) {
  return (
    <div className="hover:bg-picton-blue flex cursor-pointer items-center justify-between rounded-lg p-2 dark:hover:bg-gray-900">
      <div>
        <p className="text-french-blue font-medium dark:text-gray-300">
          {title || "Song not selected"}
        </p>
        <p className="text-sm text-slate-500 dark:text-gray-400">
          {artist || "No artist selected"}
        </p>
      </div>
      <div>
        <p className="text-sm text-slate-500">{duration}</p>
      </div>
    </div>
  );
}
