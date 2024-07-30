import UserList from "./userList"
import DeviceList from "./deviceList"
import RentalList from "./rentalList"

import { useContext } from "react";
import { AllContext } from "@/app/contexts/MyContext";

export default function List() {
    const {list, setDetail} = useContext(AllContext);
    const renderList = () => {
      switch (list) {
        case "rental":
          return <RentalList setDetail={setDetail}/>;
        case "user":
          return <UserList setDetail={setDetail}/>;
        case "device":
          return <DeviceList setDetail={setDetail}/>;
        default:
          return null;
      }
    };
  
    return <>{renderList()}</>;
  }