export function makeNewTodo(description: string) {
  return {
    id: 'a123413',
    description,
    createdAt: new Date().toISOString(),
  };
}
