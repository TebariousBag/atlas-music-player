import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8">
      <div className="flex">
        <div className="w-full">
          <CurrentlyPlaying />
        </div>
        <div className="w-full">
          <Playlist />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
