import Typewriter from "./Typewriter";

export default function About() {
  const funFacts = [
    "I have lactose intolerance.",
    "I'm reading Game of Thrones.",
    "I'm doing collage.",
    "I'm Brazilian.",
  ];
  return (
    <div
      className="flex items-center flex-col md:flex-row 
      z-10 relative h-full bg-gray-900 text-white"
    >
      <img
        className="rounded-full w-52 mt-8 border-4 border-sky-700"
        src="https://avatars.githubusercontent.com/u/61332391?v=4"
        alt=""
      />
      <div className="">
        <h1 className="font-bold text-2xl text-white text-center">Hello, there 👋</h1>
        <p className="text-gray-300">
          I'm Tales Rocha, a passionate programer actually living in Brazil.
          I study programing since 2020 and I'm interested in all about Front 
          and Back-end web development. I'm also an undergraduate in IT at IMD.
        </p>
        <h1 className="font-semibold text-xl">
          {"Fun fact: "}
          <Typewriter
            className="blinking-cursor text-purple-400 !font-bold"
            baseTexts={funFacts}
            loop={true}
            typeSpeed={75}
            deleteSpeed={25}
            startSleepTime={100}
            endSleepTime={1500}
          />
        </h1>
      </div>
    </div>
  );
}
