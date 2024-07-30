import { AllContext } from "@/app/contexts/MyContext"
import { useContext, useEffect, useState } from "react"
import useSWR from "swr";
import axios from "axios";
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Rental(){
    const {detail, setDetail, setStatus} = useContext(AllContext);
    const { data, error, isLoading } = useSWR('http://localhost:8080/userlist', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const [formData, setFormData] = useState({
        assetNo: detail.assetNo,
        employeeNo: "",
        dueDate: "",
        remarks: "",
        statusUse: "0"
    });

    useEffect(() => {
        if (detail && detail.assetNo) {
            setFormData((prevData) => ({
                ...prevData,
                assetNo: detail.assetNo
            }));
        }
    }, [detail]);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : (type === 'radio' ? value === 'true' : value)
        }));
    };

    useEffect(() => {
        if (data && data.length > 0) {
            setFormData(prevData => ({
                ...prevData,
                employeeNo: data[0].employeeNo
            }));
        }
    }, [data]);

    const handleSubmit = () => {
        const requiredFields = {
            employeeNo: "借りるユーザー",
            dueDate: "返却予定日"
        };
        const emptyFields = Object.keys(requiredFields).filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            const errorMessage = `必須項目に入力されていません: ${emptyFields.map(field => requiredFields[field]).join(', ')}`;
            alert(errorMessage);
            return; 
        }
        axios.post('http://localhost:8080/rental', formData)
            .then(response => {
                setDetail(response.data);
                setStatus("detail");
                alert("貸出完了")
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
    };
    
    return (
        <>
        <div class="row mb-3 justify-content-center">
            <div class="col-md-8">
                <label for="employeeNo" class="form-label">
                    借りるユーザー<span style={{ color: 'red' }}>*</span>
                </label>
                <select class="form-select" aria-label="employeeNo" id="employeeNo" name="employeeNo" onChange={handleChange}>
                    {data && data.map(user => (
                            <option key={user.employeeNo} value={user.employeeNo}>{user.name}</option>
                    ))}
                </select>
            </div>

            <div class="col-md-8">
                <label for="dueDate" class="form-label">
                    返却予定日 <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="date" class="form-control" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} required/>
            </div>
            <div class="col-md-8">
                <label for="remarks" class="form-label">貸出備考</label>
                <input type="text" class="form-control" id="remarks" name="remarks" value={formData.remarks} onChange={handleChange}/>
            </div>
        </div>
        <div className="row g-3 needs-validation justify-content-center" noValidate>
                <div className="col-md-6">
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-secondary" onClick={()=>setStatus("detail")}>
                            <i className="fa-solid fa-reply"></i> キャンセル
                        </button>
                        <button type="button" className="btn btn-outline-success" onClick={handleSubmit}>
                            <i className="fa-solid fa-check"></i> 確認
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}