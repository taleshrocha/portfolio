import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <div
      className="flex fixed top-0 z-50 bg-black/50 w-full h-10 md:h-14 
        backdrop-blur-lg items-center justify-between px-16 
      text-white text-sm md:text-lg"
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
