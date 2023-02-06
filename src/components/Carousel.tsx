import React, { useEffect, useState } from "react";

export function CarouselItem({ children, width, height }: any) {
  return (
    <div
        className="inline-flex items-center justify-center"
      style={{ width: width, height: height}}
    >
      {children}
    </div>
  );
}

interface CarouselProps {
  children: any
  time: number
  className: string
}

// TODO: Add swipe "react-swipeable"
export default function Carousel({ children, time, className }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  function updateIndex(newIndex: number) {
    setActiveIndex(mod(newIndex, React.Children.count(children)));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) updateIndex(activeIndex + 1);
    }, time);
    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    <div
      className={`overflow-hidden py-2 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="whitespace-nowrap transition-transform duration-700"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="flex justify-center space-x-2 hidden">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex && "bg-sky-500 text-white"}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
