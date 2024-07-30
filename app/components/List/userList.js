import { AllContext } from "@/app/contexts/MyContext";
import React, { useContext, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function UserList() {
    const {setDetail, setStatus} = useContext(AllContext)
    const [selectedRow, setSelectedRow] = useState(null);
    const { data, error, isLoading } = useSWR('http://localhost:8080/userlist', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    
    const handleRowClick = (user, index) => {
        setDetail(user);
        setStatus("detail");
        setSelectedRow(index);
    };
    return (
        <>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<button class="btn btn-outline-success" onClick={()=>{setStatus("regist"); setSelectedRow(null)}}>
						<i class="fa-solid fa-square-plus"></i> 新規登録
					</button>
				</div>
        <div className="overflow-auto" style={{ height: '85vh' }}>
            <table className="table table-bordered table-hover" style={{ backgroundColor: 'hsl(90, 100%, 100%)' }}>
                <thead>
                    <tr style={{ backgroundColor: '#c9ffc9' }} className="sticky-top">
                        <th>社員番号</th>
                        <th scope="col">氏名</th>
                        <th scope="col">所属</th>
                        <th scope="col">電話番号</th>
                        <th scope="col">メールアドレス</th>
                        <th scope="col">登録日</th>
                        <th scope="col">更新日</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((user, index) => (
                    <tr 
                        key={user.employeeNo} 
                        onClick={()=>{handleRowClick(user, index)}}
                        style={{ backgroundColor: selectedRow === index ? '#00ff7f' : 'transparent' }}
                    >
                        <td>{user.employeeNo}</td>
                        <td>{user.name}</td>
                        <td>{user.department}</td>
                        <td>{user.telNo}</td>
                        <td>{user.mailAddress}</td>
                        <td>{user.registerDate}</td>
                        <td>{user.updateDate}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    );
}
