import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* Blur */}
      <div className="blur-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, amet.
      </div>
      <div className="blur">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, amet.
      </div>
      <Image
        className="blur"
        src="/../../../../img1.jpg"
        alt=""
        width={300}
        height={300}
      />

      {/* Brightness  */}
      <Image
        className="brightness-50"
        src="/../../../../img2.jpg"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="brightness-75"
        src="/../../../../img2.jpg"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="brightness-100"
        src="/../../../../img2.jpg"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="brightness-200"
        src="/../../../../img2.jpg"
        alt=""
        width={300}
        height={300}
      />

      {/* Contrast */}
      <Image
        className="contrast-0"
        src="/../../../../img3.jpg"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="contrast-50"
        src="/../../../../img3.jpg"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="contrast-100"
        src="/../../../../img3.jpg"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="contrast-200"
        src="/../../../../img3.jpg"
        alt=""
        width={300}
        height={300}
      />

      {/* Grayscale */}
      <Image
        className="grayscale"
        src="/../../../../img4.jpg"
        alt=""
        width={300}
        height={300}
      />

      {/* Invert */}
      <Image
        className="invert"
        src="/../../../../img4.jpg"
        alt=""
        width={300}
        height={300}
      />

      {/* Sepia */}
      <Image
        className="sepia"
        src="/../../../../img4.jpg"
        alt=""
        width={300}
        height={300}
      />

      {/* Hue Rotate */}
      <Image
        className="hue-rotate-10"
        src="/../../../../img5.jpg"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="hue-rotate-60"
        src="/../../../../img5.jpg"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="hue-rotate-180"
        src="/../../../../img5.jpg"
        alt=""
        width={300}
        height={300}
      />
    </div>
  );
}
// Blur
//   blur-none	    filter: blur(0);
//   blur-sm	      filter: blur(4px);
//   blur	        filter: blur(8px);
//   blur-md	      filter: blur(12px);
//   blur-lg	      filter: blur(16px);
//   blur-xl	      filter: blur(24px);
//   blur-2xl	    filter: blur(40px);
//   blur-3xl	    filter: blur(64px);
// -->

// <!-- Brightness
//   brightness-0	    filter: brightness(0);
//   brightness-50	    filter: brightness(.5);
//   brightness-75	    filter: brightness(.75);
//   brightness-90	    filter: brightness(.9);
//   brightness-95	    filter: brightness(.95);
//   brightness-100	  filter: brightness(1);
//   brightness-105	  filter: brightness(1.05);
//   brightness-110	  filter: brightness(1.1);
//   brightness-125	  filter: brightness(1.25);
//   brightness-150	  filter: brightness(1.5);
//   brightness-200	  filter: brightness(2);
// -->

// <!-- Contrast
//   contrast-0	  filter: contrast(0);
//   contrast-50	  filter: contrast(.5);
//   contrast-75	  filter: contrast(.75);
//   contrast-100	filter: contrast(1);
//   contrast-125	filter: contrast(1.25);
//   contrast-150	filter: contrast(1.5);
//   contrast-200	filter: contrast(2);
// -->

// <!-- Hue Rotate
//   hue-rotate-0	    filter: hue-rotate(0deg);
//   hue-rotate-15	    filter: hue-rotate(15deg);
//   hue-rotate-30	    filter: hue-rotate(30deg);
//   hue-rotate-60	    filter: hue-rotate(60deg);
//   hue-rotate-90	    filter: hue-rotate(90deg);
//   hue-rotate-180	  filter: hue-rotate(180deg);
