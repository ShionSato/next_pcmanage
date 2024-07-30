import { AllContext } from "@/app/contexts/MyContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios"; 

export default function RentalEdit() {
	const {detail, setDetail, setStatus} = useContext(AllContext)
	const [formData, setFormData] = useState({
		assetNo: "",
		dueDate: "",
        remarks: ""
	});

	const handleChange = (e) =>{
		const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : (type === 'radio' ? value === 'true' : value)
        }));
    };

	useEffect(() => {
        setFormData({
			assetNo: detail.assetNo,
			dueDate: detail.dueDate,
			remarks: detail.remark
        });
    }, [detail]);

	const handleSubmit = () =>{
		const requiredFields = {
            dueDate: "返却期限"
        };
        const emptyFields = Object.keys(requiredFields).filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            const errorMessage = `必須項目に入力されていません: ${emptyFields.map(field => requiredFields[field]).join(', ')}`;
            alert(errorMessage);
            return; 
        }
        axios.post('http://localhost:8080/lentedit', formData)
            .then(response => {
                setDetail(response.data);
                setStatus("detail");
                alert("編集完了")
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
    };

    return (
        <>
            <div class="card-body">
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="dueDate" className="col-md-4 col-form-label fw-bold">
                        返却期限<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="date"
                        className="col-md-4"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                    />
                </div>
				<div className="row mb-3 justify-content-center">
                    <label htmlFor="remarks" className="col-md-4 col-form-label fw-bold">
                        備考
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                    />
                </div>
		    </div>
            <div class="row g-3 needs-validation  justify-content-center" novalidate>
					<div class="col-md-6">
						<div class="d-flex justify-content-between">
                            <button type="button" class="btn  btn-secondary" onClick={()=>setStatus("detail")}>
                                <i class="fa-solid fa-reply"></i> キャンセル
                            </button>
                            <button type="button" class="btn btn-outline-success" onClick={handleSubmit}>
                                <i class="fa-solid fa-check"></i> 確認
                            </button>
                        </div>
                    </div>
            </div>
        </>
    );
}
