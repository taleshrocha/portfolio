import Link from "next/link";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { CgMenuHotdog } from "react-icons/cg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`
      flex fixed top-0 z-50 items-center justify-between
      bg-black/50 backdrop-blur-lg text-white
      transition-all duration-300 ease-in-out
      w-screen flex-col
      ${isOpen && "h-20"}
      h-8 text-sm px-4 
      md:h-12 md:text-base 
      `}
    >
      <div className="inline-flex justify-between items-center w-screen md:h-full px-2">
        <p>
          TALES <span className="font-bold">ROCHA</span>
        </p>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CgMenuHotdog size={25} />
        </button>
      </div>

      <div
        className={`
          ${!isOpen && "bottom-24"} absolute flex flex-col justify-center items-center 
          transition-all duration-1000
          bottom-0 md:inset-y-0 md:right-4
          md:flex-row space-x-4 md:space-x-8 space-y-2 md:space-y-0 md:translate-y-0
          `}
      >
        <div className="inline-flex space-x-2 md:space-x-4">
          <Link className="hover:underline" href="#About">
            About
          </Link>
          <Link className="hover:underline" href="#Knowledge">
            Knowledge
          </Link>
          <Link className="hover:underline" href="#Projects">
            Projects
          </Link>
          <Link className="hover:underline" href="#Further">
            Further
          </Link>
        </div>
        <div className="inline-flex space-x-2 md:space-x-4">
          <a href="https://github.com/taleshrocha" target="_blank">
            <AiFillGithub
              className="h-[75%] md:h-full"
              size={25} />
          </a>
          <a
            href="mailto:taleshrochaz@gmail.com?subject=Let's talk!"
            target="_blank"
          >
            <MdEmail
              className="h-[75%] md:h-full"
              size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
