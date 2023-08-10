const clsx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function Home() {
  return (
    <main className="flex w-full min-h-screen items-center justify-center">
      <div className="pl-32 flex gap-6 items-end">
        <div className=" w-fit max-w-fit">
          <div
            className="uppercase font-extrabold text-9xl -rotate-180"
            style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
          >
            mewtru
          </div>
        </div>

        <div className="h-ful flex flex-col gap-8">
          <a className="uppercase font-extrabold text-6xl cursor-pointer flex gap-3 items-stretch group">
            <div className="w-2 relative">
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={i}
                  className={clsx(
                    "inset-0 absolute bg-indigo-600 transition duration-500 origin-bottom-left",
                    i === 1 ? "bg-indigo-600/75 group-hover:rotate-[-10deg]" : "",
                    i === 2 ? "bg-indigo-600/50 group-hover:rotate-[-20deg]" : ""
                  )}
                ></div>
              ))}
            </div>
            <span>blog</span>
          </a>
          <a className="uppercase font-extrabold text-6xl cursor-pointer">
            stuff
          </a>
          <a className="uppercase font-extrabold text-6xl cursor-pointer">
            games
          </a>
          <a className="uppercase font-extrabold text-6xl cursor-pointer">
            projects
          </a>
        </div>
      </div>
    </main>
  );
}
