import { PlayCircle } from "lucide-react";
import PlayControlsDark from "./PlayControlsDark";

export default function LoadingSkeleton() {
  return (
    <div className="flex">
      {/* Left container */}
      <div className="flex h-[600px] w-[600px] flex-col items-center justify-center bg-gray-50">
        <div>
          <div className="h-[400px] w-[400px] bg-gray-500"></div>
          <div className="flex flex-col">
            <div className="my-2 h-[50px] w-[200px] border border-white bg-gray-500"></div>
            <div className="h-[50px] w-[100px] bg-gray-500"></div>
            <div className="">
              <PlayControlsDark />
            </div>
          </div>
        </div>
      </div>

      {/* Right container */}
      <div className="h-[600px] w-[600px] bg-gray-50"></div>
    </div>
  );
}
