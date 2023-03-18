import { Start } from "./Components/Start";
import { End } from "./Components/End";
import { Notes } from "./Components/Notes";
import app from './Components/app.css'
import Card from "./Components/Caard";
import CreateArea from "./Components/CreateArea";
import { useState } from "react";


function App() {
  const[finalNotes,SetFinalNotes]=useState([]);

  function addednotes(note)
  {
    // console.log(note);
    SetFinalNotes(pre=>
      {
        return[...pre,note];
      });


  }
  function deleteNote(id)
  {
console.log(id);
   
SetFinalNotes(preval=>
  {
   return preval.filter((val,ind)=>
    {
      return ind!==id;
    })
  })

  }
  function shownotes()
  {
   console.log(finalNotes);
  }

  return (
    <div className="App">
     <Start/>
     <CreateArea addednotes={addednotes}/>
     
     {finalNotes.map((items,index)=>
      {
        return <Notes id={index} title={items.title} desc={items.desc} deleteNote={deleteNote}/>
      })}

     <End/>
      
    
    </div>
  );
}

export default App;
