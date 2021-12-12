import React, { useState } from "react";
import { Modal } from "../Popup";
import { ModalBody } from "../Popup";
import { ModalHead } from "../Popup";


const ManagerModal = ({token, buttonLabel, selectedEmployee, buttonAction, setShowModal}:any) => {
    const [message, setMessage] = useState("");
    return (
        <Modal token={token} buttonLabel={buttonLabel} selectedEmployee={selectedEmployee} message={message} buttonAction={buttonAction} setShowModal={setShowModal}>
            <ModalHead header="Employee Lock Request" setShowModal={setShowModal}></ModalHead>
            <ModalBody>
                <form>
                    <div className="mb-3">
                        <label className="col-form-label">Please confirm the lock request for <b>{selectedEmployee}</b></label>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Request Message (message must be atleat 10 char long):</label>
                        <textarea className="form-control" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    );
   
}

export default ManagerModal;