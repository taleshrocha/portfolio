import TechBanner from "./TechBanner";
import { languages, tools } from "@/assets/knowledge";
import Carousel, { CarrouselItem } from "./Carousel";
import Section from "./Section";

export default function Knowledge() {
  return (
    <Section>
      <h1 className="text-white text-xl">
        I'm always pushing to learn new things and improve my 
        development abilities. <br/>
        Here are some of the technologies that I'm currently able work with.
      </h1>
      {/*Sliders*/}
      <div>
      {/* Languages */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white font-bold text-xl">Languages</h1>
        <Carousel
          time={1500}
        >
          {languages.map((language) => (
            <CarrouselItem
                key={language.name}
              >
              <TechBanner
                key={language.name}
                name={language.name}
                link={language.link}
              >
                <language.Icon
                  className="h-14 w-14 sm:h-28 sm:w-28"
                  size={100}
                />
              </TechBanner>
            </CarrouselItem>
          ))}
        </Carousel>
      </div>

      {/* Tools */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white font-bold text-xl">Tools</h1>
        <Carousel
          time={2000}
        >
          {tools.map((tool) => (
            <CarrouselItem
                key={tool.name}
              >
              <TechBanner key={tool.name} name={tool.name} link={tool.link}>
                <tool.Icon className="h-14 w-14 sm:h-28 sm:w-28" size={100} />
              </TechBanner>
            </CarrouselItem>
          ))}
        </Carousel>
      </div>
        
      </div>
    </Section>
  );
}
