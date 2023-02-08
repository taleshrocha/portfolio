interface TechBannerProps {
  children: any;
  name: string;
}
export default function TechBanner({ children, name }: TechBannerProps) {
  return (
    <a className="
        flex flex-col items-center justify-end
        bg-gray-700 text-gray-300 rounded-lg 
        h-40 w-40 
        md:h-64 md:w-44
      "
    >
      {children}
      <p className="text-blue-400 font-bold text-lg md:text-2xl my-4 md:my-8">{name}</p>
    </a>
  )
}
