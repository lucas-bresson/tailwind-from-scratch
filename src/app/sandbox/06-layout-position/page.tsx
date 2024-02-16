import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* Positioning */}
      <div className="relative w-1/2 h-12 bg-red-200">
        <p>Parent Element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* Top left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Top right corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom right corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Span top edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Span left edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
      </div>

      {/* Span right edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 right-0 w-16 bg-yellow-300"></div>
      </div>

      {/* Span bottom edgee */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Display Classes */}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span className="inline font-bold">This is inline</span> Esse fugiat
        sapiente, modi voluptas adipisci debitis, eveniet, autem numquam et
        possimus nam neque molestiae provident reiciendis ipsum corrupti
        quibusdam beatae praesentium velit sed. Doloribus, aspernatur.
        <span className="inline-block font-bold">This is inline block</span> Et
        animi voluptate dolores aperiam! Iure laboriosam corporis molestias
        reiciendis odit, quasi dolorem perspiciatis quis repellendus
        <span className="block font-bold">This is block</span> facilis neque
        eaque rerum recusandae voluptatem nostrum
        <span className="hidden font-bold">This is hidden</span> nobis.
        Similique, culpa!
      </div>

      {/* Z-Index */}
      <div className="relative h-36">
        <div className="absolute left-10 w-24 h-24 bg-blue-100 z-40">1</div>
        <div className="absolute left-20 w-24 h-24 bg-blue-200">2</div>
        <div className="absolute left-40 w-24 h-24 bg-blue-300 z-10">3</div>
        <div className="absolute left-60 w-24 h-24 bg-blue-400 z-20">4</div>
        <div className="absolute left-80 w-24 h-24 bg-blue-500 z-30">5</div>
      </div>

      {/* Floats */}
      <div className="w-1/2">
        <Image
          className="float-left m-4"
          src="/../../../../img1.jpg"
          width={100}
          height={100}
          alt="img"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam eum
          illum deleniti reiciendis natus quasi earum a quas dolore. Totam quam
          ex expedita nobis nisi illo delectus in. Perspiciatis, atque!
        </p>
      </div>
    </div>
  );
}

// <!-- Position Classes
//       static	    position: static;
//       fixed	      position: fixed;
//       absolute	  position: absolute;
//       relative	  position: relative;
//       sticky	    position: sticky;
//     -->

// <!-- Display Classes
//       block	            display: block;
//       inline-block	    display: inline-block;
//       inline	          display: inline;
//       flex	            display: flex;
//       inline-flex	      display: inline-flex;
//       table	            display: table;
//       grid	            display: grid;
//       inline-grid	      display: inline-grid;
//       contents	        display: contents;
//       list-item	        display: list-item;
//       hidden	          display: none;
//     -->

// <!-- Z-Index
//       z-0	    z-index: 0;
//       z-10	  z-index: 10;
//       z-20	  z-index: 20;
//       z-30	  z-index: 30;
//       z-40	  z-index: 40;
//       z-50	  z-index: 50;
//       z-auto	z-index: auto;
//     -->

// <!-- Float
//       float-right	  float: right;
//       float-left	  float: left;
//       float-none	  float: none;
//     -->
