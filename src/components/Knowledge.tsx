import {SiNextdotjs, SiReact, SiSpring, SiTailwindcss} from "react-icons/si"
import TechBanner from "./TechBanner"

export default function Knowledge() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      z-10 relative h-full bg-gray-900 mt-6 py-10 px-5"
    >
      <TechBanner 
        name="Next.js"
        href="https://nextjs.org/"
      >
        <SiNextdotjs 
          className="h-14 w-14 sm:h-28 sm:w-28"
          size={100}/>
      </TechBanner>

      <TechBanner name="React">
        <SiReact 
          className="h-14 w-14 sm:h-28 sm:w-28"
          size={100}/>
      </TechBanner>

      <TechBanner name="TailwindCSS">
        <SiTailwindcss 
          className="h-14 w-14 sm:h-28 sm:w-28"
          size={100}/>
      </TechBanner>

      <TechBanner name="Spring">
        <SiSpring 
          className="h-14 w-14 sm:h-28 sm:w-28"
          size={100}/>
      </TechBanner>
    </div>
  );
}
