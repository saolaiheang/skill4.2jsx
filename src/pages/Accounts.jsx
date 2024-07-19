import React,{useEffect,useState} from "react";
import API_BASE_URL from "../config";
import '../styles/Farmers.css'
function Acconts(){
const [accounts,setAccounts]=useState([]);
useEffect(()=>{
    const fecthAccounts = async () =>{
        try{
            const res = await fetch(`${API_BASE_URL}/accounts`);
            const data =await res.json();
            setAccounts(data);
            return res.data;
        }catch(error){
            console.error('error fetching accounts data',error);
        }
    }
    fecthAccounts();
},[]);
return(
    <>
    <h1>Hello Accounts</h1>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>First_Name</th>
                <th>Last_Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>District_ID</th>
                <th>Province</th>

            </tr>
        </thead>
        <tbody>
            {accounts.map((account,index)=>(
                <tr key={account.id}>
                    <td>{index+1}</td>
                    <td>{account.first_name}</td>
                    <td>{account.last_name}</td>
                    <td>{account.email}</td>
                    <td>{account.password}</td>
                    <td>{account.district.name}</td>
                    <td>{account.province.name}</td>

                </tr>
            ))}
        </tbody>
    </table>
    </>
)
}
export default Acconts;