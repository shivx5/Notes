import { useState } from "react";
import createArea from './createArea.css'
function CreateArea(props)
{

const [note,setNote]=useState({title:"",desc:""});

function getvalues(event)
{

const{name,value}=event.target;

setNote(pre=>
    {
        return{
            ...pre, 
            [name]:value
        }
    })

}
function submitform()
{
    if(note.title=="")
    {
        alert("please add Title");
    }
    else{
    props.addednotes(note);
    }
    // console.log(note);
}

    return(
        <div className="areas">
            <input type="text" placeholder="title" onChange={getvalues} name="title" value={note.title}></input>
            <input type="text" placeholder="add description" onChange={getvalues} name="desc"  value={note.desc}></input>
            <button onClick={submitform}>+</button>


        </div>
    )
}
export default CreateArea;