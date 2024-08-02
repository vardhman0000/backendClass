import React from 'react'
import Singletodo from './Singletodo';
import { useState, useEffect } from 'react';
import AddTodo from './AddTodo';

function Todo() {

    let [todos, setTodos] = useState([{
        id:1,
        todo:"Something",
        isCompleted:true
    }]);

    async function fetchData(){
        let res = await fetch("http://localhost:6500/todos");
        let data = await res.json();
        // console.log(data);
        setTodos(data)
    }

    useEffect(() => {
        fetchData();
    }, []) // empty array -> render on first time loading
    

    return (
        < div className="border-2 border-red-500 flex items-center justify-center h-screen w-screen">
            <div className="container border-2 border-black h-full w-screen flex flex-col items-center mt-20">
                <AddTodo fetchData={fetchData}/>
                <div className='border-red-400 border-4 w-full flex flex-col justify-center items-center'>
                    {
                        todos.map((ele) => { 
                            return (
                                <Singletodo id={ele.id} todo={ele.todo} isCompleted={ele.isCompleted} fetchData={fetchData}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo
