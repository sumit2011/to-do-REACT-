import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos , settodos] = useState([{ task : "sample task" , id : uuidv4() , isDone : false}]);

    let [newtodo , setnewtodo] = useState("");
    
    let addtask = () =>{
        settodos([...todos , {task : newtodo , id : uuidv4() , isDone : false}]);
        setnewtodo("");
    };

    let updatetaskvalue = (event) =>{
        setnewtodo(event.target.value);
    };

    let deletetodo = (id ) => {
        settodos((prevtodos)=> todos.filter((prevtodos) => prevtodos.id != id));
        // console.log(copy);
    };

    let uppercaseall = () => {
       settodos((prevtodos)=> (
        prevtodos.map((todo) => {
            // console.log(todo);
            return{
                ...todo,
                task: todo.task.toUpperCase()
            };
        })
       ));
    };

    let taskdone = (id) =>{
        settodos((prevtodos) =>(
            prevtodos.map((todo) =>{
                if(todo.id == id){
                    return{
                        ...todo,
                        isDone : true,
                        
                    };
                }
                else{
                    return todo;
                }
            })
        ))
    }

    return(
        <>
        <h1>To-DO</h1>
        <input placeholder="add a task" 
        value = {newtodo} 
        onChange={updatetaskvalue}
        ></input>
        <br></br>
        <br></br>
        <button onClick={addtask}>Add Task</button>
        <br></br>
        <br></br>
        <hr></hr>
        <ul>
            {todos.map((todo) =>(
                <li key = {todo.id}>

                <span
                    style={ todo.isDone ? {textDecoration: "line-through"} : {} }
                    >
                    {todo.task}</span>
                &nbsp;&nbsp;
                <button onClick={() => deletetodo(todo.id )}>Delete</button>
                <button onClick={() => taskdone(todo.id)}>Done Task</button>
                 </li>
            ))}
        </ul>

        <button onClick={uppercaseall}>uppercaseall</button>
        
        </>
    );
}

