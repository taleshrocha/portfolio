import Typewriter from "./Typewriter";

export default function Front() {
  let circles = [];
  for (let index = 0; index < 10; index++) {
    circles.push(
      <li key={index} className=""></li>
    );
  }
  return (
    <div
      className="
        flex sticky top-0 z-0 items-center justify-center
        bg-gradient-to-t from-cyan-500 to-blue-500 
        w-full h-screen pt-24 
      "
    >
      <ul className="absolute top-0 left-0 w-full h-full circles">{circles}</ul>
      <p
        className="
          z-10 text-center text-white whitespace-pre font-semibold
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
