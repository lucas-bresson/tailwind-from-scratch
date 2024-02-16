import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* Background Classes  */}
      <div
        className="w-72 h-64 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("../../../../img1.jpg")' }}
      ></div>
      {/* Gradients  */}
      <div className="h-24 bg-gradient-to-l from-cyan-300 to-lemon-500"></div>

      {/* Shadows  */}
      <div className="w-96 mt-6 ml-4 p-3 shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        reprehenderit itaque perspiciatis, cumque aliquam quas exercitationem
        non, qui dolore similique, nam perferendis ea atque magnam nobis
        repellendus? Aperiam, tempore?
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        reprehenderit itaque perspiciatis, cumque aliquam quas exercitationem
        non, qui dolore similique, nam perferendis ea atque magnam nobis
        repellendus? Aperiam, tempore?
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        reprehenderit itaque perspiciatis, cumque aliquam quas exercitationem
        non, qui dolore similique, nam perferendis ea atque magnam nobis
        repellendus? Aperiam, tempore?
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        reprehenderit itaque perspiciatis, cumque aliquam quas exercitationem
        non, qui dolore similique, nam perferendis ea atque magnam nobis
        repellendus? Aperiam, tempore?
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        reprehenderit itaque perspiciatis, cumque aliquam quas exercitationem
        non, qui dolore similique, nam perferendis ea atque magnam nobis
        repellendus? Aperiam, tempore?
      </div>

      <div className="text-black bg-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        praesentium nostrum nisi blanditiis perspiciatis sit repudiandae
        reiciendis, fugit ex, nobis veritatis debitis quibusdam culpa! Ut
        aliquam eos incidunt consequuntur, facilis, voluptatibus deleniti totam
        atque, impedit id et quidem possimus natus?
      </div>
      <div className="text-black bg-white"></div>
      <div className="text-black bg-white">Lorem ipsum dolor sit amet.</div>
      <div className="text-black bg-white"></div>
      <div className="text-black bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum
        officia voluptatum, architecto laboriosam ipsa, vel doloremque fuga
        impedit provident ab dolorem debitis eum cumque, ipsam non? Eligendi,
        esse! Architecto.
      </div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-inner">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        reprehenderit itaque perspiciatis, cumque aliquam quas exercitationem
        non, qui dolore similique, nam perferendis ea atque magnam nobis
        repellendus? Aperiam, tempore?
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-blue-500/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        reprehenderit itaque perspiciatis, cumque aliquam quas exercitationem
        non, qui dolore similique, nam perferendis ea atque magnam nobis
        repellendus? Aperiam, tempore?
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus
        reprehenderit itaque perspiciatis, cumque aliquam quas exercitationem
        non, qui dolore similique, nam perferendis ea atque magnam nobis
        repellendus? Aperiam, tempore?
      </div>

      {/* Mix Blend  */}
      <div className="flex justify-center -space-x-24">
        <div className="mix-blend-multiply bg-blue-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id possimus
          ducimus beatae. Ex inventore amet beatae tempore eum provident?
          Repellendus.
        </div>
        <div className="mix-blend-multiply bg-pink-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id possimus
          ducimus beatae. Ex inventore amet beatae tempore eum provident?
          Repellendus.
        </div>
      </div>
    </div>
  );
}

// <!-- Background Size
//   bg-auto	    background-size: auto;
//   bg-cover	  background-size: cover;
//   bg-contain	background-size: contain;
// -->

// <!-- Background Repeat
//   bg-repeat	      background-repeat: repeat;
//   bg-no-repeat	  background-repeat: no-repeat;
//   bg-repeat-x	    background-repeat: repeat-x;
//   bg-repeat-y	    background-repeat: repeat-y;
//   bg-repeat-round	background-repeat: round;
//   bg-repeat-space	background-repeat: space;
// -->

// <!-- Background Position
//   bg-bottom	      background-position: bottom;
//   bg-center	      background-position: center;
//   bg-left	        background-position: left;
//   bg-left-bottom	background-position: left bottom;
//   bg-left-top	    background-position: left top;
//   bg-right	      background-position: right;
//   bg-right-bottom	background-position: right bottom;
//   bg-right-top	  background-position: right top;
//   bg-top	        background-position: top;
// -->

// <!-- Background Attachment
//   bg-fixed	  background-attachment: fixed;
//   bg-local	  background-attachment: local;
//   bg-scroll	  background-attachment: scroll;
// -->

// <!--
//   Shadows
//   shadow-sm	    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
//   shadow	      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
//   shadow-md	    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
//   shadow-lg	    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
//   shadow-xl	    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
//   shadow-2xl	  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
//   shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
//   shadow-none	  box-shadow: 0 0 #0000;
//  -->
