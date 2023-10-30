'use client';

import Image from "next/image";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";

function randomHeight() {

  return Math.floor(Math.random() * 100) + 200;
}


interface BookType {
  title: string;
  cover: string;
  length: number;
}
interface BookProps {
  book: BookType;
}

function Book({ book }: BookProps) {
  const [bgColor, setBGColor] = useState("#fff");

  const fac = new FastAverageColor();
  useEffect(() => {
    (async () => {
      const bgColor = await fac.getColorAsync(book.cover);
      setBGColor(bgColor.hex);
    })();
  });

  return (
    <div
      style={{
        backgroundColor: bgColor,
        writingMode: "vertical-lr",
        textOrientation: "mixed",
        height: randomHeight()
      }}
      className="w-[80px] flex items-center justify-center text-lg"
    >
      {book.title}
    </div>
  );
}

export default function Books() {
  const books: BookType[] = [
    {
      title: "Mistborn",
      cover:
        "https://m.media-amazon.com/images/I/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg",
      length: 541,
    },
    {
      title: "Babel",
      cover:
        "https://m.media-amazon.com/images/I/A1lv97-jJoL._AC_UF1000,1000_QL80_.jpg",
      length: 860,
    }, {
      title: "Mistborn",
      cover:
        "https://m.media-amazon.com/images/I/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg",
      length: 541,
    },
    {
      title: "Babel",
      cover:
        "https://m.media-amazon.com/images/I/A1lv97-jJoL._AC_UF1000,1000_QL80_.jpg",
      length: 860,
    }, {
      title: "Mistborn",
      cover:
        "https://m.media-amazon.com/images/I/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg",
      length: 541,
    },
    {
      title: "Babel",
      cover:
        "https://m.media-amazon.com/images/I/A1lv97-jJoL._AC_UF1000,1000_QL80_.jpg",
      length: 860,
    }, {
      title: "Mistborn",
      cover:
        "https://m.media-amazon.com/images/I/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg",
      length: 541,
    },
    {
      title: "Babel",
      cover:
        "https://m.media-amazon.com/images/I/A1lv97-jJoL._AC_UF1000,1000_QL80_.jpg",
      length: 860,
    },
  ];

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <div className="p-12 flex flex-col space-y-4">
          <Image
            className="rounded-2xl"
            alt="tru"
            width={200}
            height={200}
            src="https://pbs.twimg.com/profile_images/1697362892109357056/_PiTu74t_400x400.jpg"
          />
          <div className="flex flex-col">
            <div className="text-4xl font-bold">Tru Narla</div>
            <div className="text-md text-gray-500">@mewtru</div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="p-12 flex flex-col space-y-2">
          <div className="border-b-4 h-[300px] flex flex-row items-end">
            {books.map((book) => (
              <Book key={book.title} book={book} />
            ))}
            
          </div>
          <div className="border-b-4 h-[300px] flex flex-row items-end">
            {books.map((book) => (
              <Book key={book.title} book={book} />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
