import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

import { mockTodos, Todo } from "./mockData";

function App() {
  const [todos, setTodos] = useState(mockTodos);

  const handleCompleted = (todoId: number) => {
    const updatedTodos = todos.map((todo) => {
      const { id, isCompleted } = todo;

      if (id === todoId) {
        todo.isCompleted = !isCompleted;
      }

      return todo;
    });

    return setTodos(updatedTodos);
  };

  const handleCreateTodo = (text: string) => {
    if (!text) return;

    const todo: Todo = {
      id: todos?.length + 1,
      text,
      isCompleted: false,
    };

    setTodos([...todos, todo]);
  };

  return (
    <div className="flex min-h-[100vh] justify-center items-center">
      <TodoList
        onHandleCompleted={handleCompleted}
        todos={todos}
        onCreateTodo={handleCreateTodo}
      />
    </div>
  );
}

export default App;
