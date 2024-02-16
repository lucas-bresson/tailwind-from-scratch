export default function Page() {
  return (
    <div>
      {/* Hover State Styling */}
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-white">
        Submit
      </button>

      {/* Focus State Styling */}
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-orange-500 focus:text-white">
        Submit
      </button>

      {/* Active State Styling */}
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-orange-500 active:text-white">
        Submit
      </button>

      {/* Styling based on parent state */}
      <a
        href=""
        className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500"
      >
        <h3 className="group-hover:text-white">Card Title</h3>
        <p className="group-hover:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut?
        </p>
      </a>

      {/* Pseudo Classes */}
      <ul>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-lime-500">
          Item 1
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-lime-500">
          Item 2
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-lime-500">
          Item 3
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-lime-500">
          Item 4
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-lime-500">
          Item 5
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-lime-500">
          Item 6
        </li>
      </ul>

      {/* Appearance */}
      {/* Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components. */}
      <select className="appearance-none">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br />
      {/* Cursor */}
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3">
        Submit
      </button>
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-wait">
        Submit
      </button>
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-not-allowed">
        Submit
      </button>

      {/* User Select */}
      <div className="select-none">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
        odit.
      </div>
      <div className="select-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
        odit.
      </div>
      <div className="select-all">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
        odit.
      </div>

      {/* Smooth Scroll Example */}
      {/* see className="scroll-smooth" added to html tag in root layout */}
      <a href="#item" className="block my-6">
        Go To Item
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo ipsa
        sint, incidunt distinctio aperiam praesentium delectus quis rerum
        veritatis repellat mollitia architecto laboriosam? Dicta nemo molestiae
        quo quae repellendus distinctio doloribus illum minus quam veritatis
        inventore sed hic dolores, tempora obcaecati voluptates, dolorem ea cum
        beatae itaque, nihil magni et tenetur? Blanditiis reiciendis neque esse
        quia consequuntur. Neque quo voluptatibus dolore perspiciatis libero
        minima ex labore quaerat quod ducimus incidunt, ullam dolor impedit,
        vero optio. Quis, dignissimos impedit cumque mollitia, ea eum quaerat
        aut modi architecto ex corrupti esse minus praesentium expedita, magnam
        unde amet illum dolorem vel sint animi ipsum sit! Sapiente dicta modi
        accusantium rerum fuga, at reiciendis, eius quam in quis voluptas quia
        explicabo numquam voluptate reprehenderit nobis aspernatur, eaque
        debitis totam recusandae dolores amet? Unde ipsam ut eveniet libero
        fugiat vero dolorum, iure impedit minima dolor natus reprehenderit
        quidem illo! Unde consectetur a distinctio, animi hic pariatur natus aut
        neque esse dolores iusto optio cupiditate non? Nulla harum labore sit,
        omnis eveniet quae ab. Quidem voluptate eius, molestias mollitia est
        quam aperiam totam earum, id a doloribus nemo itaque dicta nostrum natus
        minus quisquam suscipit ipsum quis similique. Nihil aliquid, eos itaque
        sequi id provident fugit. Impedit veniam alias, modi explicabo quam sit
        magnam excepturi aliquam vel fugiat ea provident voluptas sapiente nobis
        placeat delectus fuga unde maiores inventore quod natus cupiditate
        itaque laudantium quia. Ratione eveniet amet vel quidem totam nesciunt
        iste officia, aliquid ullam, magni, mollitia ipsa! Minus veritatis
        ratione autem quis explicabo laborum eius, rem odio ad, nam vel officia
        ex quisquam. Modi ratione accusamus voluptatibus in quos voluptas
        obcaecati vel aperiam nulla mollitia unde tempore soluta vero, et
        asperiores nihil voluptatum. Incidunt id, sequi similique totam
        consectetur placeat. Unde explicabo odio aut, deleniti necessitatibus
        voluptatem rerum numquam voluptatibus nesciunt eius ipsum? Dolore
        temporibus dolorum neque quibusdam aliquam in minus pariatur odio aut
        repellat quis maiores sit perferendis nesciunt facilis error obcaecati
        repudiandae suscipit consequuntur dicta animi, reprehenderit
        voluptatibus. Hic, vero quaerat ducimus unde corporis autem esse
        voluptatem ratione ad reiciendis consequatur ipsum nesciunt placeat
        alias illo ipsa? Dolorum, quis rerum. Nesciunt illum quod nobis quae
        nisi neque eaque consequatur dolore dolor illo, eos enim reprehenderit!
        Quis, commodi voluptatem officiis, omnis laborum fuga quia debitis, quam
        possimus magni consequuntur. Possimus veniam id distinctio, nulla quidem
        beatae voluptates assumenda deleniti. Libero perspiciatis nisi quis esse
        laudantium deleniti, praesentium quia quod voluptates, obcaecati
        repellat?
      </p>
      <div id="item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo
        necessitatibus dolor impedit debitis ducimus fuga reprehenderit minus ea
        esse vel libero maxime minima cupiditate molestiae et ipsa, est tempore,
        optio provident odit veritatis? Expedita molestias id soluta impedit
        commodi nobis debitis dolore sapiente iste voluptatem necessitatibus
        assumenda, repellendus hic.
      </div>
    </div>
  );
}

// <!-- Cursor
//   cursor-auto	          cursor: auto;
//   cursor-default	      cursor: default;
//   cursor-pointer	      cursor: pointer;
//   cursor-wait	          cursor: wait;
//   cursor-text	          cursor: text;
//   cursor-move	          cursor: move;
//   cursor-help	          cursor: help;
//   cursor-not-allowed	  cursor: not-allowed;
//   cursor-none	          cursor: none;
//   cursor-context-menu	  cursor: context-menu;
//   cursor-progress	      cursor: progress;
//   cursor-cell	          cursor: cell;
//   cursor-crosshair	    cursor: crosshair;
//   cursor-vertical-text	cursor: vertical-text;
//   cursor-alias	        cursor: alias;
//   cursor-copy	          cursor: copy;
//   cursor-no-drop	      cursor: no-drop;
//   cursor-grab	          cursor: grab;
//   cursor-grabbing	      cursor: grabbing;
//   cursor-all-scroll	    cursor: all-scroll;
//   cursor-col-resize	    cursor: col-resize;
//   cursor-row-resize	    cursor: row-resize;
//   cursor-n-resize	      cursor: n-resize;
//   cursor-e-resize	      cursor: e-resize;
//   cursor-s-resize	      cursor: s-resize;
//   cursor-w-resize	      cursor: w-resize;
//   cursor-ne-resize	    cursor: ne-resize;
//   cursor-nw-resize	    cursor: nw-resize;
//   cursor-se-resize	    cursor: se-resize;
//   cursor-sw-resize	    cursor: sw-resize;
//   cursor-ew-resize	    cursor: ew-resize;
//   cursor-ns-resize	    cursor: ns-resize;
//   cursor-nesw-resize	  cursor: nesw-resize;
//   cursor-nwse-resize	  cursor: nwse-resize;
//   cursor-zoom-in	      cursor: zoom-in;
//   cursor-zoom-out	      cursor: zoom-out;
// -->
