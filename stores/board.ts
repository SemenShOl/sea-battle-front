import { defineStore } from "pinia";
// export type CellCoordinate = {
//   x: number;
//   y: (typeof alphabet)[number];
// };
// export type BoardCell = CellCoordinate & {
//   isFree: boolean;
// };
export const useBoardStore = defineStore("board", () => {
  const preparedBoard = ref<BoardCell[]>([]);

  return { preparedBoard };
});
