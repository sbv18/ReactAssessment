export type skill = {
    skillid: number;
    name: string;
}
export type profile1 = {
    profile_id: number;
    name: string;
}

export type managerEmp = {
    employee_id: number;
    name: string;
    status: string;
    manager:string;
    wfm_manager:string;
    experience:string;
    skills: skill[];
}


export type wfmData = {
    lockid:number,
    employee_id: number;
    manager:string;
    employee:managerEmp;
    reqdate:string;
    requestmessage: string;
}