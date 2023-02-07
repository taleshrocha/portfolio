import Link from "next/link";
import Typewriter from "./Typewriter";

export default function About() {
  return (
    <section id="About" className="section pt-24">

      <img
        className="rounded-full w-44 md:w-52 border-2 border-sky-700"
        src="https://avatars.githubusercontent.com/u/61332391?v=4"
        alt=""
      />
      <div className="section-div">
        <h1 className="section-title">
          Hello, there 👋
        </h1>
        <p className="section-content">
          I'm Tales Rocha, a passionate programer actually living in Brazil. I
          study programing since 2020 and I'm interested in all about Front and
          Back-end web development. I'm also an undergraduate in IT at{" "}
          <Link
            className="underline text-blue-400 hover:text-purple-400"
            href="https://www.metropoledigital.ufrn.br/portal/institucional/sobreimd"
            target="_blank"
          >
            IMD
          </Link>
          .
        </p>
        {/*Fun Fact*/}
        <div>
          <div
            className="flex flex-col items-center justify-center 
          mt-6 border-[1.5px] border-white rounded-full relative w-44 md:w-52"
          >
            <h1 className="mx-4 -mt-4 bg-gray-900 w-max">
              Fun fact
            </h1>
            <Typewriter
              className="blinking-cursor text-sm md:text-base text-purple-400 !font-bold mb-1 md:mb-2"
              baseTexts={[
                "I'm lactose intolerant",
                "I'm reading GOT",
                "I'm doing college",
                "I'm Brazilian",
              ]}
              loop={true}
              typeSpeed={75}
              deleteSpeed={25}
              startSleepTime={100}
              endSleepTime={1500}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
