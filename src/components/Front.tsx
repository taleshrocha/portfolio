import Typewriter from "./Typewriter";

export default function Front() {
  return (
    <div
      className="
        flex sticky top-0 z-0 items-center justify-center
        bg-gradient-to-r from-cyan-500 to-blue-500 
        w-full h-screen pt-24 
      "
    >
      <p
        className="
          text-center text-white whitespace-pre font-semibold
          text-3xl 
          md:text-7xl 
        "
      >
        {"Hello world!\nI'm "}
        <Typewriter
          className="blinking-cursor text-purple-400 !font-bold break-all"
          baseTexts={["Tales Rocha.", "a programer.", "a developer."]}
          loop={true}
          typeSpeed={100}
          deleteSpeed={100}
          startSleepTime={1000}
          endSleepTime={1000}
        />
      </p>
    </div>
  );
}
