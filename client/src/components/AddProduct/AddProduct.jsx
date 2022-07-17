import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useEcom from "../../hooks/useEcom";
import AddProductHeader from "./AddProductHeader/AddProductHeader";

// Componenst
import SingleProduct from "./SingleProduct/SingleProduct";

const AdddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    model: "",
    price: "",
    category: "",
    company: "",
  });

  const navigate = useNavigate();

  const { addToast } = useEcom();

  // Funs

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProducts = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4443/addProduct", {
        method: "Post",
        body: JSON.stringify(addProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      addToast("product added successfully!!", "success");
      navigate("/product");
      setAddProduct({ model: "", price: "", category: "", company: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[90%] w-full flex items-center justify-center bg-gradient-to-r from-[#E1B2CC] to-[#F4F4F7] pt-2 py-4">
      <div className="bg-white w-3/4 h-full rounded-lg  shadow-lg flex flex-col items-start">
        <AddProductHeader />
        <SingleProduct
          handleChange={handleChange}
          addProduct={addProduct}
          handleAddProducts={handleAddProducts}
        />
      </div>
    </div>
  );
};

export default AdddProduct;
