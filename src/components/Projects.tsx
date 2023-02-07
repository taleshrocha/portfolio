import MenuCarousel, { MenuCarouselItem } from "./MenuCarousel";
import moveitImg from "@/assets/moveit.png";
import instaImg from "@/assets/instagram.png";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="Projects" className="section !flex-col">
      <div className="section-div">
        <h1 className="section-title">My work</h1>
        <p className="section-content">
          I've been working hard on many personal projects over the last few
          years and these are some that I'm proud of.
        </p>
      </div>

      <MenuCarousel
        descriptions={[
          {
            name: "MoveIt",
            desc: "A pomodoro app",
          },
          {
            name: "Instagram clone",
            desc: "An Instagram clone",
          },
        ]}
      >
        <MenuCarouselItem time={2000}>
          <Image className="rounded-xl" src={moveitImg} alt="" width={800} />
        </MenuCarouselItem>
        <MenuCarouselItem>
          <Image className="rounded-xl" src={instaImg} alt="" width={800} />
        </MenuCarouselItem>
      </MenuCarousel>
    </section>
  );
}
