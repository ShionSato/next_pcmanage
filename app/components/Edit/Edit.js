
import { useContext } from "react";
import { AllContext } from "@/app/contexts/MyContext";
import DeviceEdit from "./deviceEdit";
import UserEdit from "./userEdit";
import RentalEdit from "./rentalEdit";

export default function Edit() {
  const {list} = useContext(AllContext)
  const renderEdit = () => {
    switch (list) {
      case "rental":
        return <RentalEdit />;
      case "user":
        return <UserEdit />;
      case "device":
        return <DeviceEdit />;
      default:
        return null;
    }
  };
  
    return <>{renderEdit()}</>;
  }