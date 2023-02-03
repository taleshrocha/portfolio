import { useEffect, useState } from "react";

interface TypewriterProps {
  baseText: string;
  loop: Boolean;
  ms: number
  sleepTime?: number
}

export default function Typewriter({ baseText, loop, ms, sleepTime, ...props }: TypewriterProps) {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (text === baseText && loop) {
          sleep(sleepTime? sleepTime : 0).then(()=>{
            setIsTyping(false);
          })
        }
        else setText(baseText.slice(0, text.length + 1));
      } else {
        if (text === "") {
          sleep(sleepTime? sleepTime : 0).then(()=>{
            setIsTyping(true);
          })
        }
        else setText(baseText.slice(0, text.length - 1));
      }
    }, ms);
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <p 
      {...props}
    >
      {text}
    </p>
  );
}
