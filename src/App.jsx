import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit =() =>{


  }
  const handleDelete =() =>{

  }
  const handleAdd =() =>{
    setTodos([...todos,{todo,isCompleted:false}])
    setTodo("")

  }
  const handleChange=(e)=>{
    setTodo(e.target.value)

  }


  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-blue-100 min-h-screen ">
        <div className='addTodo my-5'>
        <div className="addTodo text-lg font-bold"><h1>Add a todo</h1></div>
        <input onChange={handleChange} value={todo} type="text" className="w-1/2" />
        <button onClick= {handleAdd} className="bg-indigo-600 hover:bg-indigo-900 px-3 text-white rounded-md mx-6">Add</button>
        <h2 className="text-lg font-bold ">Your Todos</h2>

        <div className="todos">
          {todos.map(item=>{

          return <div key={todo} className="todo flex w-1/2 justify-between my-3">
            <input type="checkbox" value={todo.isCompleted}></input>
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className="bg-indigo-600 hover:bg-indigo-900 px-3 text-white rounded-md mx-1">Edit</button>
              <button onClick={handleDelete} className="bg-indigo-600 hover:bg-indigo-900 px-3 text-white rounded-md mx-1">Delete</button>

            </div>

          </div>
          })}
          </div>
        </div>
        </div>
      
    </>
  )
}

export default App
