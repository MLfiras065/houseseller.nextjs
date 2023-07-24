"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import axios from "axios"

const Admin=()=>{
  const router = useRouter();
  const token =JSON.parse(localStorage.getItem("token"))
  const userRole = token?.role;
  console.log("token",token);
  const[data,setData]=useState([])
  const[update,setUpdate]=useState('')
  const fetch=()=>{
    axios.get("http://localhost:3001/api/user/").then((response)=>{
       setData(response.data)
          console.log(response.data);
      
     }).catch((err)=>console.log(err)
  )
}
  if(userRole!=="Admin"){
    router.push("/404")
    }
  const fetchCustomer=()=>{
    axios.get("http://localhost:3001/api/Customer/").then((response)=>{
      setUpdate(response.data)
      console.log("customer",response.data);
      
    }).catch((err)=>console.log(err)
  )
}
  const deleteUser=(id:any)=>{
    axios.delete(`http://localhost:3001/api/admin/delu/${id}`).then((response)=>{
setUpdate(response.data)
    }).catch((err)=>console.log(err)
    )
  }
  const deleteCust=(id:any)=>{
    axios.delete(`http://localhost:3001/api/admin/delC/${id}`).then((response)=>{
setUpdate(response.data)
    }).catch((err)=>console.log(err)
    )
  }
  const upUser=()=>{
    
  }
  useEffect(()=>{fetch()},[update])
  useEffect(()=>{fetchCustomer()},[])
  return (
   
    <div>
    <div className='admin'>{data.map((el,index)=><>
  <div>firstName:  { el.firstName}
  </div>
  <div>lastName:   {el.lastName}</div>
    <button className='button' onClick={()=>deleteUser(el.id)}> delet</button>
    </>)}</div>
    <div className='admin'>{data.map((el,index)=><>
  <div>firstName:   { el.firstName}
  </div>
  <div> lastName:   {el.lastName}</div>
    <button  className='button' onClick={()=>deleteCust(el.id)}> delete</button>
    </>)}</div>
    </div>
  
  )
}

export default Admin