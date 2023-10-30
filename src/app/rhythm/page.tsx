"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const BIG_SIZE = 120;
const SMALL_SIZE = 15;
const PER_PX = 0.3;

function Dot({ mousePos }: { mousePos: { x: number; y: number } }) {

  const size = useSpring(SMALL_SIZE, 
    { damping: 30, stiffness: 200 });


  const dotRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    if (!dotRef.current) return;
    const { x, y } = mousePos;
    const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();


    const distance = Math.sqrt(
      Math.pow(Math.abs(x - dotX), 2) + 
      Math.pow(Math.abs(y - dotY), 2)
    );

    size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
    
  }, [mousePos, size]);

  return (
    <div ref={dotRef} className="relative">
      <motion.div
        className="bg-green-600 rounded-full absolute -translate-y-1/2 -translate-x-1/2"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

export default function Rhythm() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });



  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    };
  });



  return (
    <div className="flex flex-wrap w-[1000px] gap-24 mx-auto p-12">
      {Array.from({ length: 100 }, (_, i) => (
        <Dot key={i} mousePos={mousePos}></Dot>
      ))}
    </div>
  );
}
