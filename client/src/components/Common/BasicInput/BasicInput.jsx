const BasicInput = ({
  placeholder,
  name,
  value,
  className,
  onChange,
  type,
}) => {
  return (
    <div className={`border-b-2 border-red-600 mt-8 mb-10 ${className} w-full`}>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className="bg-transparent  border-none outline-none text-base text-white"
      />
    </div>
  );
};

export default BasicInput;
