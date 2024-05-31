export default function ThreeColumnGrid() {
  return (
    <>
      <div className="bg-black">
        <h1 className="pl-12 pt-4 text-gray-200 text-2xl">
          Spotlight Collections
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-black">
        <div
          className="relative border-gray-600 rounded-xl p-4  text-white group"
          style={{ height: "256px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAiMA5lQY7EwviaqHa5PfMmx1HogEpvz3-w&s')",
            }}
          ></div>
        </div>
        <div
          className="relative border-gray-600 rounded-xl p-4 rounded text-white group"
          style={{ height: "256px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{
              backgroundImage:
                "url('https://timeandtidewatches.com/wp-content/uploads/2021/10/Sexpile.jpg.webp')",
            }}
          ></div>
        </div>
        <div
          className="relative border-gray-600 rounded-xl p-4 text-white group"
          style={{ height: "256px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{
              backgroundImage:
                "url('https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d20490bbe6db5bf62c7f984d5124b210.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp')",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
