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
    <div className="bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800">
      <h1 className="text-white text-xl"></h1>
    </div>
  );
}

{
  /* <!-- Breakpoint Classes
    sm	640px	  @media (min-width: 640px) { ... }
    md	768px	  @media (min-width: 768px) { ... }
    lg	1024px	@media (min-width: 1024px) { ... }
    xl	1280px	@media (min-width: 1280px) { ... }
    2xl	1536px	@media (min-width: 1536px) { ... }
  --> */
}
