// Rhythm: Build something that has a sense of rhythm, whether in
// visual design, user interaction, or actual musical rhythm.
"use client";
import { randomizeNumbers } from "@/lib/utils";
import { useState } from "react";

// Tap tap game
// looper game
// memory game <- this one
// typing game but you have to type to a beat

export default function Rhythm() {
  const [numbers, setNumbers] = useState<number[]>(randomizeNumbers(10));

  return (
    <div className="grid grid-cols-5 gap-4">
      {numbers.map((num, i) => (
        <Card key={num} item={num} />
      ))}
    </div>
  );
}

interface CardProps {
  item: number;
}

function Card({ item }: CardProps) {
  return (
    <div className="rounded-xl shadow-xl bg-white text-black p-4 text-3xl flex items-center justify-center">
      {item}
    </div>
  );
}
