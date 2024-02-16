import Link from "next/link";

export default function Home() {
  return (
    <main>
      <menu className="bg-teal-800 text-slate-200 shadow-lg">
        <h1 className="text-center pt-2 text-sm font-bold">
          Tailwind CSS From Scratch: Learn by doing Projects
        </h1>

        <ul className="flex justify-around text-center">
          <li className="flex-1 px-4 py-2 hover:font-medium hover:text-emerald-200 hover:bg-teal-700 ">
            <Link href="/sandbox">Sandbox</Link>
          </li>
          <li className="flex-1 px-4 py-2 hover:font-medium hover:text-emerald-200 hover:bg-teal-700">
            <Link href="/sandbox">Sandbox</Link>
          </li>
          <li className="flex-1 px-4 py-2 hover:font-medium hover:text-emerald-200 hover:bg-teal-700">
            <Link href="/sandbox">Sandbox</Link>
          </li>
          <li className="flex-1 px-4 py-2 hover:font-medium hover:text-emerald-200 hover:bg-teal-700">
            <Link href="/sandbox">Sandbox</Link>
          </li>
          <li className="flex-1 px-4 py-2 hover:font-medium hover:text-emerald-200 hover:bg-teal-700">
            <Link href="/sandbox">Sandbox</Link>
          </li>
          <li className="flex-1 px-4 py-2 hover:font-medium hover:text-emerald-200 hover:bg-teal-700">
            <Link href="/sandbox">Sandbox</Link>
          </li>
        </ul>
      </menu>
    </main>
  );
}
