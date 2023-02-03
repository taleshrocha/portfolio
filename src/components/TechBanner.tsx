interface TechBannerProps {
  children: any;
  name: string;
}
export default function TechBanner({ children, name, ...props }: TechBannerProps) {
  return (
    <a className="flex flex-col bg-gray-800 h-40 w-40 sm:h-64 sm:w-44 rounded-lg 
       items-center justify-end transition-all ease-in hover:scale-105 text-gray-300 mb-5"
      {...props}
    >
      {children}
      <p className="text-sky-400 font-bold text-lg sm:text-2xl my-4 sm:my-8">{name}</p>
    </a>
  )
}
