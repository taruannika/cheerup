/* eslint-disable react-refresh/only-export-components */
import { createContext, useRef, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [compliments, setCompliments] = useState([]);
  const [dateideas, setDateideas] = useState([]);
  const [favors, setFavors] = useState([]);
  const [modalContent, setModalContent] = useState("");
  const modalRef = useRef(null);

  return (
    <AppContext.Provider
      value={{
        selectedChoice,
        setSelectedChoice,
        compliments,
        setCompliments,
        dateideas,
        setDateideas,
        favors,
        setFavors,
        modalRef,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
