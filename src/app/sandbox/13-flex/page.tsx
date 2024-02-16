export default function Page() {
  return (
    <div>
      {/* Flex and alignment */}
      {/* <div className="flex items-center justify-start h-72 w-full flex-col md:flex-row md:justify-end">
        <div className="p-10 border border-blue-300 bg-blue-100">Item 1</div>
        <div className="p-10 border border-blue-300 bg-blue-100">Item 2</div>
        <div className="p-10 border border-blue-300 bg-blue-100">Item 3</div>
        <div className="p-10 border border-blue-300 bg-blue-100">Item 4</div>
        <div className="p-10 border border-blue-300 bg-blue-100">Item 5</div>
        <div className="p-10 border border-blue-300 bg-blue-100">Item 6</div>
      </div> */}

      {/* Flex Column, Gap and Order */}
      {/* <div className="flex flex-col items-center justify-between h-72 w-full bg-gray-500">
        <div className="order-4 p-10 border border-blue-300 bg-blue-100">
          Item 1
        </div>
        <div className="order-3 p-10 border border-blue-300 bg-blue-100">
          Item 2
        </div>
        <div className="order-2 p-10 border border-blue-300 bg-blue-100">
          Item 3
        </div>
        <div className="order-1 p-10 border border-blue-300 bg-blue-100">
          Item 4
        </div>
      </div> */}

      {/* Grow and shrink */}
      <div className="flex w-full bg-blue-500">
        <div className="flex-initial w-64 p-10 border border-blue-300 bg-blue-100">
          Item 1
        </div>
        <div className="flex-none w-64 p-10 border border-blue-300 bg-blue-100">
          Item 2
        </div>
        <div className="flex-auto w-64 p-10 border border-blue-300 bg-blue-100">
          Item 3
        </div>
        <div className="flex-1 w-64 p-10 border border-blue-300 bg-blue-100">
          Item 4
        </div>
        <div className="p-10 border border-blue-300 bg-blue-100">Item 5</div>
        <div className="p-10 border border-blue-300 bg-blue-100">Item 6</div>
      </div>

      <div className="flex">
        <div className="flex-1 bg-blue-100 border border-blue-500">
          Lorem, ipsum.
        </div>
        <div className="flex-1 bg-blue-100 border border-blue-500">
          Lorem, ipsum.
        </div>
        <div className="flex-1 bg-blue-100 border border-blue-500">
          Lorem, ipsum.
        </div>
      </div>
    </div>
  );
}

// <!-- Justify Content
//       justify-start	    justify-content: flex-start;
//       justify-end	      justify-content: flex-end;
//       justify-center	    justify-content: center;
//       justify-between	  justify-content: space-between;
//       justify-around	    justify-content: space-around;
//       justify-evenly	    justify-content: space-evenly;
//     -->

// <!--
//       items-start	    align-items: flex-start;
//       items-end	      align-items: flex-end;
//       items-center 	  align-items: center;
//       items-baseline	  align-items: baseline;
//       items-stretch	  align-items: stretch;
//      -->

// <!-- Flex Direction
//       flex-row	        flex-direction: row;
//       flex-row-reverse	flex-direction: row-reverse;
//       flex-col	        flex-direction: column;
//       flex-col-reverse	flex-direction: column-reverse;
//     -->

// <!--
//       flex-wrap	        flex-wrap: wrap;
//       flex-wrap-reverse	flex-wrap: wrap-reverse;
//       flex-nowrap	      flex-wrap: nowrap;
//      -->

// <!-- Flex Properties
//       flex-none	    flex: none;
//       Prevent item from growing or shrinking

//       flex-initial	flex: 0 1 auto;
//       Allow item to shrink but not grow, taking into account its initial size

//       flex-auto	    flex: 1 1 auto;
//       Allow item to grow and shrink, taking into account its initial size

//       flex-1	      flex: 1 1 0%;
//       Allow item to grow and shrink as needed, ignoring its initial size
//     -->
