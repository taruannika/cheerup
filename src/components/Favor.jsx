import { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { favorsList } from "../data";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Favor = () => {
  const [favor, setFavor] = useState("");
  const { favors, setFavors } = useContext(AppContext);
  const navigate = useNavigate();

  const setFavorite = () => {
    if (!favors.includes(favor)) {
      setFavors([...favors, favor]);
    }
  };

  const removeFavorite = () => {
    setFavors(favors.filter((c) => c !== favor));
  };

  const getFavor = () => {
    const randomFavor = Math.floor(Math.random() * favorsList.length);
    setFavor(favorsList[randomFavor]);
  };

  useEffect(() => {
    getFavor();
  }, []);

  const isOnFavorite = favors.includes(favor);
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-4 px-5 bg-slate-900 p-3 text-white">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-2xl">Here is your Favors!</h1>
          <p>Be treated like a princess, and I promise to make it happen</p>
          <p className="text-lg mt-4">{favor}</p>
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
            onClick={getFavor}
            className="px-4 py-2 bg-gray-500 rounded-lg text-white"
          >
            Get Another Favor
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

export default Favor;
