import { Link } from "react-router-dom";
import BasicInput from "../../Common/BasicInput/BasicInput";

const SignUpLeft = ({ handleSubmit, signValue, handleChange }) => {
  const { name, email, password } = signValue;
  return (
    <div className="bg-white w-1/3 h-5/6 rounded-lg  shadow-lg flex flex-col items-start">
      <div className="flex flex-col items-start border-b-2 border-gray-200 w-full py-4 px-6">
        <div className="text-2xl text-black text-center font-extrabold float-left">
          Sign Up
        </div>
        <div className="text-base font-medium">
          Want to sign up fill out this form!
        </div>
      </div>
      <div className="py-4 px-10 w-full">
        <BasicInput
          placeholder="Username"
          type="text"
          value={name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          placeholder="Email"
          type="text"
          value={email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          placeholder="Password"
          type="password"
          value={password}
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="bg-gradient-to-r from-[#30B4E3] to-[#3FC6EA] px-6 py-3 cursor-pointer border-none outline-none w-full"
          type="button"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
      <div className="text-sm font-medium text-center px-4 flex items-center">
        Already Have an account?.
        <Link to="/login">
          <button className="text-blue-600 font-extrabold text-base">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpLeft;
