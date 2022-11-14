import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
