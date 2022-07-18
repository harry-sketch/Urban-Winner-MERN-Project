import React from "react";

const AddProductHeader = ({text}) => (
  <div className="flex flex-col items-start border-b-2 border-gray-200 w-full py-4 px-6">
    <div className="text-2xl text-black text-center font-extrabold float-left">
      {text}
    </div>
  </div>
);

export default AddProductHeader;
