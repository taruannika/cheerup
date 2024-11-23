import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Choice from "./pages/Choice";

const App = () => {
  return (
    <div className="min-h-screen bg-opacity flex flex-col items-center  ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/choice" element={<Choice />} />
      </Routes>
    </div>
  );
};

export default App;
