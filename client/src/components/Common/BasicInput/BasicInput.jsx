const BasicInput = ({
  placeholder,
  name,
  value,
  className,
  onChange,
  type,
}) => {
  return (
    <div className={`border-2 border-slate-400 mt-8 mb-10 ${className} w-full`}>
      <input
        autoComplete="Off"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className="bg-transparent  border-none outline-none text-base text-black w-full p-3 focus:bg-transparent"
      />
    </div>
  );
};

export default BasicInput;
