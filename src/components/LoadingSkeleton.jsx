import { PlayCircle } from "lucide-react";
import PlayControlsDark from "./PlayControlsDark";

export default function LoadingSkeleton() {
  return (
    <div className="flex animate-pulse">
      {/* Left container */}
      <div className="flex h-[600px] w-[600px] flex-col items-center justify-center bg-gray-50">
        <div>
          <div className="h-[400px] w-[400px] bg-gray-500"></div>
          <div className="flex flex-col">
            <div className="my-3 h-[30px] w-[200px] bg-gray-500"></div>
            <div className="h-[30px] w-[100px] bg-gray-500"></div>
            <div className="">
              <PlayControlsDark />
            </div>
          </div>
        </div>
      </div>

      {/* Right container */}
      <div className="flex h-[600px] w-[600px] flex-col bg-gray-50 p-4">
        <div className="">
          <p className="mt-3 mb-5 text-xl font-bold">Playlist</p>
          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>

          <div className="my-2">
            <div className="flex justify-between">
              <div className="h-[10px] w-[175px] bg-gray-500"></div>
              <div className="mr-6 h-[10px] w-[30px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="my-2 h-[10px] w-[100px] bg-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
