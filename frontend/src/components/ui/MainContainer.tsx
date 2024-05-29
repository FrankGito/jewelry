import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function MainContainer() {
  return (
    <div className="relative isolate overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://i.ibb.co/mv7t9GL/Background.png"
          alt="App screenshot"
          className="h-full w-full object-cover opacity-10"
        />
      </div>
      <div className="relative px-6 sm:pb-32 lg:flex lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                FEATURED
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Collection v1.0</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-6xl">
            Karate Combat Collection
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            This project management dashboard template is designed for project
            managers
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md border border-blue-400 hover:border-blue-500 bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/30"
            >
              Customize and Buy
            </a>
          </div>
        </div>
      </div>{" "}
      <style jsx>{`
        div::after {
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
