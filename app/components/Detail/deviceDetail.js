import { AllContext } from "@/app/contexts/MyContext";
import React, { useContext } from "react";
 
export default function DeviceDetail() {
	const {detail, setStatus} = useContext(AllContext)
    return (
        <>
            <div class="card-body">
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">資産番号</label>
						<div class="col-md-4">{detail.assetNo}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">メーカー</label>
                        <div class="col-md-4">{detail.maker}</div>
                    </div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">OS</label>
						<div class="col-md-4">{detail.os}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">メモリ</label>
						<div class="col-md-4">{detail.memory}GB</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">容量</label>
						<div class="col-md-4">{detail.capacity}GB</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">GPU</label>
						<div class="col-md-4">{detail.graphicsBoard ? 'あり' : 'なし'}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">保管場所</label>
						<div class="col-md-4">{detail.storageLocation}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">棚卸日</label>
						<div class="col-md-4">{detail.inventoryDate}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">利用</label>
						<div class="col-md-4">{detail.defect ? (
                                    <span style={{color: 'red'}}>故障</span>
                                ) : detail.statusUse === 1 ? (
                                    '可'
                                ) : (
                                    <span style={{color: 'green'}}>貸出中</span>
                                )}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">リース開始日</label>
						<div class="col-md-4">{detail.startLease}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">リース終了日</label>
						<div class="col-md-4">{detail.limitLease}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">備考</label>
						<div class="col-md-4">{detail.remarks}</div>
					</div>
					<div class="row mb-3 justify-content-center">
						<label for="disabledTextInput" class="col-md-4 col-form-label fw-bold">登録日</label>
						<div class="col-md-4">{detail.registerDate}</div>
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
