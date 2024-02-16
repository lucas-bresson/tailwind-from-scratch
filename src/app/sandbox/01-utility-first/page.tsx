import Image from "next/image";
import "./page.css";

export default function Page() {
  return (
    <div>
      {/* HTML/CSS version */}
      <div className="alert">
        <div className="alert-logo-wrap">
          <Image
            src="/../../../../warning.svg"
            className="h-12 w-12"
            alt="alert"
            width={12}
            height={12}
          />
        </div>
        <div className="alert-body">
          <h4 className="alert-title">Are You Sure?</h4>
          <p className="alert-message">You are about to delete a post</p>
        </div>
      </div>

      {/* Tailwind version */}
      <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl space-x-4 mt-12">
        <Image
          src="/../../../../warning.svg"
          className="h-12 w-12"
          alt="alert"
          width={12}
          height={12}
        />
        <div>
          <div className="text-xl font-medium text-black">Are You Sure?</div>
          <p className="text-slate-500">You are about to delete a post</p>
        </div>
      </div>
    </div>
  );
}
