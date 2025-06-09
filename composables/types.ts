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
