import React, { useState } from "react";
import { Modal } from "../Popup";
import { ModalBody } from "../Popup";
import { ModalHead } from "../Popup";

const WfmModal = ({token, buttonLabel, selectedSoftlock, buttonAction, setShowModal}:any) => {
    const [status, setStatus] = useState("");
    return (
        <Modal token={token} buttonLabel={buttonLabel} selectedSoftlock={selectedSoftlock} status={status} buttonAction={buttonAction} setShowModal={setShowModal}>
            <ModalHead header="Status Update for Lock Request" setShowModal={setShowModal}></ModalHead>
            <ModalBody>
                <form>
                    <div className="mb-3">
                        <label className="col-form-label"><b>Employee Id</b>: {selectedSoftlock.employee_id}</label>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label"><b>Requestee</b>: {selectedSoftlock.manager}</label>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label"><b>Employee Manager</b>: {selectedSoftlock.wfm_manager}</label>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label"><b>Request Description</b>: <i>{selectedSoftlock.requestmessage}</i></label>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label"><b>Status:</b></label>
                        <select className="form-select" value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                            <option value="">Select</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    );
}

export default WfmModal;
