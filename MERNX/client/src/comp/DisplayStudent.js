import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
export const DisplayStudent = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const getdata=async()=>{
            try{
            const result=await axios.get('http://localhost:5000/student/dispStudent')
            setData(result.data)
        }catch(error){
            console.log(error)
        }
        }
        getdata()
    },[])
    const studentrecord=data.map((d)=>{
        return(
            <tr>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        )
    })
  return (
    <div>
        <table class='table bg-dark text-light'>
            <tr class='bg-success'>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
            {studentrecord}
        </table>
    </div>
  )
}
export default DisplayStudent;
