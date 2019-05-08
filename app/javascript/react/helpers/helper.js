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
  board[2][14].value = '[+]';

  // TEST MONSTERS * DELETE *
  // board[0][0] = { key: board[0][0].key, name: 'TOM', value: '[*]', word: 'berry' };
  // board[1][0] = { key: board[1][0].key, name: 'TOM', value: '[*]', word: 'berry' };
  // board[2][0] = { key: board[2][0].key, name: 'TOM', value: '[*]', word: 'tom' };
  // board[3][0] = { key: board[3][0].key, name: 'TOM', value: '[*]', word: 'tom' };
  // board[4][0] = { key: board[4][0].key, name: 'TOM', value: '[*]', word: 'tom' };
  //
  // board[0][1] = { key: board[0][1].key, name: 'TOM', value: '[*]', word: 'tom' };
  // board[1][1] = { key: board[1][1].key, name: 'TOM', value: '[*]', word: 'tom' };
  // board[2][1] = { key: board[2][1].key, name: 'TOM', value: '[*]', word: 'tom' };
  // board[3][1] = { key: board[3][1].key, name: 'TOM', value: '[*]', word: 'tom' };
  // board[4][1] = { key: board[4][1].key, name: 'TOM', value: '[*]', word: 'tom' };
  return board;
};
