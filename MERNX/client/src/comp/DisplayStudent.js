import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
export const DisplayStudent = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
       
        getdata()
    },[])

    const getdata=async()=>{
        try{
        const result=await axios.get('http://localhost:5000/student/dispStudent')
        setData(result.data)
    }catch(error){
        console.log(error)
    }
    }
    const deleteStudent=async(id)=>{
        alert(id)
        let result=await axios.delete('http://localhost:5000/student/delete/${id}')
        if(result){
            alert('Student data deleted')
            getdata();
        }
    }
    const studentrecord=data.map((d)=>{
        return(
            <tr>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>Edit</td>
                <td><button onClick={()=>deleteStudent(d._id)} class='btn text-light btn-light'>Delete</button></td>
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
