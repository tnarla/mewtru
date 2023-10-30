"use client";

import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button, Card, DropdownMenu, TextField } from "@radix-ui/themes";
import { Dog } from "lucide-react";
import { useEffect, useState } from "react";

interface ActualHabit {
  text: string;
  frequency: number;
  displayFrequency: number;
}

const timeToText = (time: number) => {
  switch (time) {
    case 86400:
      return "Daily";
    case 3600:
      return "Hourly";
    case 60:
      return "Minutely";
    default:
      return "Daily";
  }
};

const secondsToText = (seconds?: number | null) => {
  if (!seconds) return "0s";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
  const secondsLeft = Math.floor(((seconds % 86400) % 3600) % 60);

  return `${hours === 0 ? "" : hours + "h"} ${
    minutes === 0 ? "" : minutes + "m"
  } ${secondsLeft === 0 ? "" : secondsLeft + "s"} `;
};

export default function Habit() {
  const [habitText, setHabitText] = useState<string>("");
  const [frequency, setFrequency] = useState<number | null>();
  const [habits, setHabits] = useState<ActualHabit[]>([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!habitText || !frequency) return;

    setHabits((prev) => [
      ...prev,
      { text: habitText, frequency: frequency, displayFrequency: frequency },
    ]);

    setHabitText("");
    setFrequency(null);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setHabits((prev) =>
        prev.map((h) => ({
          ...h,
          displayFrequency:
            h.displayFrequency === 0 ? 0 : h.displayFrequency - 1,
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function resetTime(h: ActualHabit) {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.text === h.text) {
          return { ...habit, displayFrequency: h.frequency };
        }
        return habit;
      })
    );
  }

  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <Dog size={48} />
      <div className="text-4xl font-black py-4">Habit Hound</div>
      <div className="flex">
        <form onSubmit={(e) => handleSubmit(e)} className="flex gap-4">
          <TextField.Root>
            <TextField.Input
              size="3"
              placeholder="Add a habit"
              onChange={(e) => setHabitText(e.currentTarget.value)}
              value={habitText}
            />
            <TextField.Slot pr="3">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft">
                    {frequency ? timeToText(frequency) : "Freq"}
                    <CaretDownIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={() => setFrequency(86400)}>
                    Daily
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onClick={() => setFrequency(3600)}>
                    Hourly
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onClick={() => setFrequency(60)}>
                    Minutely
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </TextField.Slot>
          </TextField.Root>
          <Button size="3" variant="solid" color="purple">
            Add
          </Button>
        </form>
      </div>

      <div className="w-[500px] pt-8 flex flex-col gap-2">
        {habits.map((h, i) => (
          <Card
            onClick={() => resetTime(h)}
            key={i}
            className="p-2 cursor-pointer"
            style={{
              backgroundColor:
                h.displayFrequency < 10
                  ? "#E5484D80"
                  : h.displayFrequency < 1000
                  ? "#FFE62980"
                  : "#46A75880",
            }}
          >
            <div className="flex justify-between">
              <div>{h.text}</div>
              <div>{secondsToText(h.displayFrequency)}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
