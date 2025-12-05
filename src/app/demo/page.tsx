import { Navbar } from "@/components/Navbar";
import React from "react";
import { demo } from "@/lib/utils";

export default function page() {
  return (
    <section className="min-h-screen">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center py-18 ">
        <iframe
          width={demo.width}
          height={demo.height}
          src={demo.link}
          title={demo.title}
          //   frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //   referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}
