import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="h-full">
      <div>
        <p className="mb-5 text-2xl font-bold">Playlist</p>
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
