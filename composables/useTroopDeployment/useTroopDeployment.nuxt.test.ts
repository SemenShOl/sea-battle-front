import { expect, describe, it } from "vitest";
import { useTroopDeployment } from "./useTroopDeployment";
describe("useTroopDeployment", () => {
  it("одинарный клик по клетке", () => {
    const { freeBlocks, board, onCellClick } = useTroopDeployment();

    onCellClick(board.value[0]);
    expect(board.value[0].isFree).toBe(false);
    expect(freeBlocks.value).toBe(9);
  });
  it("двойной клик по клетке", () => {
    const { freeBlocks, board, onCellClick } = useTroopDeployment();

    onCellClick(board.value[0]);
    onCellClick(board.value[0]);

    expect(board.value[0].isFree).toBe(true);
    expect(freeBlocks.value).toBe(10);
  });

  it("клик по пустой клетке, когда нет свободных блоков", () => {
    const { freeBlocks, board, onCellClick } = useTroopDeployment();
    freeBlocks.value = 0;
    onCellClick(board.value[0]);

    expect(board.value[0].isFree).toBe(true);
    expect(freeBlocks.value).toBe(0);
  });

  it("клик по активной клетке, когда нет свободных блоков", () => {
    const { freeBlocks, board, onCellClick } = useTroopDeployment();
    board.value[0].isFree = false;
    freeBlocks.value = 0;
    onCellClick(board.value[0]);

    expect(board.value[0].isFree).toBe(true);
    expect(freeBlocks.value).toBe(1);
  });
});
