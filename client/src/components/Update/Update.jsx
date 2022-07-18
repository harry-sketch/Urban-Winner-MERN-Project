import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Custom Hook
import useEcom from "../../hooks/useEcom";

// Components
import AddProductHeader from "../AddProduct/AddProductHeader/AddProductHeader";
import SingleProduct from "../AddProduct/SingleProduct/SingleProduct";

const Update = () => {
  const { addToast } = useEcom();
  const [updateProduct, setUpdateProduct] = useState({
    model: "",
    price: "",
    category: "",
    company: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    updateProducts();
  }, []);

  const updateProducts = async () => {
    const res = await fetch(`http://localhost:4443/update/${params.id}`, {
      method: "Get",
    });
    const data = await res.json();
    setUpdateProduct({
      model: data.model,
      price: data.price,
      category: data.category,
      company: data.company,
    });
    console.log(data);
  };

  const handleUpdateProducts = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:4443/update/${params.id}`, {
      method: "Put",
      body: JSON.stringify(updateProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    if (data) {
      addToast("product updated Successfully", "success");
      navigate("/product");
    }
  };

  return (
    <div className="h-[90%] w-full flex items-center justify-center bg-gradient-to-r from-[#E1B2CC] to-[#F4F4F7] pt-2 py-4">
      <div className="bg-white w-3/4 h-full rounded-lg  shadow-lg flex flex-col items-start">
        <AddProductHeader text="Update Products" />
        <SingleProduct
          handleChange={handleChange}
          addProduct={updateProduct}
          handleAddProducts={handleUpdateProducts}
          text="Update"
        />
      </div>
    </div>
  );
};

export default Update;
