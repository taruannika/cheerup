import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { FaTrashCan } from "react-icons/fa6";

const ComplimentsModal = () => {
  const { modalRef, modalContent, compliments, dateideas, favors } =
    useContext(AppContext);

  const renderContent = () => {
    switch (modalContent) {
      case "compliments":
        return (
          <div className="flex flex-col gap-4">
            <p>Here are your compliments!</p>
            <div className="flex flex-col gap-2">
              {compliments.map((c) => (
                <div
                  key={c}
                  className="bg-slate-950 text-white p-3 rounded-lg flex flex-col gap-2 "
                >
                  <p className="text-xs">{c}</p>
                  <FaTrashCan />
                </div>
              ))}
            </div>
          </div>
        );
      case "dateideas":
        return (
          <div className="flex flex-col gap-4">
            <p>Here are your date ideas!</p>
            <div className="flex flex-col gap-2">
              {dateideas.map((c) => (
                <div
                  key={c}
                  className="bg-slate-950 text-white p-3 rounded-lg flex flex-col gap-2 "
                >
                  <p className="text-xs">{c}</p>
                  <FaTrashCan />
                </div>
              ))}
            </div>
          </div>
        );
      case "favors":
        return (
          <div className="flex flex-col gap-4">
            <p>Here are your favors!</p>
            <div className="flex flex-col gap-2">
              {favors.map((c) => (
                <div
                  key={c}
                  className="bg-slate-950 text-white p-3 rounded-lg flex flex-col gap-2 "
                >
                  <p className="text-xs">{c}</p>
                  <FaTrashCan />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <p>No content selected.</p>;
    }
  };

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        {renderContent()}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ComplimentsModal;
