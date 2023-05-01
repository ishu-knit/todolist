import React,{useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import "./Todolist.css"

export default function Todolist()
{
    const [item,setitem] = useState("")
    const [arr,setarr] = useState([])

    const typing=(e)=>{
        const x = e.target.value
        setitem(x)

    }
    const placed=()=>{    
    
        if ( item!=="")
        {
            setarr([...arr,item])
            setitem("")
         }
}

 const del = (ind)=>{

            const update = arr.filter((ele,i)=>{
                return ind!==i})
            setarr(update)           
 }

 const delall=()=>{
    setarr([])
 }
    return(
    <>
    <div className="container">

        <div className="maincon">

        <h3 className="text-capitalize text-center">Task List</h3>
        <div>
        <input placeholder="✍️ Add items" value={item} onChange={typing}></input>

        <AddIcon className="add" onClick={placed}/>
        </div>

        <div className="list">
       { arr.map((e,i)=>{
        return (
    
        <div key={i} >
    
        <li className="items"  >{e}
         <DeleteIcon  className="delete" fontSize="sm" onClick={()=>{del(i)}}/>
        </li>

        </div>

        )
       })}
        </div>
        <br/>
        <div className="deleteall">
        <button className=" btn btn-outline-danger btn-sm " style={{marginTop:"10px"}} onClick={delall}>Remove all</button>

        </div>
        </div>
        </div>
    </>)
}