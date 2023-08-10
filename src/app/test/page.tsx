export default function Test() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="group relative cursor-pointer border border-gray-700 p-12 rounded-full transition ease-in-out duration-500 hover:border-gray-100 hover:scale-110">
        <div className="uppercase text-6xl flex items-center relative">
          {"mewtru".split("").map((letter, i) => (
            <div
              key={i}
              className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              {letter}
            </div>
          ))}
          <div className="uppercase text-6xl absolute bottom-0 left-0 flex items-center">
            {"mewtru".split("").map((letter, i) => (
              <div
                key={i}
                className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
