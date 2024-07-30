import RentalDetail from "./rentalDetail";
import UserDetail from "./userDetail";
import DeviceDetail from "./deviceDetail";
import { useContext } from "react";
import { AllContext } from "@/app/contexts/MyContext";

export default function Detail() {
  const {list} = useContext(AllContext)
  const renderDetail = () => {
    switch (list) {
      case "rental":
        return <RentalDetail />;
      case "user":
        return <UserDetail />;
      case "device":
        return <DeviceDetail />;
      default:
        return null;
    }
  };
  
    return <>{renderDetail()}</>;
  }