import React, { useEffect } from "react";
import ManagerPopupHOC from "../Redux/HOC/ManagerPopupHOC";
import { managerEmp} from "../datatype";
import { skill } from "../datatype";
import Skill from "./Skill";




const ManagerGrid = ({empList, username, token, openModal, getEmployee, setSelectedEmployee}: any) => {
    useEffect(()=>{
        getEmployee({username:username, token:token})
    }, [username])
    return (
        <>
        {openModal && <ManagerPopupHOC></ManagerPopupHOC>}
        <div className="container">
            <h3>Manager: {username}</h3>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Employee_Id</th>
                        <th>Employee Name</th>
                        <th>Skills</th>
                        <th>Experience in years</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {empList && empList.map((emp:managerEmp)=> {
                   return (
                       <tr key={emp.employee_id}>
                           <td>{emp.employee_id}</td>
                           <td>{emp.name}</td>
                           <td>{emp.skills && emp.skills.map((skl:skill)=>{
                               return(<Skill key={skl.skillid}>{skl.name}</Skill>)
                           })}</td>
                           <td>{emp.experience}</td>
                           <td><button 
                                            className="btn btn-info" 
                                            onClick={
                                                (e)=>{
                                                        setSelectedEmployee({openModal: true, buttonLabel: "Send Request", selectedEmployee:emp.employee_id})
                                                      }
                                                    }>Request Lock</button></td>
                       </tr>
                   )
               })} 
                    </tbody>
                </table>
                </div>
        </>
    )
}

export default ManagerGrid;