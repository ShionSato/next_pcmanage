
import { useContext } from "react";
import { AllContext } from "@/app/contexts/MyContext";
import Detail from "../Detail/detail";
import Edit from "../Edit/Edit";
import Regist from "../Regist/regist";
import Delete from "../delete/delete";
import Rental from "../Rental/rental";
import Return from "../Rental/return";

export default function Status() {
    const {status} = useContext(AllContext);
    if(status===null){
      return null;
    }
    const renderList = () => {
      switch (status) {
        case "detail":
          return <Detail/>;
        case "edit":
          return <Edit/>;
        case "regist":
          return <Regist/>;
        case "delete":
          return <Delete/>;
        case "rental":
          return <Rental/>;
        case "return":
          return <Return/>;
        default:
          return null;
      }
    };
  
    return <>{renderList()}</>;
  }