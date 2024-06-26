import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const NAME = "Frank Dierolf";

  return (
    <div className="bg-black">
      <header className="relative inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Babes</span>
              <img
                className="h-8 w-auto"
                src="https://i.ibb.co/yPtgvfN/Babes.png"
                alt=""
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-600 text-white bg-black rounded-md px-4 py-2"
            />
            <div className="border border-gray-600 text-white rounded-sm pl-8 pr-8 py-2">
              {NAME}
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>
      <style jsx>{`
        header::after {
          content: "";
          display: block;
          width: calc(100% - 60px);
          height: 1px;
          background-color: #505050; /* Tailwind CSS red-300 */
          position: absolute;
          bottom: 0;
          left: 30px;
          right: 30px;
        }
      `}</style>
    </div>
  );
}
