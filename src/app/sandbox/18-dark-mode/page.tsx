"use client";
import { useState, useEffect } from "react";
import "./page.css";

export default function Page() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [checked]);

  return (
    <div>
      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow-xl">
        <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          facere?
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          architecto voluptatibus veniam inventore repellat dolor quod earum
          omnis quo ipsum voluptatem, nisi blanditiis ullam aspernatur!
        </p>
      </div>
      <div className="relative inline-block w-10 mr-2 ml-6 mt-6 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={checked}
          onChange={() => setChecked((checked) => !checked)}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </div>
  );
}

// <!-- Credit for toggle button style
// https://tailwindcomponents.com/component/toggle-switch
//  -->
