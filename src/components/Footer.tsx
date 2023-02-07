import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  let circles = [];
  for (let index = 0; index < 10; index++) {
    circles.push(
      <li key={index} className=""></li>
    );
  }
  return (
    <div
      className="flex relative flex-col justify-center items-center h-[50vh]
        bg-gradient-to-t from-[#060c1c] to-[#091129] overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-2/3
        text-lg text-white  z-10 border-y p-8 space-y-4 sm:space-y-0">
        <Link className="hover:underline"href="#About">About</Link>
        <Link className="hover:underline" href="#Knowledge">Knowledge</Link>
        <Link className="hover:underline" href="#Projects">Projects</Link>
        <Link className="hover:underline" href="#Further">Further</Link>
      </div>

      <div className="flex justify-center items-center mt-12 w-2/3
        text-white text-lg z-10 space-x-4">
        <a 
          href="https://github.com/taleshrocha" 
          target="_blank"
        >
          <AiFillGithub size={25} />
        </a>
        <a 
          href="mailto:taleshrochaz@gmail.com?subject=Let's talk!" 
          target="_blank"
        >
          <MdEmail size={25} />
        </a>
      </div>
      <ul className="bottom-0 w-full circles z-0">{circles}</ul>
    </div>
  );
}
