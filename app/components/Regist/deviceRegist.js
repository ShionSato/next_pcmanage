import { AllContext } from "@/app/contexts/MyContext";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

export default function DeviceRegist() {
    const { setStatus } = useContext(AllContext);

    const [formData, setFormData] = useState({
        assetNo: '',
        maker: '',
        os: '',
        memory: '',
        capacity: '',
        graphicsBoard: false,
        storageLocation: '',
        inventoryDate: '',
        defect: false,
        startLease: '',
        limitLease: '',
        remarks: '',
        statusUse:'1'
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : (type === 'radio' ? value === 'true' : value)
        }));
    };

        const handleSubmit = () => {
            console.log(formData)
        const requiredFields = {
            assetNo: '資産番号',
            memory: 'メモリ',
            capacity: '容量',
            storageLocation: '保管場所',
            inventoryDate: '棚卸日',
            startLease: 'リース開始日',
            limitLease: 'リース終了日',
        };
        const emptyFields = Object.keys(requiredFields).filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            const errorMessage = `必須項目に入力されていません: ${emptyFields.map(field => requiredFields[field]).join(', ')}`;
            alert(errorMessage);
            return; 
        }
        axios.post('http://57.181.17.181:8080/devicecreate', formData)
            .then(response => {
                if(response.data==="assetNo error"){
                    alert("すでに登録されている資産番号です")
                }else{
                    setStatus(null);
                    alert("登録完了")
                }   
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
    };

    return (
        <>
            <div className="card-body">
            <div className="row mb-3 justify-content-center">
                    <label htmlFor="assetNo" className="col-md-4 col-form-label fw-bold">
                        資産番号<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="assetNo"
                        value={formData.assetNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="maker" className="col-md-4 col-form-label fw-bold">
                        メーカー
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="maker"
                        value={formData.maker}
                        onChange={handleChange}
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="os" className="col-md-4 col-form-label fw-bold">
                        OS
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="os"
                        value={formData.os}
                        onChange={handleChange}
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="memory" className="col-md-4 col-form-label fw-bold">
                        メモリ<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="number"
                        className="col-md-4"
                        name="memory"
                        value={formData.memory}
                        onChange={handleChange}
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="capacity" className="col-md-4 col-form-label fw-bold">
                        容量<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="number"
                        className="col-md-4"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="graphicsBoard" className="col-md-4 col-form-label fw-bold">
                        GPU
                    </label>
                    <div className="col-md-4">
                        <div className="form-check form-check-inline">
                            <input
                                id="GPU1"
                                name="graphicsBoard"
                                type="radio"
                                className="form-check-input"
                                value='true'
                                checked={formData.graphicsBoard===true}
                                onChange={handleChange}
                            />
                            <label htmlFor="GPU1" className="form-check-label">あり</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                id="GPU2"
                                name="graphicsBoard"
                                type="radio"
                                className="form-check-input"
                                value='false'
                                checked={formData.graphicsBoard===false}
                                onChange={handleChange}
                            />
                            <label htmlFor="GPU2" className="form-check-label">なし</label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="storageLocation" className="col-md-4 col-form-label fw-bold">
                        保管場所<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="col-md-4"
                        name="storageLocation"
                        value={formData.storageLocation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="inventoryDate" className="col-md-4 col-form-label fw-bold">
                        棚卸日<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="date"
                        className="col-md-4"
                        name="inventoryDate"
                        value={formData.inventoryDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="defect" className="col-md-4 col-form-label fw-bold">
                        利用
                    </label>
                    <div className="col-md-4">
                        <div className="form-check form-check-inline">
                            <input
                                id="defect1"
                                name="defect"
                                type="radio"
                                className="form-check-input"
                                value="false"
                                checked={formData.defect === false}
                                onChange={handleChange}
                            />
                            <label htmlFor="defect1" className="form-check-label">可</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                id="defect2"
                                name="defect"
                                type="radio"
                                className="form-check-input"
                                value="true"
                                checked={formData.defect === true}
                                onChange={handleChange}
                            />
                            <label htmlFor="defect2" className="form-check-label">故障</label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="startLease" className="col-md-4 col-form-label fw-bold">
                        リース開始日<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="date"
                        className="col-md-4"
                        name="startLease"
                        value={formData.startLease}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row mb-3 justify-content-center">
                    <label htmlFor="limitLease" className="col-md-4 col-form-label fw-bold">
                        リース終了日<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="date"
                        className="col-md-4"
                        name="limitLease"
                        value={formData.limitLease}
                        onChange={handleChange}
                        required
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
            <div className="row g-3 needs-validation justify-content-center" noValidate>
                <div className="col-md-6">
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-secondary" onClick={()=>setStatus(null)}>
                            <i className="fa-solid fa-reply"></i> キャンセル
                        </button>
                        <button type="button" className="btn btn-outline-success" onClick={handleSubmit}>
                            <i className="fa-solid fa-check"></i> 確認
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}