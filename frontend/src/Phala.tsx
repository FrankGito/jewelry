import { useState } from "react";
import Penguin from "./components/canvas/Penguin";
import Navigation from "./components/ui/Navigation";

export default function Phala() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  async function create() {
    setIsLoading(true);
    const response = await fetch(
      "https://agents.phala.network/ipfs/QmZrPRvmC4FqLfmjqRnWi2XsPJq1TmtNpQd5zs3qYXg6rH/0",
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const text = await response.text();
    console.log(text);
    setText(text);
    setIsLoading(false);
  }

  return (
    <>
      <div>
        <Navigation />
        <Penguin />
        <div className="absolute inset-x-0 top-0 flex items-center justify-center pt-24 ">
          <div className="grid grid-cols-3 gap-4 p-4">
            <button
              onClick={async () => await create()}
              className="border border-black text-black px-4 py-2 rounded hover:bg-gray-800/20 transition ease-in-out"
            >
              Create new
            </button>
            <p className="pl-6 pr-6 pt-1 justify-center text-center pb-1 text-gray-500 border border-gray-800 bg-gray-800/20 ">
              {isLoading.toString()}
            </p>
            <p className="pl-6 pr-6 pt-1 justify-center text-center pb-1 text-gray-500 border border-gray-800 bg-gray-800/20 ">
              {text || "Not created yet, press create"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
