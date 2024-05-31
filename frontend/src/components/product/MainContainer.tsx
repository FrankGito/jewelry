import { useState } from "react";
import CheckoutContainer from "@/components/ui/CheckoutContainer";

export default function MainContainer() {
  const [customizeText, setCustomizeText] = useState("");
  const [basePrice] = useState(90); // Initial base price is 90 DOT
  const [selectedMaterialPrice, setSelectedMaterialPrice] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState("None");
  const [phase, setPhase] = useState("Craft");
  const [loading, setLoading] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCustomizeChange = (event) => {
    setCustomizeText(event.target.value);
    if (phase !== "Craft") {
      setPhase("Craft");
    }
  };

  const handleMaterialSelect = (material, price) => {
    setSelectedMaterial(material);
    setSelectedMaterialPrice(price);
  };

  const handleCraft = () => {
    setPhase("Mint");
  };

  const handleMint = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("FUNCTIONAL");
      setPhase("NFT");
    }, 2000); // Simulate a loading time of 2 seconds
  };

  const handleNFT = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCheckout(true); // Show checkout component
    }, 2000); // Simulate a loading time of 2 seconds
  };

  const totalPrice = basePrice + selectedMaterialPrice;

  const customizedData = {
    customizeText,
    selectedMaterial,
    totalPrice,
  };

  if (showCheckout) {
    return <CheckoutContainer customizedData={customizedData} />;
  }

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-sm sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://i.ibb.co/LrKMFpC/HookEm.png"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75 h-full w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
          </div>
          <div className="group h-full aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 flex flex-col justify-between">
            <div className="text-white p-4">
              <h1 className="text-2xl font-bold">Project Management Board</h1>
            </div>
            <div className="text-white p-4">
              <h1 className="text-xl font-semibold">{totalPrice} DOT</h1>
            </div>
            {phase === "Craft" && (
              <>
                <div className="text-white p-4">
                  <h2 className="font-semibold">
                    Select Material ({selectedMaterial})
                  </h2>
                  <div className="flex space-x-4">
                    <div
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => handleMaterialSelect("GOLD", 10)}
                    >
                      <img
                        src="https://img.pikbest.com/backgrounds/20191122/golden-gradient-metal-texture-matte-texture-background_2763042.jpg!bw700"
                        alt="Gold texture"
                        className="w-36 h-36 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-300"
                      />
                      <h1 className="mt-2">GOLD</h1>
                      <p className="text-sm mt-1">10 DOT</p>
                    </div>
                    <div
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => handleMaterialSelect("SILVER", 5)}
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/04/77/22/99/360_F_477229935_4ZRTM2OjnSlNHFlNt168hs4mqDrukKAs.jpg"
                        alt="Silver texture"
                        className="w-36 h-36 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-300"
                      />
                      <h1 className="mt-2">SILVER</h1>
                      <p className="text-sm mt-1">5 DOT</p>
                    </div>
                    <div
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => handleMaterialSelect("PLATINUM", 20)}
                    >
                      <img
                        src="https://t3.ftcdn.net/jpg/02/07/13/36/360_F_207133679_tGuezrUoWSoJtNfxXaaK4jSrXpZHNqr6.jpg"
                        alt="Platinum texture"
                        className="w-36 h-36 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-300"
                      />
                      <h1 className="mt-2">PLATINUM</h1>
                      <p className="text-sm mt-1">20 DOT</p>
                    </div>
                  </div>
                </div>
                <div className="text-white p-4">
                  <h2 className="font-semibold">Customize</h2>
                  <textarea
                    className="w-full p-2 rounded bg-gray-800 border border-gray-400 text-pink-500"
                    rows="4"
                    placeholder="Enter customization details here..."
                    value={customizeText}
                    onChange={handleCustomizeChange}
                  />
                </div>
                <div
                  className="text-white p-4 pl-8 pr-8 pt-4 pb-4 bg-blue-500 text-center cursor-pointer"
                  onClick={handleCraft}
                >
                  <p>CRAFT</p>
                </div>
              </>
            )}
            {phase === "Mint" && (
              <div
                className="text-white p-4 pl-8 pr-8 pt-4 pb-4 bg-green-500 text-center cursor-pointer"
                onClick={handleMint}
              >
                <p>{loading ? "Loading..." : "MINT"}</p>
              </div>
            )}
            {phase === "NFT" && (
              <div
                className="text-white p-4 pl-8 pr-8 pt-4 pb-4 bg-red-500 text-center cursor-pointer"
                onClick={handleNFT}
              >
                <p>{loading ? "Processing..." : "NFT"}</p>
              </div>
            )}
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
