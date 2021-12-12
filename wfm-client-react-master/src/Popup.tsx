import React from "react";

const Modal = ({token, selectedEmployee, selectedSoftlock, message, status, buttonLabel, setShowModal, buttonAction, children}:any) => {
    return (<div className="modal" style={{display:"block"}}>
    <div className="modal-dialog">
      <div className="modal-content">
        {children}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={()=>{setShowModal(false)}}>Close</button>
            {selectedEmployee && <button type="button" className="btn btn-primary" onClick={()=>{buttonAction(token, selectedEmployee, message)}}>{buttonLabel}</button>}
            {selectedSoftlock && <button type="button" className="btn btn-primary" onClick={()=>{buttonAction(token, status, selectedSoftlock)}}>{buttonLabel}</button>}
        </div>
      </div>
    </div>
  </div>);
}

const ModalBody = ({children}:any) => {
    return (<div className="modal-body">
      {children}
  </div>);
}

const ModalHead = ({header, setShowModal}:any) => {
    return (<div className="modal-header">
    <h5 className="modal-title">{header}</h5>
    <button type="button" className="btn-close" onClick={()=>{setShowModal(false)}}></button>
  </div>);
}

export  {ModalHead};
export  {ModalBody};
export  {Modal};