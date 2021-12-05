const REPLACED_ID = ':id';
const PEOPLE_COUNT_MIN = 0;
const PEOPLE_COUNT_MAX = 1;
const DEFAULT_MENU_SELECTED = 'Квесты';
const ESC_KEY_CODE = 27;

const AppRoute = {
  Home: '/',
  Contacts: '/contacts',
  DetailedQuest: '/detailed-quest/:id',
  Beginners: '/beginners',
  Reviews: '/reviews',
  Stocks: '/stocks',
}

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
  UNDEFINED: {
    value: 'неизвестный',
    name: 'undefined',
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

const genres = [Type.ALL, Type.ADVENTURES, Type.HORROR, Type.MYSTIC, Type.DETECTIVE, Type.SCI_FI]
const menuItems = [Menu.QUESTS, Menu.BEFINNERS, Menu.REVIEWS, Menu.STOCKS, Menu.CONTACTS];

const APIRoute = {
  Quests: '/quests',
  Quest: '/quests/:id',
  Order: '/orders',
}

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

const EMPTY_LENGTH = 0;

export {REPLACED_ID, PEOPLE_COUNT_MIN, PEOPLE_COUNT_MAX, DEFAULT_MENU_SELECTED, ESC_KEY_CODE, AppRoute, Level, Type, Menu, genres, menuItems, APIRoute, User, ErrorMessage, EMPTY_LENGTH};
