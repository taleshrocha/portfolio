import Typewriter from "./Typewriter";

export default function Front() {
  const texts = [
    "Tales Rocha.",
    "a programer.",
    "a humam.",
    "Tales Rocha.",
    "a developer.",
  ];
  return (
    <div
      className="flex sticky top-0 z-0 pt-24 w-full h-screen bg-sky-700
      items-center justify-center"
    >
      <p className="text-center text-white text-5xl md:text-7xl whitespace-pre font-semibold">
        {"Hello world!\nI'm "}
        <Typewriter
          className="blinking-cursor text-purple-400 !font-bold"
          baseTexts={texts}
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
