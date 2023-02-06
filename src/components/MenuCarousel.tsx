import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft as ArrowLeft, AiOutlineArrowRight as ArrowRight } from "react-icons/ai"

export function MenuCarouselItem({ children, width, height }: any) {
  return (
    <div
      className="inline-flex items-center justify-center"
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
}

// TODO: Add swipe "react-swipeable"
export default function MenuCarousel({ children, time, className, descriptions }: any) {
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
        flex relative items-center overflow-hidden w-max
        bg-gray-800 py-2 
      "
    >
      {/*Mobile*/}
      <div className="flex absolute inset-0 items-end justify-center text-gray-900 z-10 space-x-24 mb-16">
        <button 
          className="p-4 transition-colors duration-300 ease-out hover:bg-gray-600/50 rounded-full"
          onClick={() => updateIndex(activeIndex + 1)}><ArrowLeft size={30}/></button>
        <button 
          className="p-4 transition-colors duration-300 ease-out hover:bg-gray-600/50 rounded-full"
          onClick={() => updateIndex(activeIndex - 1)}><ArrowRight size={30} /></button>
      </div>

      {/*Left side*/}
      <div className="hidden md:flex flex-col z-10 justify-center space-x-2 bg-gray-800">
        {descriptions.map((description: any, index: any) => {
          return (
            <button
              className={`${index === activeIndex && "bg-sky-500 text-white"}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {description.name}
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
