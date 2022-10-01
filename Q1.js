import React,{useState} from 'react'

function Q1() {
    const [name, setName] = useState({dept:""})
    const [list, setList] = useState([{dept:""}])

    const handleSubmit=()=>{
        setList([...list,name])
        console.log("List :"+list);
    }
  return (
    <div className='App'>
        <div>
            <input type="text" name="namex" onChange={(e)=>{
                setName({...name,dept:e.target.value})
                }}/>
            <br/>
            <button onClick={()=>{handleSubmit()}}>Submit</button>
            <ul>

            </ul>
        </div>
    </div>
  )
}

export default Q1