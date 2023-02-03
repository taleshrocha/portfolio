import { useEffect, useState } from "react";

interface TypewriterProps {
  baseTexts: string[];
  loop: Boolean;
  typeTime: number;
  sleepTime?: number;
  className?: string;
}

export default function Typewriter({
  baseTexts,
  loop,
  typeTime,
  sleepTime,
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
          sleep(sleepTime ? sleepTime : 0).then(() => {
            setIsTyping(false);
          });
        } else setText(baseTexts[index].slice(0, text.length + 1));
      } else {
        if (text === "") {
          sleep(sleepTime ? sleepTime : 0).then(() => {
            setIsTyping(true);
            if (baseTexts.length > 1) setIndex((index + 1) % baseTexts.length);
          });
        } else setText(baseTexts[index].slice(0, text.length - 1));
      }
    }, typeTime);
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return <span {...props}>{text}</span>;
}
