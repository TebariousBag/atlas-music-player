import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="border-aero h-full rounded border-4 bg-blue-200 p-4 dark:border-gray-500 dark:bg-gray-600">
      <div>
        <p className="text-french-blue mb-5 text-2xl font-bold dark:text-gray-300">
          Playlist
        </p>
      </div>
      <div className="space-y-2">
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
      </div>
    </div>
  );
}
