import { AllContext } from "@/app/contexts/MyContext";
import React, { useContext } from "react";
 
export default function RentalDetail() {
	const {detail, setStatus} = useContext(AllContext)
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
                return <span style={{color: "red"}}>{dueDate} 期限超過</span>;
            }
        }
	};
    return (
        <>
            <div class="card-body">
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">資産番号</label>
						<div class="col-md-4">{detail.assetNo}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">メーカー</label>
                        <div class="col-md-4">{detail.maker}</div>
                    </div>
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">OS</label>
						<div class="col-md-4">{detail.os}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">GPU</label>
						<div class="col-md-4">{detail.graphicsBoard ? 'あり' : 'なし'}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">棚卸日</label>
						<div class="col-md-4">2021/03/01</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">機器備考</label>
						<div class="col-md-4">{detail.remarks}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">貸出ステータス</label>
						<div class="col-md-4">{detail.statusUse===1 ? '空き':(
                                    <span style={{color: 'green'}}>貸出中</span>
                                )}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">借りている人</label>
						<div class="col-md-4">{detail.userNo}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">貸出開始日</label>
						<div class="col-md-4">{detail.checkoutDate}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlhtmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">返却予定日</label>
						<div class="col-md-4">{dueDateCheck(detail.dueDate)}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label htmlhtmlfor="disabledTextInput" class="col-md-4 col-form-label fw-bold">貸出備考</label>
						<div class="col-md-4">{detail.remark}</div>
					</div>
		    </div>
            <div class="row g-3 needs-validation  justify-content-center" novalidate>
				<div class="col-md-6 d-flex justify-content-center">
					{detail.statusUse===1 ? (
						<button type="button" class="btn btn-outline-success" onClick={()=>setStatus("rental")}>
							<i class="fa-solid fa-arrow-down"></i> 貸出
						</button>
					) : (
						<>
							<button type="button" className="btn btn-outline-success me-2" onClick={() => setStatus("edit")}>
								<i className="fa-solid fa-edit" /> 編集
							</button>
							<button type="button" className="btn btn-outline-danger" onClick={() => setStatus("return")}>
								<i className="fa-solid fa-arrow-up"/> 返却
							</button>
						</>
					)
				}
					
					
				</div>
        	</div>
        </>
    );
}
