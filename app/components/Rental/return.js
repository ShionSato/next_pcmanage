import { AllContext } from "@/app/contexts/MyContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios";
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Return(){
    const { detail, setDetail, setStatus } = useContext(AllContext);
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }

    const handleSubmit = () =>{
        if (!isChecked) {
            alert("返却確認チェックをしてください");
        }else{
            axios.post('http://localhost:8080/return', detail)
            .then(response => {
                setStatus("detail");
                setDetail(response.data)
                alert("返却完了")
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
        }
        
    }
    
    return (
        <>
        <div className="row mb-3 justify-content-center">
                <h5 className="col-md-6">{detail.assetNo}を返却しますか？</h5>
            </div>
            <div className="row mb-3 justify-content-center">
                <label for="password" class="col-md-5 col-form-label fw-bold">
                    返却確認チェック <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="checkbox" className="col-md-4 form-check-input" value='true' style={{height: "26px"}} onChange={handleCheckboxChange}/>
            </div>
            <div class="row g-3 needs-validation  justify-content-center" novalidate>
                <div class="col-md-6">
                    <div class="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={()=>setStatus("detail")}>
                            <i className="fa-solid fa-reply"></i> キャンセル
                        </button>
                        <button type="button" className="btn btn-outline-danger" onClick={handleSubmit}>
							<i className="fa-solid fa-arrow-up"/> 返却
						</button>
                    </div>
                </div>
            </div>
        </>
    )
}