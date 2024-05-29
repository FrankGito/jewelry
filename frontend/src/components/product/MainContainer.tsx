import React, { useState } from "react";

export default function MainContainer() {
  const [customizeText, setCustomizeText] = useState("");
  const [basePrice] = useState(90); // Initial base price is 90 DOT
  const [selectedMaterialPrice, setSelectedMaterialPrice] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState("None");

  const handleCustomizeChange = (event) => {
    setCustomizeText(event.target.value);
  };

  const handleMaterialSelect = (material, price) => {
    setSelectedMaterial(material);
    setSelectedMaterialPrice(price);
  };

  const totalPrice = basePrice + selectedMaterialPrice;

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-sm sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75 h-full w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
          </div>
          {/* Item information */}
          <div className="group h-full aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 flex flex-col justify-between">
            <div className="text-white p-4">
              <h1 className="text-2xl font-bold">Project Management Board</h1>
            </div>
            <div className="text-white p-4">
              <h1 className="text-xl font-semibold">{totalPrice} DOT</h1>
            </div>
            <div className="text-white p-4">
              <h2 className="font-semibold">
                Select Material ({selectedMaterial})
              </h2>
              <div className="flex space-x-4">
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleMaterialSelect("GOLD", 10)}
                >
                  <div className="bg-gray-500 w-36 h-36 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-300"></div>
                  <h1 className="mt-2">GOLD</h1>
                  <p className="text-sm mt-1">10 DOT</p>
                </div>
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleMaterialSelect("SILVER", 5)}
                >
                  <div className="bg-gray-500 w-36 h-36 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-300"></div>
                  <h1 className="mt-2">SILVER</h1>
                  <p className="text-sm mt-1">5 DOT</p>
                </div>
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleMaterialSelect("PLATINUM", 20)}
                >
                  <div className="bg-gray-500 w-36 h-36 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-300"></div>
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
            <div className="text-white p-4">
              <h1>Buy</h1>
            </div>
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
