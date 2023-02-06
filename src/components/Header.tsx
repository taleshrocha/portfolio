import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <div
      className="
      flex fixed top-0 z-50 items-center justify-between
      bg-black/50 backdrop-blur-lg text-white
      w-full 
      h-8 text-sm px-4 
      md:h-12 md:text-base
      "
    >
      <p>
        TALES <span className="font-bold">ROCHA</span>
      </p>
      <div className="hidden md:inline-flex">
        <AiFillGithub size={25} />
      </div>
    </div>
  );
}
