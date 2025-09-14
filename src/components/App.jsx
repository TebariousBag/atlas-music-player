import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className=" flex flex-col justify-between p-8 min-h-screen h-full">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
