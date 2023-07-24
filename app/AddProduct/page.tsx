"use client"
import React ,{useState,useEffect}from 'react'
import { useRouter } from "next/navigation";
import axios from "axios"
import Link from 'next/link'
import { CldImage } from 'next-cloudinary';
const  AddProduct=()=>{
  const router = useRouter();
  const token =JSON.parse( localStorage.getItem("token"))
  const userRole = token?.role;
   
    const {email}=JSON.parse(localStorage.getItem("token"))
    const[image,setImage]=useState('')
    const [location, setLocation] = useState("");
    const [numbOfrooms, setNumbOfrooms] = useState("");
    const [numbOfBathroom, setNumbOfBathroom] = useState("");
    const [area, setArea] = useState("");
    const [price, setPrice] = useState("");
    const [update, setUpdate] = useState(false);
    const[userId,setUserId]=useState("")
    const addHome = () => {
        axios
          .post("http://localhost:3001/api/user/addHome", {
        userId:userId,
            image:image,
            location: location,
            numbOfrooms: numbOfrooms,
            numbOfBathroom: numbOfBathroom,
            area: area,
            price: price,
          })
          .then(() => setUpdate(!update))
          .catch((err) => console.log(err));
      };
      const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        setImage(file);
    
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "product");
        
        try {
          const response = await axios.post(
          
            "https://api.cloudinary.com/v1_1/dzonlv8oi/image/upload",
    
            formData
          );
    
          console.log("Image uploaded successfully:", response.data);
          setImage(response.data.secure_url);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
      if(userRole!=="User"&&userRole!=="Admin"){
        router.push("/404")
      }
      const handlAdd=()=>{
        addHome()
      }
      useEffect(()=> {
        axios
        .get(`http://localhost:3001/api/user/get/${email}`)
        .then((response) => {
          setUserId(response.data.id);
          console.log("user", response.data.id);
        })
        .catch((err) => {
          console.log(err);
        });
      },[email,userId])
  return (
    <div> 
        
    
 
  <div className="container w-50 border mt-5 " id="form" >
      <form className="mt-5">
      <div className="mb-3">
            <label  className="form-label"> Image</label>
            <input type="file" className="form-control" name="UrunImage" id="UrunImage"
            onChange={handleImageUpload}/>
        </div>
        <div className="mb-3">

          <label className="form-label">Location</label>
          <input type="text" className="form-control" id="UrunID" onChange={(e)=>setLocation(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Number of rooms</label>
          <input type="text" className="form-control" id="UrunAdi"onChange={(e)=>setNumbOfrooms(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label" >Number of bathrooms</label>
          <input type="number" className="form-control" id="UrunMiktar" onChange={(e)=>setNumbOfBathroom(e.target.value)}/>
        </div>
        <div className="mb-3">
        <label className="form-label" >Area</label>
          <input type="number" className="form-control" id="UrunMiktar" onChange={(e)=>setArea(e.target.value)}/>
        </div>
    
        <div className="mb-3">
        <label className="form-label" >Price</label>
          <input type="number" className="form-control" id="UrunMiktar" onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        
      </form>
  
  <Link   href="/AllProduct">
  <button  className='button'  onClick={()=>handlAdd()} >Add house</button>
  </Link>
</div>
</div>
  )
}

export default AddProduct