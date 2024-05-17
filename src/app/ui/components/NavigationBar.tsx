"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const projects = [
  // {
  //   title: "Sandbox",
  //   href: "/sandbox",
  // },
  {
    title: "Image Gallery",
    href: "/projects/image-gallery",
  },
  {
    title: "Login Modal",
    href: "/projects/login-modal",
  },
  {
    title: "Clipboard",
    href: "/projects/clipboard",
  },
  {
    title: "Loopstudios",
    href: "/projects/loopstudios",
  },
  {
    title: "Shortly",
    href: "/projects/shortly",
  },
  {
    title: "Testimonial Grid",
    href: "/projects/testimonial-grid",
  },
  {
    title: "Fylo",
    href: "/projects/fylo",
  },
  {
    title: "Bookmark",
    href: "/projects/bookmark",
  },
  {
    title: "Newsletter Card",
    href: "/projects/email-subscribe",
  },
  {
    title: "Pricing Cards",
    href: "/projects/pricing-cards",
  },
  {
    title: "Product Modal",
    href: "/projects/product-modal",
  },
];

export default function NavigationBar() {
  const [index, setIndex] = useState(0);
  const pathname = usePathname();
  const { replace } = useRouter();

  const { title, href } = projects[index];

  const goToPrevious = () => {
    if (index === 0) return;
    setIndex((index) => index - 1);
  };

  const goToNext = () => {
    if (index === projects.length - 1) return;
    setIndex((index) => index + 1);
  };

  useEffect(() => {
    if (pathname !== href) {
      replace(href);
    }
  }, [index, pathname, replace, href]);

  return (
    <menu className="w-full z-50 bg-teal-800 text-slate-200 shadow-md">
      <div className="flex items-center justify-between mx-auto w-full p-2 max-w-6xl">
        <h1 className="font-bold">
          Tailwind CSS From Scratch: Learn by doing Projects
        </h1>
        <div className="flex items-center space-x-3">
          <div
            className={`font-bold ${index === 0 ? "hidden" : ""}`}
            onClick={goToPrevious}
          >
            &#x276C;
          </div>
          <div className="w-40 text-center">{title}</div>
          <div
            className={`font-bold ${
              index === projects.length - 1 ? "hidden" : ""
            }`}
            onClick={goToNext}
          >
            &#x276D;
          </div>
        </div>
      </div>
    </menu>
  );
}
