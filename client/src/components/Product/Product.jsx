import React, { useEffect, useState } from "react";
import CommonIcons from "../../Assets/CommonIcons";

const Product = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    getProducts();
    console.log(productsList);
  }, []);

  const getProducts = async () => {
    const res = await fetch("http://localhost:4443/product");
    const data = await res.json();
    console.log(data);
    setProductsList(data);
  };

  return (
    <div className="text-white  bg-gradient-to-r from-[#E1B2CC] to-[#F4F4F7] h-full p-4 flex gap-2 flex-col">
      <div className="flex justify-between w-full items-center">
        <div className="text-black text-xl font-semibold mb-4">Model</div>
        <div className="text-black text-xl font-semibold mb-4">Price</div>
        <div className="text-black text-xl font-semibold mb-4">Category</div>
        <div className="text-black text-xl font-semibold mb-4">Company</div>
        <div className="text-black text-xl font-semibold mb-4">Action</div>
      </div>

      {productsList.length > 0 ? (
        productsList.map((item) => (
          <div
            className="flex items-start justify-between w-full"
            key={item._id}
          >
            <div className="text-black text-lg font-semibold">{item.model}</div>
            <div className="text-black text-lg font-semibold">
              ${item.price}
            </div>
            <div className="text-black text-lg font-semibold">
              {item.category}
            </div>
            <div className="text-black text-lg font-semibold">
              {item.company}
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-400 cursor-pointer rounded-md">
                {CommonIcons.edit}
              </div>
              <div className="bg-red-400 cursor-pointer rounded-md ">
                {CommonIcons.trash}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-black font-semibold text-xl">
          {" "}
          No Products Found !!
        </h1>
      )}
    </div>
  );
};

export default Product;
