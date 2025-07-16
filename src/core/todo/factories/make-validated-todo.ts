import { sanitizeStr } from '@/utils/sanitize-str';
import { makeNewTodo } from './make-new-todo';
import { validateTodoDescription } from '../schemas/validate-todo-description';
import { Todo } from '../schemas/todo.contract';

type invalidTodo = {
  success: false;
  errors: string[];
};

type ValidTodo = {
  success: true;
  data: Todo;
};

type MakeValidatedTodo = invalidTodo | ValidTodo;

export function makeValidatedTodo(description: string): MakeValidatedTodo {
  const cleanDescription = sanitizeStr(description);
  const validateDescription = validateTodoDescription(cleanDescription);

  if (validateDescription.success) {
    return {
      success: true,
      data: makeNewTodo(cleanDescription),
    };
  }

  return {
    success: false,
    errors: validateDescription.errors,
  };
}
