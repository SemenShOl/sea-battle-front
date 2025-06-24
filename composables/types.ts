export type BoardCell = {
  x: number;
  y: (typeof alphabet)[number];
  isFree: boolean;
};
export type User = {
  id: string;
  login: string;
  age: number;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type TaskDto = Omit<Task, "id">;
