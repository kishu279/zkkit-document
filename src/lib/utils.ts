import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const demo = {
  title: "zkkit demo",
  link: "https://www.youtube.com/embed/XwTkb7AwKLs",
  width: 1332,
  height: 749
};


