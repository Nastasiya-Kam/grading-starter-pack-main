import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  ChangeType: 'user/changeType',
  ChangeCurrentItemMenu: 'user/changeCurrentItemMenu',
  LoadQuests: 'quests/loadQuests',
  IsDataLoading: 'quests/isDataLoading',
  LoadQuest: 'quests/loadQuest',
  IsQuestLoading: 'quests/isQuestLoading'
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

const isDataLoading = createAction(
  ActionType.IsDataLoading,
  (status) => ({
    payload: status,
  }),
);

const loadQuest = createAction(
  ActionType.LoadQuest,
  (quest) => ({
    payload: quest,
  }),
);

const isQuestLoading = createAction(
  ActionType.IsQuestLoading,
  (status) => ({
    payload: status,
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
  isDataLoading,
  loadQuest,
  isQuestLoading,
  changeCurrentItemMenu
};
