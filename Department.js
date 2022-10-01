import React,{useState} from 'react'
import List from './List'

function Department() {
    const [depts, setdepts] = useState([])
    const [dept, setdept] = useState('')

    const addDept=(e)=>{
        e.preventDefault();
        setdepts(depts.concat(dept))
        setdept('');
    }
  return (
    <div>
        <input type='text' placeholder='Department' value={dept} onChange={(e)=>setdept(e.target.value)}/>
        <input type='submit'  value={dept} onClick={addDept}/>
        <ul>
            <List depts={depts} />
        </ul>
    </div>
  )
}

export default Department