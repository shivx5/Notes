import React from 'react';
import notes from './notes.css'
export function Notes(props)
{
function deletenote()
{
    
    props.deleteNote(props.id)
}

    console.log("note is executed");
    return(
        <div className='Notes-div'>

                 <h3>{props.title}</h3>
                 <p>{props.desc}</p>
                 <button onClick={deletenote}>-</button>

        </div>
    )
}