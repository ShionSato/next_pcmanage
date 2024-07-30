
import { useContext } from "react";
import { AllContext } from "@/app/contexts/MyContext";
import DeviceRegist from "./deviceRegist";
import UserRegist from "./userRegist";
export default function Regist() {
  const {list} = useContext(AllContext)
  const renderRegist = () => {
    switch (list) {
      case "user":
        return <UserRegist />;
      case "device":
        return <DeviceRegist />;
      default:
        return null;
    }
  };
  
    return <>{renderRegist()}</>;
  }