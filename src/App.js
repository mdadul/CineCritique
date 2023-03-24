import { Route, Routes } from "react-router-dom";
import ForgotPass from "./components/Login/ForgotPass";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
    </Routes>
  );
}

export default App;
