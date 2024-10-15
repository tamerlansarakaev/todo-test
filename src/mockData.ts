export interface Todo {
  id: number;
  isCompleted: boolean;
  text: string;
}

export const mockTodos: Todo[] = [
  { id: 1, isCompleted: false, text: "Complete homework" },
  { id: 2, isCompleted: true, text: "Приготовить ужин" },
];
