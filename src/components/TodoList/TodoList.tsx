import { useState } from "react";
import { Todo } from "../../mockData";
import TodoItem from "../TodoItem/TodoItem";

interface ITodoListProps {
  todos: Todo[];
  onHandleCompleted: (id: number) => void;
  onCreateTodo: (text: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onHandleCompleted,
  onCreateTodo,
}) => {
  const [sortBy, setSortBy] = useState<"all" | "active" | "completed">("all");
  const [value, setValue] = useState("");

  const todosBySort = () => {
    switch (sortBy) {
      case "all":
        return todos;

      case "completed":
        return todos.filter((todo) => todo.isCompleted);

      case "active":
        return todos.filter((todo) => todo.isCompleted === false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim()) {
      onCreateTodo(value);
    }
  };

  return (
    <div>
      <div className="border-2 py-2 px-4 text-center">
        {todosBySort().length
          ? todosBySort().map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                handleCompleted={onHandleCompleted}
              />
            ))
          : `Нет задач`}
      </div>
      <ul className="mb-[10px] flex di list-none gap-2 justify-center">
        <li className="">
          <button onClick={() => setSortBy("all")}>All</button>
        </li>
        <li>
          <button onClick={() => setSortBy("active")}>Active</button>
        </li>
        <li>
          <button onClick={() => setSortBy("completed")}>Completed</button>
        </li>
      </ul>
      <form
        onSubmit={handleSubmit}
        action="create-todo"
        className="flex flex-col gap-[5px]"
      >
        <label htmlFor="input" className="flex flex-col">
          <span>Create Todo</span>
          <input
            className="border-2 p-1 "
            onChange={(e) => setValue(e?.target?.value)}
          />
        </label>
        <label>
          <button
            type="submit"
            className="bg-[#432432] px-[10px] py-[8px] font-semibold text-white"
          >
            Create Todo
          </button>
        </label>
      </form>
    </div>
  );
};

export default TodoList;
