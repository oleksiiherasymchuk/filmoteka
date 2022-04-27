// import React, { useState } from "react";

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

// export default ToDoForm;