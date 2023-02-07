import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft as ArrowLeft,
  AiOutlineArrowRight as ArrowRight,
} from "react-icons/ai";

export function MenuCarouselItem({ children, width, height }: any) {
  return (
    <div
      className="inline-flex items-center justify-center transition-transform 
      hover:scale-105 ease-in-out duration-300 p-6"
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
}

export default function MenuCarousel({
  children,
  time,
  className,
  descriptions,
}: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  function updateIndex(newIndex: number) {
    setActiveIndex(mod(newIndex, React.Children.count(children)));
  }

  //useEffect(() => {
  //  const interval = setInterval(() => {
  //    if (!isPaused) updateIndex(activeIndex + 1);
  //  }, time);
  //  return () => {
  //    if (interval) clearInterval(interval);
  //  };
  //});

  return (
    <div
      className="
        flex flex-col xl:flex-row relative items-center justify-center overflow-hidden w-[800px] h-[440px]
        md:w-full md:h-full
      "
    >
      {/*Mobile*/}
      <button
        className="absolute bottom-8 left-72 z-10 md:hidden
        text-gray-800 hover:bg-gray-600/50 rounded-full
        p-4 transition-colors duration-300 ease-out "
        onClick={() => updateIndex(activeIndex + 1)}
      >
        <ArrowLeft size={30} />
      </button>
      <button
        className="absolute bottom-8 right-72 z-10 md:hidden
        text-gray-800 hover:bg-gray-600/50 rounded-full
        p-4 transition-colors duration-300 ease-out "
        onClick={() => updateIndex(activeIndex + 1)}
      >
        <ArrowRight size={30} />
      </button>

      {/*Upper/Left side*/}
      <div
        className="hidden md:flex flex-col justify-center items-center 
        h-full w-full z-10 mb-2 xl:bg-gray-900 xl:h-[440px]"
      >
        {descriptions.map((description: any, index: any) => {
          return (
            <button
              className={`flex flex-col justify-center items-start w-full 
                          transition-all duration-500 rounded-md p-2
                          ${index === activeIndex && "bg-gray-800 hover:bg-transparent"}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              <h1 className="text-white font-bold">{index === activeIndex? "▼" : "▶"} {description.name}</h1>
              <p
                className={`ml-2 text-xm text-gray-200 
                            ${index !== activeIndex && "hidden"}`}>
                {description.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/*Right side*/}
      <div
        className="whitespace-nowrap transition-transform duration-700"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
}
