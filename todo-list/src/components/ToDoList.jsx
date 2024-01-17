import React, {useState} from 'react';
import '../styles3/ToDoList.css';

export default function ToDoList(){
    const [todoS, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const clickAddToDo = () => {
        if(newTodo.trim() !== ""){
            setTodos([...todoS, {text: newTodo.trim()}]);
            setNewTodo("");
        }
    }

    const clickBorrarToDo = (index) => {
        const newTodoS = [...todoS];
        newTodoS.splice(index,1);
        setTodos(newTodoS);
    }

    return (
        <>
        <div>
            <h1>To-Do List</h1>
            <input type='text' placeholder='Add something' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button className='add' onClick={clickAddToDo}>Add</button>
            <ul>
                {todoS.map((todo, index) => (
                    <li key={index}>
                        <span>{todo.text}</span>
                        <button className='delete' onClick={()=>clickBorrarToDo(index)}>X</button>
                    </li>
                ))}
            </ul>

        </div>
        </>
    )
}