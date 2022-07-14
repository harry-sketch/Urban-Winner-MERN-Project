import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [toast, setToast] = useState([]);

  // Funs

  const addToast = (text, type) => {
    setToast((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 10), text, type },
    ]);

    setTimeout(() => {
      removeToast();
    }, 3000);
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
