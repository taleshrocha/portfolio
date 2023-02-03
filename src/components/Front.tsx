import Typewriter from "./Typewriter";

export default function Front() {
  const texts = ["Tales Rocha.", "a programer."]
  return (
    <div className="flex sticky top-0 z-0 pt-24 w-full h-screen bg-sky-700
      items-center justify-center">
      <p
        className="text-center text-white text-2xl whitespace-pre">
        {"Hello world!\nI'm "}
        <Typewriter
        className="blinking-cursor text-purple-400"
        baseTexts={texts}
        loop={true}
        typeTime={100}
        sleepTime={1000}
      />
      </p>
    </div>
  );
}
