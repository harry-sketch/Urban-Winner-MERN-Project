import { Route, Routes, useLocation } from "react-router-dom";

// Styles
import "./App.css";

// Components
import { SignUp, Update } from "./components";
import Header from "./components/Header/Header";
import PrivateComponent from "./components/PrivateComponent/PrivateComponent";
import Showcase from "./components/Showcase/Showcase";

// Routes

function App() {
  const location = useLocation();
  return (
    <div className="bg-[#0E0E0E]">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/update" element={<Update />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
      </Routes>
    </div>
  );
}

export default App;
