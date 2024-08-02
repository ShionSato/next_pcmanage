import { AllContext } from "@/app/contexts/MyContext";
import React, { useContext, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function RentalList() {
    const [selectedRow, setSelectedRow] = useState(null);
    const { data, error, isLoading } = useSWR('http://57.181.17.181:8080/rentallist', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    const {setDetail, setStatus} = useContext(AllContext)

    const dueDateCheck =(dueDate)=>{
        const currentDate = new Date();
        const dueDateObj = new Date(dueDate)
        currentDate.setHours(0, 0, 0, 0);
        dueDateObj.setHours(0, 0, 0, 0);
        if(dueDate === null){
           return null; 
        }else{
            if(currentDate<=dueDateObj){
                return dueDate;
            }else{
                return <span style={{color: "red"}}>期限超過</span>;
            }
        }
       
    }
    const handleRowClick = (device, index) => {
        setDetail(device);
        setStatus("detail");
        setSelectedRow(index);
    };

    return (
        <div className="overflow-auto" style={{ height: '85vh' }}>
                    <table className="table table-bordered table-hover" style={{ backgroundColor: 'hsl(90, 100%, 100%)' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#c9ffc9' }} className="sticky-top">
                            <th>資産番号</th>
								<th scope="col">メーカー</th>
								<th scope="col">OS</th>
								<th scope="col">棚卸日</th>
								<th scope="col">貸出状況</th>
								<th scope="col">借りた人</th>
								<th scope="col">貸出開始日</th>
								<th scope="col">返却予定日</th>
								<th scope="col">備考</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data && data.map((device, index) => (
                        <tr 
                        key={device.assetNo} 
                        onClick={()=>handleRowClick(device, index)}
                        style={{ backgroundColor: selectedRow === index ? '#00ff7f' : 'transparent' }}>
                            <td>{device.assetNo}</td>
                            <td>{device.maker}</td>
                            <td>{device.os}</td>
                            <td>{device.inventoryDate}</td>
                            <td>{device.statusUse === 1 ? ('可') : 
                                (<span style={{color: 'green'}}>貸出中</span>)}
                            </td>
                            <td>{device.userNo}</td>
                            <td>{device.checkoutDate}</td>
                            <td>{dueDateCheck(device.dueDate)}</td>
                            <td>{device.remark}</td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
    );
}