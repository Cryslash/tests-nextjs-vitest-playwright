import { Todo } from '../schemas/todo.contract';

export function makeNewTodo(description: string): Todo {
  return {
    id: 'a123413',
    description,
    createdAt: new Date().toISOString(),
  };
}
