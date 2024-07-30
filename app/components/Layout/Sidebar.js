import React from "react";
import styles from "./sidebar.module.css"
import List from "../List/list";
import { useContext } from "react";
import { AllContext } from "@/app/contexts/MyContext";
export default function Sidebar() {
    const {setList, setStatus} = useContext(AllContext)
    return (
        <div className = {styles.sidebar}>
            <ul className={styles.navber}>
                <li className={styles.navitem}>
                    <button type="submit" className={styles.btn} onClick={()=>{ setList("user");setStatus(null)}}>
                        <i class="fa-solid fa-users"></i> <br></br>user
                    </button>
                </li>
                <li className={styles.navitem}>
                    <button type="submit" className={styles.btn} onClick={()=>{setList("device");setStatus(null)}}>
                        <i class="fa-solid fa-computer"></i> <br></br>device
                    </button>
                </li>
                <li className={styles.navitem}>
                    <button type="submit" className={styles.btn} onClick={()=>{setList("rental");setStatus(null)}}>
                        <i class="fa-solid fa-truck-ramp-box"></i> <br></br>rental
                    </button>
                </li>
            </ul>
        </div>
    );
}