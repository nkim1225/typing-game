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
        name: GAME_EMPTY,
        value: '-',
        key: `${i}${j}`,
        word: '',
      });
    }
    board.push(innerBoard);
  }
  board[2][7].value = '[+]';

  // TEST MONSTERS * DELETE *
  board[1][0] = { key: board[1][0].key, name: 'TOM', value: '*', word: 'berry' };
  board[1][3] = { key: board[1][3].key, name: 'TOM', value: '*', word: 'tom' };

  return board;
};
