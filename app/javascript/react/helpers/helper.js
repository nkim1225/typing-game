export const GAME_EMPTY = 'EMPTY';
export const GAME_TOM = 'TOM';
export const GAME_PLAYER = 'PLAYER';

export const emptyBoard = () => {
  let board = [];
  let innerBoard = [];
  for (let i = 0; i < 5; i++) {
    innerBoard = [];
    for (let j = 0; j < 8; j++) {
      innerBoard.push({
        value: GAME_EMPTY,
        key: `${i}${j}`,
      });
    }
    board.push(innerBoard);
  }
  board[2][7].value = GAME_PLAYER;
  board[1][0].value = GAME_TOM;
  return board;
};
