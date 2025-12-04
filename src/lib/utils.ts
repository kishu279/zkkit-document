import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const demo = {
  title:
    "SHIN CHAN THUG LIFE | shin chan thug life shin chan funny moment ##shinchan #theboysmeme #trending",
  link: "https://www.youtube.com/embed/ZIZeWGxbL6E",
};
