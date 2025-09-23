import { PlaylistItemProps } from "../types";

export default function PlayListItem({
  song,
  isSelected,
  onClick,
}: PlaylistItemProps) {
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={`flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors ${
        isSelected 
          ? "bg-picton-blue dark:bg-gray-700" 
          : "hover:bg-picton-blue dark:hover:bg-gray-900"
      }`}
      onClick={onClick}
    >
      <div>
        <p className="text-french-blue font-medium dark:text-gray-300">
          {song.title}
        </p>
        <p className="text-sm text-slate-500 dark:text-gray-400">
          {song.artist}
        </p>
      </div>
      <div>
        <p className="text-sm text-slate-500">{formatDuration(song.duration)}</p>
      </div>
    </div>
  );
}
