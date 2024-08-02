import React, { useContext, useState } from "react";
import useSWR from "swr";
import DeviceDetail from "../Detail/deviceDetail";
import { AllContext } from "@/app/contexts/MyContext";
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function DeviceList() {
    const [selectedRow, setSelectedRow] = useState(null);
    const { data, error, isLoading } = useSWR('http://57.181.17.181:8080/devicelist', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    const {setDetail, setStatus} = useContext(AllContext)
    const handleRowClick = (device, index) => {
        setDetail(device);
        setStatus("detail");
        setSelectedRow(index);
    };
    return (
        <>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<button class="btn btn-outline-success" onClick={()=>{setStatus("regist"), setSelectedRow(null)}}>
						<i class="fa-solid fa-square-plus"></i> 新規登録
					</button>
				</div>
        <div className="overflow-auto" style={{ height: '85vh' }}>
            <table className="table table-bordered table-hover" style={{ width: '120%', backgroundColor: 'hsl(90, 100%, 100%)' }}>
                <thead>
                    <tr style={{ backgroundColor: '#c9ffc9' }} className="sticky-top">
                        <th scope="col">資産番号</th>
                        <th scope="col">メーカー</th>
                        <th scope="col">OS</th>
                        <th scope="col">メモリ</th>
                        <th scope="col">容量</th>
                        <th scope="col">GPU</th>
                        <th scope="col">保管場所</th>
                        <th scope="col">棚卸日</th>
                        <th scope="col">利用</th>
                        <th scope="col">リース開始日</th>
                        <th scope="col">リース終了日</th>
                        <th scope="col">備考</th>
                        <th scope="col">登録日</th>
                        <th scope="col">更新日</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((device, index) => (
                    <tr 
                        key={device.assetNo} 
                        onClick={()=>{handleRowClick(device, index)}}
                        style={{backgroundColor: selectedRow === index ? '#00ff7f' : 'transparent' }}
                    >
                        <td>{device.assetNo}</td>
                        <td>{device.maker}</td>
                        <td>{device.os}</td>
                        <td>{device.memory}GB</td>
                        <td>{device.capacity}GB</td>
                        <td>{device.graphicsBoard ? 'あり': 'なし'}</td>
                        <td>{device.storageLocation}</td>
                        <td>{device.inventoryDate}</td>
                        <td>{device.defect ? (
                                    <span style={{color: 'red'}}>故障</span>
                                ) : device.statusUse === 1 ? (
                                    '可'
                                ) : (
                                    <span style={{color: 'green'}}>貸出中</span>
                                )}
                        </td>
                        <td>{device.startLease}</td>
                        <td>{device.limitLease}</td>
                        <td>{device.remarks}</td>
                        <td>{device.registerDate}</td>
                        <td>{device.updateDate}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}