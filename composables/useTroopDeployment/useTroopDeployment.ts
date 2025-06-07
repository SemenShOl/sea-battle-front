export const useTroopDeployment = () => {
  const freeBlocks = ref(10);
  const board = ref(generateEmptyBoard());

  const onCellClick = (cell: BoardCell) => {
    if (freeBlocks.value > 0 && cell.isFree) {
      freeBlocks.value--;
      cell.isFree = false;
    } else if (!cell.isFree) {
      freeBlocks.value++;
      cell.isFree = true;
    }
  };

  function generateEmptyBoard() {
    const board: BoardCell[] = [];
    for (let i = 1; i < 11; i++) {
      for (let j = 0; j < 10; j++) {
        board.push({ x: i, y: alphabet[j], isFree: true });
      }
    }
    return ref(board);
  }

  return {
    board,
    freeBlocks,
    onCellClick,
  };
};
