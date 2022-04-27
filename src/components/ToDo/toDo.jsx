// import React from "react";

// const ToDo = ({todo, removeTask, number}) => {
//     return <div key={todo.id}>
//         <div> 
//             {number}{todo.task}
//         </div>
//         <div onClick={(id) => removeTask(todo.id)}>
//         x
//         </div>
//     </div>
// }

// export default ToDo;






// const App = (props) => {

//     const [todos, setTodos] = useState([]);
  
//     const addTask = (userInput) => {
//       if(userInput){
//         const newItem = {
//           id: Math.random(),
//           task: userInput,
//         }
//         setTodos([...todos, newItem])
//       }
//     }
  
//     const removeTask = (id) => {
//       setTodos(todos.filter( todo => todo.id !== id))
//     }
  
//     return (
//     <div>
//         <header>
//           <h1>ToDo List: {todos.length}</h1>
//         </header>
//         <ToDoForm addTask={addTask}/>
//         {todos.map( (todo, index) => {
//           return (
//             <ToDo todo={todo}
//                   number = {index + 1}
//                   key={todo.id}
//                   removeTask={removeTask}/>
//           )
//         })}


// const ToDoForm = (props) => {
    
//     const [userInput, setuserInput] = useState("");

//     const handleChange = (e) => {
//         setuserInput(e.currentTarget.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.addTask(userInput);
//         setuserInput('');
//     }

//     const handleKeyPress = (e) => {
//         if(e.key === 'Enter') {
//             handleSubmit(e)
//         }
//     }

//     return <div>
//         <form onSubmit={handleSubmit}>
//             <input value={userInput}
//                     type='text'
//                     onChange={handleChange}
//                     onKeyDown={handleKeyPress}
//                     placeholder="Input new icon..." />

//         </form>
//     </div>
// }

// const ToDo = ({todo, removeTask, number}) => {
//     return <div key={todo.id}>
//         <div> 
//             {number}{todo.task}
//         </div>
//         <div onClick={(id) => removeTask(todo.id)}>
//         x
//         </div>
//     </div>
// }