import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_MENU_SELECTED, Type } from 'const';
import { changeType, loadQuests, loadQuest, isQuestLoading, postOrder, changeCurrentItemMenu } from './actions';

const initialState = {
  currentType: Type.ALL.type,
  quests: [],
  quest: null,
  isQuestLoading: true,
  order: {},
  currentItemMenu: DEFAULT_MENU_SELECTED,
};

const questsData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeType, (state, action) => {
      state.currentType = action.payload;
    })
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
    })
    .addCase(isQuestLoading, (state, action) => {
      state.isQuestLoading = action.payload;
    })
    .addCase(postOrder, (state, action) => {
      state.order = action.payload;
    })
    .addCase(changeCurrentItemMenu, (state, action) => {
      state.currentItemMenu = action.payload;
      state.currentType = Type.ALL.type;
    });
});

export { questsData };
