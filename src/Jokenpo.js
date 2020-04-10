const Jokenpo = (playA, playB) => {
  if (!['rock', 'paper', 'scissors'].includes(playA)) return 'invalid choice';
  if (!['rock', 'paper', 'scissors'].includes(playB)) return 'invalid choice';

  if (playA === playB) return 'draw';

  if (playA === 'rock') {
    if (playB === 'scissors') return 'rock';
    if (playB === 'paper') return 'paper';
  }

  if (playA === 'scissors') {
    if (playB === 'paper') return 'scissors';
    if (playB === 'rock') return 'rock';
  }

  if (playA === 'paper') {
    if (playB === 'rock') return 'paper';
    if (playB === 'scissors') return 'scissors';
  }

  return undefined;
};

export default Jokenpo;
