import React, { useState, useEffect } from 'react';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewToDo] = useState("");
  const [listType, setList] = useState("To-Do");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewToDo("");
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //USE EFFECT TO LOG ALL CURRENT TO DOS AND UPDATE
  useEffect(() => {
    console.log(`The kind of list is ${todos} list`);
  }, [todos]);

  return (
    <div className="ToDo">
      <h1>This is my {listType} List</h1>
      <button className="options" onClick={() => setList("Homework")} >Homework</button>
      <button className="options" onClick={() => setList("Grocery")}>Grocery</button>
      <button className="options" onClick={() => setList("Errands")}>Errands</button>

      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={(event) => setNewToDo(event.target.value)} />
        <button className="add" type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button className="delete" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
