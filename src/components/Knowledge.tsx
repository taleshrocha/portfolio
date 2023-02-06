import TechBanner from "./TechBanner";
import { languages, tools } from "@/assets/knowledge";
import Carousel, { CarrouselItem } from "./Carousel";

export default function Knowledge() {
  return (
    <section className="section !flex-col">
      <div className="section-div">
        <h1 className="section-title">How can I help?</h1>
        <p className="section-content">
          I'm always pushing to learn new things and improve my
          current abilities. Here, are some of the technologies that I'm
          currently able to work with.
        </p>
      </div>

      {/*Sliders*/}
      <div className="section-div md:flex-row md:space-x-16">
        {/* Languages */}
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-white font-bold text-xl">Languages</h1>
          <Carousel
            className="w-48"
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
                    className="h-14 w-14 md:h-28 md:w-28"
                    size={100}
                  />
                </TechBanner>
              </CarrouselItem>
            ))}
          </Carousel>
        </div>

        {/* Tools */}
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-white font-bold text-xl">Tools</h1>
          <Carousel
            className="w-48"
            time={2750}
          >
            {tools.map((tool) => (
              <CarrouselItem
                key={tool.name}
              >
                <TechBanner key={tool.name} name={tool.name} link={tool.link}>
                  <tool.Icon className="h-14 w-14 md:h-28 md:w-28" size={100} />
                </TechBanner>
              </CarrouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
