import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { setSelectedChoice } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="container mt-20 ">
      <div className="w-full px-3 flex flex-col lg:flex-row  items-center gap-5 justify-center">
        <button
          onClick={() => {
            setSelectedChoice("compliments");
            navigate("/choice");
          }}
          className="w-full px-11 py-8 bg-slate-950 rounded-xl text-white font-bold"
        >
          I would like some compliments
        </button>
        <button
          onClick={() => {
            setSelectedChoice("dateideas");
            navigate("/choice");
          }}
          className="w-full px-11 py-8 bg-slate-950 rounded-xl text-white font-bold"
        >
          I would like some date ideas
        </button>
        <button
          onClick={() => {
            setSelectedChoice("favor");
            navigate("/choice");
          }}
          className="w-full px-11 py-8 bg-slate-950 rounded-xl text-white font-bold"
        >
          I would like some favors
        </button>
      </div>
    </div>
  );
};

export default Home;
