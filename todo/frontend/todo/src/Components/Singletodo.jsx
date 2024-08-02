import React from 'react'

function Singletodo({id,todo,isCompleted,fetchData}) {
    return (
        <>
            <div className='flex flex-row m-5  w-[50vw] justify-between h-[5vh]'>

                <div className="todo border-green-500 border-4 w-full rounded-lg flex items-center">
                    <h2 className='text-xl px-4'>{todo}</h2>
                </div>

                <div className="buttons flex flex-row">
                    <button className='border-2 border-black px-4 rounded-3xl mx-2 hover:bg-black hover:text-white' onClick={() => { 
                        
                        fetch(`http://localhost:6500/todos/toggle/${id}`, {
                            method:"PUT"
                        }).then((res) => { 
                            console.log(res.text());
                        }).then((data) => { 
                            console.log(data);
                            fetchData();
                        }).catch((err) => { 
                            console.log(err);
                        })

                    }} >{ isCompleted ? "COMPLETED" : "PENDING" }</button>

                    <button className='border-2 border-black px-4 rounded-3xl hover:bg-black hover:text-white' onClick={() => { 

                        // `http://localhost:6500/todos/delete?id=${id}`   --> FOR QUERY URL
                        
                        fetch(`http://localhost:6500/todos/delete/${id}`, { 
                            
                            method : "DELETE"

                        }).then((res) => { 
                            res.text()
                            // console.log(res);
                        })
                        .then((data) => {   // data = res.txt
                            console.log(data);
                            fetchData();
                        }).catch((err) => { 
                            console.log(err); 
                        })

                    }}>DELETE</button>
                </div>

            </div>
        </>
    )
}

export default Singletodo
