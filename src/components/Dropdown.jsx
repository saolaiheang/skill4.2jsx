
import React, { useState, useEffect } from 'react';
import { getProvince } from "../api/dropdown";

function Dropdownprovince(){
    const [provinces,setProvince]=useState();
    useEffect(()=>{
        const fecthProvince = async () =>{
            try{
                
                const data =await getProvince();
                setProvince(data);
                return res.data;
            }catch(error){
                console.error('error fetching accounts data',error);
            }
        }
        fecthProvince();
    },[]);
    return(
        <div className="dropDownactive">
      <div className="select">
        <select>
          <option>All</option>
          {provinces.map((province) => (
            <option key={province.id}>{province.name}</option>
          ))}
        </select>
      </div>
    
    </div>
  );
    
    
}
export default Dropdownprovince;