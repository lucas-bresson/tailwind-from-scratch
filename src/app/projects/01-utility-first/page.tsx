import Image from "next/image";
import alertIcon from "../../../../public/warning.svg";

import "./page.css";

export default function Page() {
  return (
    <div className="alert">
      <div className="alert-logo-wrap">
        <Image
          className="alert-logo"
          src={alertIcon}
          width={16}
          height={16}
          alt="alert"
        />
      </div>
      <div className="alert-body">
        <h4 className="alert-title">Are You Sure?</h4>
        <p className="alert-message">You are about to delete a post</p>
      </div>
    </div>
  );
}
