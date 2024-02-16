import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-blue-800">
      <div className="container bg-gray-50 h-full p-6 max-w-lg">
        <h1 className="text-3xl text-blue-800">Tailwind CSS Sandbox</h1>
        <ul className="mt-6">
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/01-utility-first/"
            >
              Utility First Example
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/02-colors/"
            >
              Colors
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/03-container-spacing/"
            >
              Container & Spacing
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/04-typography/"
            >
              Typography
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/05-sizing/"
            >
              Sizing
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/06-layout-position/"
            >
              Layout & Position
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/07-backgrounds-shadows/"
            >
              Backgrounds & Shadows
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/08-borders/"
            >
              Borders & Border Radius
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/09-filters/"
            >
              Filters
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/10-interactivity/"
            >
              Interactivity
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/11-breakpoints/"
            >
              Breakpoints
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/12-columns/"
            >
              Column Layouts
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/13-flex/"
            >
              Flexbox
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/14-grid/"
            >
              Grid
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/15-transform-transition/"
            >
              Transform & Transitions
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/16-animation/"
            >
              Animation
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/17-customization/"
            >
              Customization & Config
            </Link>
          </li>
          <li className="text-lg border border-blue-200 p-2 my-4">
            <Link
              className="text-blue-500 hover:text-blue-300"
              href="sandbox/18-dark-mode/"
            >
              Dark Mode
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
