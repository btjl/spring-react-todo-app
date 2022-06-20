import React, { useEffect, useState } from 'react'
import TodoService from '../services/TodoService';


const ListTodosComponent = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos();

  }, [])

  const getAllTodos = () => {
        TodoService.getAllTodos().then(response => {
          setTodos(response.data);
          console.log(response.data);

        }).catch(error => {
          console.log(error);
        })
  }

  return (
    <div className="container">
      <h2 className="text-center">List Todos</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Todo Id</th>
          <th>Todo Name</th> 
        </thead>
        <tbody>
          {
            todos.map(
              todo =>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListTodosComponent