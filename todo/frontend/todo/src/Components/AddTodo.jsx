import React from 'react'
import { useState } from 'react'

function AddTodo({fetchData}) {

    const [text, setText] = useState("");
    // console.log(text)

    return (
        
            <div className="inputField flex flex-row gap-x-4 p-6 w-full justify-center border-amber-600 border-4">
                <input type="text" value={text} onChange={(e) => { 
                    // console.log(e.target.value);
                    setText(e.target.value)
                }} className='border-2 border-black w-[40vw] h-[5vh]'/>

                <button className='border-2 border-black rounded-full w-[10vw] px-4 hover:text-white hover:bg-black' onClick={() => { 
                    
                    let data = {
                        id : Math.trunc((Math.random())*10),
                        todo : text,
                        isCompleted : false
                    }

                    let myHeader = new Headers();
                    myHeader.append("Content-Type", "application/json");

                    fetch("http://localhost:6500/todos/add", {
                        method : "POST",
                        body : JSON.stringify(data),    // JS Object to JSON
                        headers : myHeader
                    }).then((res) => res.text())
                    .then((data) => { 
                        console.log(data);
                        fetchData()
                    }).catch((err) => { console.log(err); })


                    setText("")

                }}>Add</button>
            </div>
        
    )
}

export default AddTodo
