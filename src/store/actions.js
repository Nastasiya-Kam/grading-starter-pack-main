import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  ChangeGenre: 'genre/changeGenre',
  LoadQuests: 'quests/loadQuests',
  LoadQuest: 'quests/loadQuest',
  PostOrder: 'order/postOrder',
}

const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre) => ({
    payload: genre,
  }),
);

const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({
    payload: quests,
  }),
);

const loadQuest = createAction(
  ActionType.LoadQuest,
  (quest) => ({
    payload: quest,
  }),
);

const postOrder = createAction(
  ActionType.PostOrder,
  (order) => ({
    payload: order,
  }),
);

export {
  changeGenre,
  loadQuests,
  loadQuest,
  postOrder
};
