import { createAction } from '@reduxjs/toolkit';
import { Type } from 'const';

const ActionType = {
  ChangeType: 'genre/changeType',
  LoadQuests: 'quests/loadQuests',
  LoadQuest: 'quests/loadQuest',
  PostOrder: 'order/postOrder',
  ChangeCurrentItemMenu: 'menu/changeCurrentItemMenu'
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

const changeCurrentItemMenu = createAction(
  ActionType.ChangeCurrentItemMenu,
  (item) => ({
    payload: item,
  }),
);

export {
  changeType,
  loadQuests,
  loadQuest,
  postOrder,
  changeCurrentItemMenu
};
