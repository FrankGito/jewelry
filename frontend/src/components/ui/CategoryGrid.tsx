export default function CategoryGrid({ title }) {
  return (
    <>
      <div className="bg-black">
        <h1 className="pl-12 pt-4 text-gray-200 text-2xl">{title}</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-black">
        <div
          className="relative border-gray-600 rounded-xl p-4 rounded text-white group"
          style={{ height: "256px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{
              backgroundImage: "url('https://i.ibb.co/RhWP39x/Background.png')",
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
              backgroundImage: "url('https://i.ibb.co/RhWP39x/Background.png')",
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
              backgroundImage: "url('https://i.ibb.co/RhWP39x/Background.png')",
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
              backgroundImage: "url('https://i.ibb.co/RhWP39x/Background.png')",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
