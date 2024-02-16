"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    function showBrowserWidth() {
      const width = window.innerWidth;
      const el = document.querySelector("h1") as HTMLElement;
      el.innerText = `Width: ${width}`;
    }

    window.addEventListener("load", showBrowserWidth);
    window.addEventListener("resize", showBrowserWidth);

    return () => {
      window.removeEventListener("load", showBrowserWidth);
      window.removeEventListener("resize", showBrowserWidth);
    };
  }, []);

  return (
    <div className="bg-black sm:bg-green-500 md:bg-blue-800 lg:bg-red-500 xl:bg-lime-500 2xl:bg-indigo-500">
      <h1 className="text-white text-xl md:text-3xl xl:text-5xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
        repudiandae.
      </h1>
    </div>
  );
}

// <!-- Breakpoint Classes
//     sm	640px	  @media (min-width: 640px) { ... }
//     md	768px	  @media (min-width: 768px) { ... }
//     lg	1024px	@media (min-width: 1024px) { ... }
//     xl	1280px	@media (min-width: 1280px) { ... }
//     2xl	1536px	@media (min-width: 1536px) { ... }
//   -->
