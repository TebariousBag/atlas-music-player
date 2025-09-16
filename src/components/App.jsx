import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import LoadingSkeleton from "./LoadingSkeleton";

function App() {
  return (
    <div className="bg-french-blue flex h-full min-h-screen flex-col justify-between p-8 dark:bg-gray-800">
      <LoadingSkeleton />
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
