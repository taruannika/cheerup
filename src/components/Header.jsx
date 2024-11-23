import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full   ">
      <div className="flex  justify-between items-center bg-slate-950 p-3">
        <Link to={"/"}>
          <h1 className="text-center mt-5 font-black  text-3xl text-white inline-block max-w-md">
            Let me cheer you up!
          </h1>
        </Link>
        {isOpen ? (
          <IoMdClose
            className="w-8 h-8"
            fill="white"
            onClick={handleOpenMenu}
          />
        ) : (
          <RiMenu5Fill
            className="w-8 h-8"
            fill="white"
            onClick={handleOpenMenu}
          />
        )}
      </div>
      <div
        className={`w-full bg-slate-950  items-center p-3 justify-center transition-all ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            navigate("/profile");
            setIsOpen(false);
          }}
          className="px-6 p-3 bg-white rounded-lg"
        >
          My Profile
        </button>
      </div>
    </div>
  );
};

export default Header;
