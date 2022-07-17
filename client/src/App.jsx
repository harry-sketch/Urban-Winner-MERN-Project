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
  Login,
} from "./components";
import Toast from "./components/Common/Toast/Toast";

// Routes

function App() {
  const location = useLocation();
  const isNotHeader = ["/", "/login"];
  return (
    <div className="relative">
      {!isNotHeader.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route element={<PrivateComponent />}>
          <Route path="/product" element={<Product />} />
          <Route path="/update" element={<Update />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Toast />
    </div>
  );
}

export default App;
