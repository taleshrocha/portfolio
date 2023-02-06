interface TechBannerProps {
  children: any;
  name: string;
  link: string
}
export default function TechBanner({ children, name, link }: TechBannerProps) {
  return (
    <a className="
        flex flex-col items-center justify-end
        bg-gray-800 text-gray-300 rounded-lg 
        transition-transform ease-in hover:scale-105 
        h-40 w-40 
        md:h-64 md:w-44
      "
      href={link}
    >
      {children}
      <p className="text-sky-400 font-bold text-lg md:text-2xl my-4 md:my-8">{name}</p>
    </a>
  )
}
