import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  ChangeType: 'genre/changeType',
  LoadQuests: 'quests/loadQuests',
  LoadQuest: 'quests/loadQuest',
  PostOrder: 'order/postOrder',
}

const changeType = createAction(
  ActionType.ChangeType,
  (type) => ({
    payload: type,
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
  changeType,
  loadQuests,
  loadQuest,
  postOrder
};
