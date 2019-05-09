export const GAME_EMPTY = 'EMPTY';
export const GAME_TOM = 'TOM';
export const GAME_PLAYER = 'PLAYER';

export const emptyBoard = () => {
  let board = [];
  let innerBoard = [];
  for (let i = 0; i < 5; i++) {
    innerBoard = [];
    for (let j = 0; j < 15; j++) {
      innerBoard.push({
        name: GAME_EMPTY,
        value: '-',
        key: `${i}${j}`,
        word: '',
      });
    }
    board.push(innerBoard);
  }
  //board[2][14].value = '[+]';
  return board;
};
