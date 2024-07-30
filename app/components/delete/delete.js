
import { useContext } from "react";
import { AllContext } from "@/app/contexts/MyContext";
import DeviceDelete from "./deviceDelete";
import UserDelete from "./userDelete";
export default function Delete() {
  const {list} = useContext(AllContext)
  const renderDelete = () => {
    switch (list) {
      case "user":
        return <UserDelete />;
      case "device":
        return <DeviceDelete />;
      default:
        return null;
    }
  };
  
    return <>{renderDelete()}</>;
  }