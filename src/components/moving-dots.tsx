import { useState } from "react";

export interface MovingDotsProps {}

export default function MovingDots(_props: MovingDotsProps) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      className="w-full h-screen"
      onMouseMove={(event) => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      }}
    >
      <div
        className="rounded-full bg-pink-400 size-10 absolute top-0 left-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
