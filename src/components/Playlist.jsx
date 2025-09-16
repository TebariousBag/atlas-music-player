import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="p-2">
      <div>
        <p>Playlist</p>
      </div>
      <div>
        <PlayListItem />
      </div>
    </div>
  );
}
