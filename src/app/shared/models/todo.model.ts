export interface Todo {
  item: string;
  status: boolean;
}

export const TODOS: Todo[] = [
  { item: 'Buy groceries', status: false },
  { item: 'Walk the dog', status: true },
  { item: 'Read a book', status: false },
  { item: 'Write code', status: true },
  { item: 'Call mom', status: false },
  { item: 'Clean the house', status: false },
  { item: 'Pay bills', status: true },
  { item: 'Exercise', status: false },
  { item: 'Cook dinner', status: true },
  { item: 'Plan vacation', status: false }
];
