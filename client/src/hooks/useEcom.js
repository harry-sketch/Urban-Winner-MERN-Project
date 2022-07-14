import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const useEcom = () => {
  return useContext(AppContext);
};

export default useEcom;
