import MenuCarousel, { MenuCarouselItem } from "./MenuCarousel";
import moveitImg from "@/assets/moveit.png"
import instaImg from "@/assets/instagram.png"
import Image from "next/image";

export default function Projects() {
  return (
    <section className="section !flex-col">
      <div className="section-div">
        <h1 className="section-title">My work</h1> <p className="section-content"> Here a some of my projects.
        </p>
      </div>

      <MenuCarousel
        descriptions={[
          {
            name: "MoveIt",
            desc: "A pomodoro tomato like aplicationexclamationBut, with physical challenges for the user 💪🏼 ",
          },
          {
            name: "Instagram clone",
            desc: "An Instagram camera clone app in which is possible to login, add posts, comments speech_balloon and likes heart ",
          }
        ]}
      >
        <MenuCarouselItem
          time={2000}
        >
          <Image
            src={moveitImg}
            alt=""
            width={800}
          />
        </MenuCarouselItem>
        <MenuCarouselItem>
          <Image
            src={instaImg}
            alt=""
            width={800}
          />
        </MenuCarouselItem>
      </MenuCarousel>
    </section>
  );
}
