import { AppRoute } from './routes';

const REPLACED_ID = ':id';
const DEFAULT_MENU_SELECTED = 'Квесты';
const ESC_KEY_CODE = 27;
const EMPTY_LENGTH = 0;

const Level = {
  EASY: {
    value: 'простой',
    name: 'easy',
  },
  MEDIUM: {
    value: 'средний',
    name: 'medium',
  },
  HARD: {
    value: 'сложный',
    name: 'hard',
  },
};

const Type = {
  ALL: {
    name: 'Все квесты',
    type: 'all',
  },
  ADVENTURES: {
    name: 'Приключения',
    type: 'adventures',
  },
  HORROR: {
    name: 'Ужасы',
    type: 'horror',
  },
  MYSTIC: {
    name: 'Мистика',
    type: 'mystic',
  },
  DETECTIVE: {
    name: 'Детектив',
    type: 'detective',
  },
  SCI_FI: {
    name: 'Sci-fi',
    type: 'sci-fi',
  },
};

const Menu = {
  QUESTS: {
    name: 'Квесты',
    route: AppRoute.Home,
  },
  BEFINNERS: {
    name: 'Новичкам',
    route: AppRoute.Beginners,
  },
  REVIEWS: {
    name: 'Отзывы',
    route: AppRoute.Reviews,
  },
  STOCKS: {
    name: 'Акции',
    route: AppRoute.Stocks,
  },
  CONTACTS: {
    name: 'Контакты',
    route: AppRoute.Contacts,
  },
};

const User = {
  Name: 'booking-name',
  Phone: 'booking-phone',
  PeopleCount: 'booking-people',
  Legal: 'booking-legal',
};

const ErrorMessage = {
  NameEmpty: 'Имя не может быть пустым',
  PhoneEmpty: 'Телефон не может быть пустым',
  PhoneSymbols: 'Телефон должен содержать 10 цифр',
  PeopleCountEmpty: 'Количество человек не может быть пустым',
  LegalEmpty: 'Чтобы продолжить необходимо согласиться',
  Correct: '',
};

const Contact = {
  PHONE: {
    href: 'tel:8 (800) 333-55-99',
    text: '8 (800) 333-55-99',
  },
  EMAIL: {
    href: 'mailto:info@escape-room.ru',
    text: 'info@escape-room.ru',
  },
};

const PeopleCountLength = {
  Max: 1,
  Min: 0,
};

const genres = [Type.ALL, Type.ADVENTURES, Type.HORROR, Type.MYSTIC, Type.DETECTIVE, Type.SCI_FI];
const menuItems = [Menu.QUESTS, Menu.BEFINNERS, Menu.REVIEWS, Menu.STOCKS, Menu.CONTACTS];

export {
  REPLACED_ID,
  DEFAULT_MENU_SELECTED,
  ESC_KEY_CODE,
  EMPTY_LENGTH,
  Level,
  Type,
  Menu,
  User,
  ErrorMessage,
  Contact,
  PeopleCountLength,
  genres,
  menuItems
};
