import { Genre, Level, PEOPLE_COUNT_MAX, PEOPLE_COUNT_MIN } from 'const';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

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

const getIcon = (type) => {
  switch (type) {
    case Genre.ADVENTURES.type:
      return <IconAdventures />
    case Genre.HORROR.type:
      return <IconHorrors />
    case Genre.MYSTIC.type:
      return <IconMystic />
    case Genre.DETECTIVE.type:
      return <IconDetective />
    case Genre.SCI_FI.type:
      return <IconScifi />
    default:
      return <IconAllQuests />
  }
};

const getGenre = (type) => {
  switch (type) {
    case Genre.ADVENTURES.type:
      return Genre.ADVENTURES.name;
    case Genre.HORROR.type:
      return Genre.HORROR.name;
    case Genre.MYSTIC.type:
      return Genre.MYSTIC.name;
    case Genre.DETECTIVE.type:
      return Genre.DETECTIVE.name;
    case Genre.SCI_FI.type:
      return Genre.SCI_FI.name;
    default:
      return;
  }
};

const getGenreQuests = (quests, type) => (type === Genre.ALL.type) ? quests : quests.filter((quest) => quest.type === type);
const getPeopleCountTemplate = (peopleCount) => `${peopleCount[PEOPLE_COUNT_MIN]}–${peopleCount[PEOPLE_COUNT_MAX]} чел`;

export {getLevel, getIcon, getGenre, getGenreQuests, getPeopleCountTemplate};
