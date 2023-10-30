import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { shuffle } from "lodash";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomizeNumbers(length: number) {
  return shuffle(
    Array.from({ length }, (_, i) => [i, i]).flat()
  );
}


console.log("JavaScript so good, yes yes :)");


console.log("JavaScript so good yes yes :) ")