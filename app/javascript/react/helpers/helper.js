export const GAME_EMPTY = 'EMPTY';
export const GAME_GOLBLIN = 'GOBLIN';

export const emptyBoard = () => {
  let board = [];
  let innerBoard = [];
  for (let i = 0; i < 5; i++) {
    innerBoard = [];
    for (let j = 0; j < 8; j++) {
      innerBoard.push({
        value: 'EMPTY',
        key: `${i}${j}`
      });
    }
    board.push(innerBoard);
  }
  return board;
};
