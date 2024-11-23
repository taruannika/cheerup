import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { compliments, favors, dateideas, modalRef, setModalContent } =
    useContext(AppContext);
  const navigate = useNavigate();
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-6 p-3 ">
        <button
          onClick={() => {
            setModalContent("compliments");
            openModal();
          }}
          className="bg-slate-950 text-white px-8 py-3 rounded-lg"
        >
          <p>My favorite compliments</p>
          <p className="text-xs">you have {compliments.length} compliments</p>
        </button>
        <button
          onClick={() => {
            setModalContent("dateideas");
            openModal();
          }}
          className="bg-slate-950 text-white px-8 py-3 rounded-lg"
        >
          <p> Dates I want to go</p>
          <p className="text-xs">you have {dateideas.length} dates</p>
        </button>
        <button
          onClick={() => {
            setModalContent("favors");
            openModal();
          }}
          className="bg-slate-950 text-white px-8 py-3 rounded-lg"
        >
          <p>Favors I own you</p>
          <p className="text-xs">you have {favors.length} favors</p>
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-blue-500 text-white rounded-lg"
        >
          Back Home
        </button>
      </div>
      <Modal />
    </div>
  );
}

export default Profile;
