import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<RegisterPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
