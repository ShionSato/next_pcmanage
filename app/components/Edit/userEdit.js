import { AllContext } from "@/app/contexts/MyContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
export default function UserEdit() {
	const {detail, setDetail,setStatus} = useContext(AllContext)
	const [formData, setFormData] = useState({
        employeeNo: '',
        name: '',
        nameKana: '',
        gender: '',
        age: '',
        telNo: '',
        mailAddress: '',
        department: '',
        position: '',
        accountLevel: '',
    });

    useEffect(() => {
        setFormData({
        employeeNo: detail.employeeNo,
        name: detail.name,
        nameKana: detail.nameKana,
        gender: String(detail.gender),
        age: detail.age,
        telNo: detail.telNo,
        mailAddress: detail.mailAddress,
        department: detail.department,
        position: detail.position,
        accountLevel: String(detail.accountLevel),
        });
    }, [detail]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = () => {
        const requiredFields = {
            name: "氏名",
            age: "年齢",
            gender: "性別",
            accountLevel: "ユーザー種別"
        };
        const emptyFields = Object.keys(requiredFields).filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            const errorMessage = `必須項目に入力されていません: ${emptyFields.map(field => requiredFields[field]).join(', ')}`;
            alert(errorMessage);
            return; 
        }
        axios.post('http://57.181.17.181:8080/useredit', formData)
            .then(response => {
                console.log(response.data);
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
                    <label htmlFor="name" className="col-md-4 col-form-label fw-bold">
                        氏名<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="nameKana" className="col-md-4 col-form-label fw-bold">
                        氏名（カナ）
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="nameKana"
                        value={formData.nameKana}
                        onChange={handleChange}
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="age" className="col-md-4 col-form-label fw-bold">
                        年齢<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="number"
                        className="col-md-4"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div class="row mb-3 justify-content-center">
                    <label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">性別<span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-4">
                        <div class="form-check form-check-inline">
                            <input id="gender1" name="gender" type="radio" className="form-check-input" value="0" checked={String(formData.gender)==='0'} onChange={handleChange}/>
                            <label for="gender1" className="form-check-label">男性</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="gender2" name="gender" type="radio" className="form-check-input" value="1" checked={String(formData.gender)==="1"} onChange={handleChange}/>
                            <label for="gender2" className="form-check-label">女性</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="gender3" name="gender" type="radio" className="form-check-input" value="2" checked={String(formData.gender)==="2"} onChange={handleChange}/>
                            <label for="gender3" className="form-check-label">その他</label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="telNo" className="col-md-4 col-form-label fw-bold">
                        電話番号
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="telNo"
                        value={formData.telNo}
                        onChange={handleChange}
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="mailAddress" className="col-md-4 col-form-label fw-bold">
                        メールアドレス
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="mailAddress"
                        value={formData.mailAddress}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="department" className="col-md-4 col-form-label fw-bold">
                        所属
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="position" className="col-md-4 col-form-label fw-bold">
                        役職
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="row mb-3 justify-content-center">
                    <label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">ユーザー種別<span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-4">
                        <div class="form-check form-check-inline">
                            <input id="accountLevel1" name="accountLevel" type="radio" className="form-check-input" value="true" checked={String(formData.accountLevel)==='true'}  onChange={handleChange}/>
                            <label for="accountLevel1" className="form-check-label">管理者</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="accountLevel2" name="accountLevel" type="radio" className="form-check-input" value="false" checked={String(formData.accountLevel)==='false'}  onChange={handleChange}/>
                            <label for="accountLevel2" className="form-check-label">利用者</label>
                        </div>
                    </div>
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
