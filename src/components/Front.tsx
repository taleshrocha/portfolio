import Typewriter from "./Typewriter";

export default function Front() {
  return (
    <div className="sticky top-0 z-0 pt-24 w-full h-screen bg-sky-700">
      <Typewriter
        className=" text-white text-2xl blinking-cursor whitespace-pre"
        baseText={"Hello world\nI'm Tales Rocha"}
        loop={true}
        ms={100}
        sleepTime={1000}
      />
      <Typewriter
        className=" text-black text-2xl blinking-cursor whitespace-pre"
        baseText={"Hello world\nI'm Tales Rocha"}
        loop={false}
        ms={200}
      />
    </div>
  );
}
