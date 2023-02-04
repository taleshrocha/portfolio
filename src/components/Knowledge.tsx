import TechBanner from "./TechBanner";
import {languages, tools} from "@/assets/knowledge"

export default function Knowledge() {
  return (
    <div
      className="flex flex-col justify-between items-center
      z-10 relative h-full bg-gray-900 mt-6 py-10 px-5"
    >

      {/* Languages */}
      <h1 className="text-white font-bold text-xl">Languages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      w-3/4 h-72 overflow-y-scroll">
        {languages.map((language) => (
          <TechBanner
            key={language.name}
            name={language.name}
            link={language.link}
          >
            <language.Icon className="h-14 w-14 sm:h-28 sm:w-28" size={100} />
          </TechBanner>
        ))}
      </div>

      {/* Tools */}
      <h1 className="text-white font-bold text-xl">Tools</h1>
      <div className="flex justify-between items-center w-3/4">
        {tools.map((tool) => (
          <TechBanner
            key={tool.name}
            name={tool.name}
            link={tool.link}
          >
            <tool.Icon className="h-14 w-14 sm:h-28 sm:w-28" size={100} />
          </TechBanner>
        ))}
      </div>

    </div>
  );
}
