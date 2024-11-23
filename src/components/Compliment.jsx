import { useContext, useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { complimentsList } from "../data";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Compliment = () => {
  const [compliment, setCompliment] = useState("");
  const { compliments, setCompliments } = useContext(AppContext);
  const navigate = useNavigate();

  const setFavorite = () => {
    if (!compliments.includes(compliment)) {
      setCompliments([...compliments, compliment]);
    }
  };

  const removeFavorite = () => {
    setCompliments(compliments.filter((c) => c !== compliment));
  };

  const getCompliment = () => {
    const randomCompliment = Math.floor(Math.random() * complimentsList.length);
    setCompliment(complimentsList[randomCompliment]);
  };

  useEffect(() => {
    getCompliment();
  }, []);

  const isOnFavorite = compliments.includes(compliment);
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-4 px-5 bg-slate-900 p-3 text-white">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-2xl">Here is your compliment!</h1>
          <p>And I mean every word</p>
          <p className="text-lg mt-4">{compliment}</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={isOnFavorite ? removeFavorite : setFavorite}
            className={`px-4 py-2 rounded-lg ${
              isOnFavorite ? "bg-green-500" : "bg-blue-500"
            } text-white`}
          >
            {isOnFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <button
            onClick={getCompliment}
            className="px-4 py-2 bg-gray-500 rounded-lg text-white"
          >
            Get Another Compliment
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {isOnFavorite ? (
            <GoHeartFill className="text-red-500" />
          ) : (
            <GoHeart className="text-gray-500" />
          )}
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-blue-500 text-white rounded-lg"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Compliment;
