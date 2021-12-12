import ManagerHOC from "../Redux/HOC/ManagerHOC";
const ManagerHome=()=>{
    return (
        <>
           <ManagerHOC></ManagerHOC>
         </>
          
    )
}

export default ManagerHome

function Logout() {
    localStorage.clear();
}
