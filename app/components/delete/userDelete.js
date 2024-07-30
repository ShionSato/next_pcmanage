import { AllContext } from "@/app/contexts/MyContext"
import { useContext, useState } from "react"
import axios from "axios";
export default function UserDelete(){
    const { detail, setStatus } = useContext(AllContext);
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }

    const handleSubmit = () =>{
        if (!isChecked) {
            alert("削除確認チェックをしてください");
        }else{
            axios.post('http://localhost:8080/userdelete', detail)
            .then(response => {
                setStatus(null);
                alert(response.data)
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
        }
        
    }
    return(
        <>
            <div className="row mb-3 justify-content-center">
                <h5 className="col-md-6">{detail.employeeNo}を削除しますか？</h5>
            </div>
            <div className="row mb-3 justify-content-center">
                <label for="password" class="col-md-5 col-form-label fw-bold">
                    削除確認チェック <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="checkbox" className="col-md-4 form-check-input" value='true' style={{height: "26px"}} onChange={handleCheckboxChange}/>
            </div>
            <div class="row g-3 needs-validation  justify-content-center" novalidate>
                <div class="col-md-6">
                    <div class="d-flex justify-content-between">
                        <button type="button" class="btn btn-secondary" onClick={()=>setStatus("detail")}>
                            <i class="fa-solid fa-reply"></i> キャンセル
                        </button>
                        <button type="button" class="btn btn-outline-danger" onClick={handleSubmit}>
                            <i class="fa-solid fa-trash"></i> 削除
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}