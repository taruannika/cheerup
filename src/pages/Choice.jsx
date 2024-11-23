import { useContext } from "react";
import Compliment from "../components/Compliment";
import Dateideas from "../components/Dateideas";
import Favor from "../components/Favor";
import { AppContext } from "../context/AppContext";

const Choice = () => {
  const { selectedChoice } = useContext(AppContext);
  const renderContent = () => {
    switch (selectedChoice) {
      case "compliments":
        return <Compliment />;
      case "dateideas":
        return <Dateideas />;
      case "favor":
        return <Favor />;
    }
  };
  return renderContent();
};

export default Choice;
