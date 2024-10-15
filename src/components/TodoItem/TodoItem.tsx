interface ITodoItemProps {
  isCompleted: boolean;
  text: string;
  id: number;
  handleCompleted: (id: number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({
  isCompleted,
  text,
  id,
  handleCompleted,
}) => {
  return (
    <div className="flex gap-2 p-4 text-xl items-center [&:not(:last-child)]:border-b-2 rounded-md">
      <input
        type="checkbox" className="mt-[3px]"
        checked={isCompleted}
        onChange={() => handleCompleted?.(id)}
      />
      <span className={`${isCompleted && "line-through"}`}>{text}</span>
    </div>
  );
};

export default TodoItem;
