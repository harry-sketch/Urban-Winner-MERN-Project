import { Route, Routes, useLocation } from "react-router-dom";

// Styles
import "./App.css";

// Components
import {
  SignUp,
  Update,
  Product,
  Header,
  Profile,
  PrivateComponent,
} from "./components";

// Routes

function App() {
  const location = useLocation();
  return (
    <div className="bg-[#0E0E0E] ">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<SignUp />} />

        <Route path="/product" element={<Product />} />
        <Route path="/update" element={<Update />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
