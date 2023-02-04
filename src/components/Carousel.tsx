import React, { useEffect, useState } from "react";

export function CarrouselItem({ children, width }: any) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
}

// TODO: Add swipe "react-swipeable"
export default function Carousel({ children }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false)

  function mod(n:number, m:number) {
    return ((n % m) + m) % m
  }

  function updateIndex(newIndex: number) {
    setActiveIndex(mod(newIndex, React.Children.count(children)));
    console.log(activeIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(!isPaused) updateIndex(activeIndex + 1)
    }, 1000)
    return () => {
      if (interval) clearInterval(interval)
    }
  })

  return (
    <div className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${Math.abs(activeIndex) * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
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
              className={`${index === Math.abs(activeIndex) ? "active" : ""}`}
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
