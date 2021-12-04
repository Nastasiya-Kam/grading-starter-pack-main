import { Level } from 'const';

const getLevel = (level) => {
  switch (level) {
    case Level.EASY.name:
      return Level.EASY.value;
    case Level.MEDIUM.name:
      return Level.MEDIUM.value;
    case Level.HARD.name:
      return Level.HARD.value;
    default:
      return Level.UNDEFINED.value;
  }
};

export {getLevel};
