import React, { useEffect } from "react";
import WFMPopupHOC from "../Redux/HOC/WFMPopupHOC";
import { wfmData }  from "../datatype";


const WfmGrid = ({empList, username, token, openModal, getEmployee, setSelectedSoftlock}: any) => {
    
    useEffect(()=>{
        getEmployee({username:username, token:token})
    }, [username])

    return (
        <>
        {openModal && <WFMPopupHOC></WFMPopupHOC>}
        <div className="container">
            <h3>Work Force Manager: {username}</h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Requestee</th>
                    <th>Requested Date</th>
                    <th>Employee Manager</th>
                    <th>Approve Softlock</th>
                </tr>
            </thead>
            <tbody>
               {empList && empList.map((soft:wfmData)=> {
                   return (
                       <tr key={soft.lockid}>
                           <td>{soft.employee_id}</td>
                           <td>{soft.manager}</td>
                           <td>{soft.reqdate}</td>
                           <td>{soft.employee ? soft.employee.wfm_manager: ''}</td>
                           <td><button 
                                            className="btn btn-info"
                                            onClick={
                                                (e)=>{
                                                        setSelectedSoftlock({buttonLabel: "Submit", selectedSoftlock:{
                                                                                                             lockid: soft.lockid,
                                                                                                             employee_id: soft.employee_id,
                                                                                                             manager: soft.manager,
                                                                                                             wfm_manager: soft.employee ? soft.employee.wfm_manager: '',
                                                                                                             requestmessage: soft.requestmessage
                                                                                                             }})
                                                      }
                                                    }
                                            >View Detail</button></td>
                       </tr>
                   )
               })} 
            </tbody>
        </table>
        </div>
        </>
    )
}

export default WfmGrid;