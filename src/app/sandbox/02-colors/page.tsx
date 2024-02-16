export default function Page() {
  return (
    <div className="bg-white text-black">
      <p>Tailwind is awesome</p>
      <p className="text-amber-500">Tailwind is awesome</p>
      <p className="text-indigo-500">Tailwind is awesome</p>
      <p className="text-lime-500">Tailwind is awesome</p>

      <p className="bg-white">Tailwind is awesome</p>
      <p className="bg-amber-300">Tailwind is awesome</p>
      <p className="bg-indigo-300">Tailwind is awesome</p>
      <p className="bg-lime-300">Tailwind is awesome</p>

      <p className="underline decoration-amber-500">Tailwind is awesome</p>
      <p className="underline decoration-indigo-500">Tailwind is awesome</p>
      <p className="underline decoration-lime-500">Tailwind is awesome</p>

      <input type="text" className="border border-amber-400" />
      <input type="text" className="border border-indigo-400" />
      <input type="text" className="border border-lime-400" />

      <div className="divide-y divide-blue-300">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>

      <button className="mx-1 outline outline-amber-300">Hello</button>
      <button className="mx-1 outline outline-lime-300">Hello</button>
      <button className="mx-1 outline outline-indigo-300">Hello</button>
      <button className="mx-1 shadow-lg bg-cyan-500 shadow-cyan-500/60">
        Subscribe
      </button>

      <input type="checkbox" className="accent-purple-500" checked />
      <input type="checkbox" className="accent-cyan-500" checked />

      <p className="text-[#427fab]">Tailwind is awesome</p>
      <p className="bg-[#427fab] text-[#fff]">Tailwind is awesome</p>
    </div>
  );
}
