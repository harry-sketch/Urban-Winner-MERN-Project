import BasicInput from "../../Common/BasicInput/BasicInput";

const SingleProduct = ({ handleChange, addProduct, handleAddProducts }) => {
  const { model, price, category, company } = addProduct;

  return (
    <div className="py-4 px-10 w-full">
      <BasicInput
        placeholder="Enter Model"
        type="text"
        name="model"
        value={model}
        onChange={handleChange}
      />
      <BasicInput
        placeholder="Enter Price in dollars"
        type="text"
        name="price"
        value={price}
        onChange={handleChange}
      />
      <BasicInput
        placeholder="Enter Category for.e.g:mobile,desktop....."
        type="text"
        name="category"
        value={category}
        onChange={handleChange}
      />
      <BasicInput
        placeholder="Enter Company"
        type="text"
        name="company"
        value={company}
        onChange={handleChange}
      />
      <button
        className="bg-gradient-to-r from-[#30B4E3] to-[#3FC6EA] px-6 py-3 cursor-pointer border-none outline-none w-full"
        type="button"
        onClick={handleAddProducts}
      >
        Add Product
      </button>
    </div>
  );
};

export default SingleProduct;
