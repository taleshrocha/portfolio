import { useEffect, useState } from "react";

interface TypewriterProps {
  baseTexts: string[];
  loop: Boolean;
  typeSpeed: number;
  deleteSpeed: number;
  startSleepTime?: number;
  endSleepTime?: number;
  className?: string;
}

export default function Typewriter({
  baseTexts,
  loop,
  typeSpeed,
  deleteSpeed,
  startSleepTime,
  endSleepTime,
  ...props
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  function sleep(typeTime: any) {
    return new Promise((resolve) => setTimeout(resolve, typeTime));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (text === baseTexts[index] && loop) {
          sleep(endSleepTime ? endSleepTime : 0).then(() => {
            setIsTyping(false);
          });
        } else setText(baseTexts[index].slice(0, text.length + 1));
      } else {
        if (text === "") {
          sleep(startSleepTime ? startSleepTime : 0).then(() => {
            setIsTyping(true);
            if (baseTexts.length > 1) setIndex((index + 1) % baseTexts.length);
          });
        } else setText(baseTexts[index].slice(0, text.length - 1));
      }
    }, isTyping? typeSpeed : deleteSpeed);
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return <span {...props}>{text}</span>;
}
