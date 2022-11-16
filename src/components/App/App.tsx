import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
