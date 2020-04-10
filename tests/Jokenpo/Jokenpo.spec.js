import { expect } from 'chai';
import Jokenpo from '../../src/Jokenpo';

describe('Jokenpo', () => {

  describe('Smoke Test', () => {
    it('should exist method Jokenpo', () => {
      expect(Jokenpo).to.be.exist;
      expect(Jokenpo).to.be.a('function');
    });
  });

  it('should return invalid choice when play is invalid', () => {
    expect(Jokenpo('snake', 'pad')).to.be.equal('invalid choice');
    expect(Jokenpo('rock', 'pad')).to.be.equal('invalid choice');
    expect(Jokenpo('snake', 'scissors')).to.be.equal('invalid choice');
  });

  it('should return draw when players play the same', () => {
    expect(Jokenpo('rock', 'rock')).to.be.equal('draw');
    expect(Jokenpo('paper', 'paper')).to.be.equal('draw');
    expect(Jokenpo('scissors', 'scissors')).to.be.equal('draw');
  });

  it('should return rock as winner when vs scissors', () => {
    expect(Jokenpo('rock', 'scissors')).to.be.equal('rock');
    expect(Jokenpo('scissors', 'rock')).to.be.equal('rock');
  });

  it('should return scissors as winner when vs paper', () => {
    expect(Jokenpo('scissors', 'paper')).to.be.equal('scissors');
    expect(Jokenpo('paper', 'scissors')).to.be.equal('scissors');
  });

  it('should return paper as winner when vs rock', () => {
    expect(Jokenpo('paper', 'rock')).to.be.equal('paper');
    expect(Jokenpo('rock', 'paper')).to.be.equal('paper');
  });
});
