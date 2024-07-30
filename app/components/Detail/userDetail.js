import { AllContext } from "@/app/contexts/MyContext";
import React, { useContext } from "react";

export default function UserDetail() {
	const {detail, setStatus} = useContext(AllContext)
    return (
        <>
            <div class="card-body">
					<div class="row mb-2 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">社員番号</label>
						<div class="col-md-4">{detail.employeeNo}</div>
					</div>
					<div class="row mb-2 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">氏名</label>
                        <div class="col-md-4">{detail.name}</div>
                    </div>
					<div class="row mb-2 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">氏名(カタカナ)</label>
						<div class="col-md-4">{detail.nameKana}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">年齢</label>
						<div class="col-md-4">{detail.age}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">性別</label>
						<div class="col-md-4">{detail.gender===0 ? '男性':
						detail.gender===1 ? '女性' : 'その他'
						}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">電話番号</label>
						<div class="col-md-4">{detail.telNo}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">メールアドレス</label>
						<div class="col-md-4">{detail.mailAddress}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">所属</label>
						<div class="col-md-4">{detail.department}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">役職</label>
						<div class="col-md-4">{detail.position}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">ユーザー種別</label>
						<div class="col-md-4">{detail.accountLevel ? '管理者': '利用者'}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">登録日</label>
						<div class="col-md-4">{detail.registerDate}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">退職日</label>
						<div class="col-md-4">{detail.retireDate}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">更新日</label>
						<div class="col-md-4">{detail.updateDate}</div>
					</div>
		    </div>
            <div class="row g-3 needs-validation  justify-content-center" novalidate>
					<div class="col-md-6">
						<div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-outline-success" onClick={()=>setStatus("edit")}>
                                <i class="fa-solid fa-pen-to-square"></i> 編集
                            </button>
                            <button type="button" class="btn btn-outline-danger" onClick={()=>setStatus("delete")}>
                                <i class="fa-solid fa-trash"></i> 削除
                            </button>
                        </div>
                    </div>
            </div>
        </>
    );
}
