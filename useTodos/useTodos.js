
// custom hoooks 

import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/TodoReducer"

// const initialState =[
//     // {
//     //   id: new Date().getTime(),
//     //   description: 'Recolectar la gema del alma',
//     //   done: false,
//     // },
//     // {
//     //   id: new Date().getTime()*3,
//     //   description: 'Recolectar la gema del poder',
//     //   done: false,
//     // }
//   ];
  const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

export const useTodos = () => {
    //dispatch despacha los reduced
  const [todos, dispatch] = useReducer(todoReducer, [], init)
  useEffect(() => {
    //leer los todos y serializar
    localStorage.setItem('todos', JSON.stringify(todos))
  
  }, [todos])
  
  const handleNewTodo = (todo) =>{
    // Todo a incertar se le envia el reducer 
    const action ={
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatch(action);
  }
  const handleDeleteTodo = (id) =>{
    // console.log({id })
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }
  const handleToggleTodo = (id) =>{
    // console.log({id });
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo

    }
}
