import Carousel, { CarrouselItem } from "./Carousel";

export default function Projects() {
  return (
    <section className="section !flex-col">
      <div className="section-div">
        <h1 className="section-title">How can I help?</h1>
        <p className="section-content">
          I'm always pushing to learn new things and improve my current
          abilities. Here, are some of the technologies that I'm currently able
          to work with.
        </p>
      </div>

      {/* Languages */}
      <Carousel className="w-48" time={1500}>
        <CarrouselItem>Hello</CarrouselItem>
        <CarrouselItem>Hello1</CarrouselItem>
        <CarrouselItem>Hello2</CarrouselItem>
        <CarrouselItem>Hello3</CarrouselItem>
      </Carousel>
    </section>
  );
}
