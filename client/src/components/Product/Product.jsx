import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonIcons from "../../Assets/CommonIcons";

const Product = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch("http://localhost:4443/product");
    const data = await res.json();
    setProductsList(data);
  };

  const sortedList = productsList.sort((a, b) => (a.price < b.price ? -1 : 1));

  const deleteItem = async (id) => {
    const res = await fetch(`http://localhost:4443/delete/${id}`, {
      method: "Delete",
    });

    const data = await res.json();
    if (data) {
      getProducts();
    }
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

      {sortedList.length > 0 ? (
        sortedList.map((item) => (
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
              <Link
                className="bg-blue-400 indexcursor-pointer rounded-md"
                to={`/update/${item._id}`}
              >
                {CommonIcons.edit}
              </Link>
              <div
                className="bg-red-400 cursor-pointer rounded-md"
                onClick={() => deleteItem(item._id)}
              >
                {CommonIcons.trash}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-black font-semibold text-xl">
          No Products Found !!
        </h1>
      )}
    </div>
  );
};

export default Product;
