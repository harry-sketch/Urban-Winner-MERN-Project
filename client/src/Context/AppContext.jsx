import { createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [toast, setToast] = useState([]);

  // Funs
  const addToast = (newToast) => {
    setToast((prev) => [...prev, newToast]);
  };

  const removeToast = (id) => {
    const filteredToast = toast.filter((item) => item.id !== id);
    setToast(filteredToast);
  };

  return (
    <AppContext.Provider value={{ toast, addToast, removeToast }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
