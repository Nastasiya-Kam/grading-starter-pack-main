import { ESC_KEY_CODE, Type, Level, PEOPLE_COUNT_MAX, PEOPLE_COUNT_MIN } from 'const';
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
    case Type.ADVENTURES.type:
      return <IconAdventures />
    case Type.HORROR.type:
      return <IconHorrors />
    case Type.MYSTIC.type:
      return <IconMystic />
    case Type.DETECTIVE.type:
      return <IconDetective />
    case Type.SCI_FI.type:
      return <IconScifi />
    default:
      return <IconAllQuests />
  }
};

const getType = (type) => {
  switch (type) {
    case Type.ADVENTURES.type:
      return Type.ADVENTURES.name;
    case Type.HORROR.type:
      return Type.HORROR.name;
    case Type.MYSTIC.type:
      return Type.MYSTIC.name;
    case Type.DETECTIVE.type:
      return Type.DETECTIVE.name;
    case Type.SCI_FI.type:
      return Type.SCI_FI.name;
    default:
      return;
  }
};

const getTypeQuests = (quests, type) => (type === Type.ALL.type) ? quests : quests.filter((quest) => quest.type === type);
const getPeopleCountTemplate = (peopleCount) => `${peopleCount[PEOPLE_COUNT_MIN]}–${peopleCount[PEOPLE_COUNT_MAX]} чел`;

const pressEscKey = (callback) => {
  return (evt) => {
    if (evt.keyCode === ESC_KEY_CODE) {
      callback(false);
    }
  };
};

const checkPhone = (phone) => {
  const patternPhone = /^[0-9]{10}$/;
  return patternPhone.test(phone);
};

export {getLevel, getIcon, getType, getTypeQuests, getPeopleCountTemplate, pressEscKey, checkPhone};
