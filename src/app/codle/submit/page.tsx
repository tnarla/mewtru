"use client";
import { Button } from "@/components/ui/button";
import { ComboboxDemo } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Marquee from "react-fast-marquee";

import { useId } from "react";

export default function Submit() {
  const textareaId = useId();

  return (
    <form className="flex flex-col w-screen h-screen items-center justify-center">
      <Marquee>
        <div className="flex gap-4">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="text-6xl text-white font-bold">
            mewtru
          </div>
        ))}<div />
        </div>
      </Marquee>
      
      {/* <div className="marqueeContainer">
        <ul className="marqueeContent">
          {Array.from({ length: 5 }, (_, i) => (
            <li key={i} className="text-6xl text-white font-bold">
              mewtru
            </li>
          ))}
        </ul>
        <ul className="marqueeContent">
          {Array.from({ length: 5 }, (_, i) => (
            <li key={i} className="text-6xl text-white font-bold">
              mewtru
            </li>
          ))}
        </ul>
      </div> */}

      <div className="w-1/3">
        <Label htmlFor={textareaId}>Code</Label>
        <p className="text-sm leading-6 text-gray-400">
          Paste your code below and select the language
        </p>
        <Textarea id={textareaId} />
        <ComboboxDemo />
        <Button>FTS</Button>
      </div>
    </form>
  );
}
