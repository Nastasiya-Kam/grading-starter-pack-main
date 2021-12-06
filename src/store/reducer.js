import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_MENU_SELECTED, Type } from 'const';
import { changeType, loadQuests, loadQuest, isQuestLoading, changeCurrentItemMenu, isDataLoading } from './actions';

const initialState = {
  currentType: Type.ALL.type,
  quests: [],
  isDataLoading: false,
  quest: null,
  isQuestLoading: true,
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
    .addCase(isDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
    })
    .addCase(isQuestLoading, (state, action) => {
      state.isQuestLoading = action.payload;
    })
    .addCase(changeCurrentItemMenu, (state, action) => {
      state.currentItemMenu = action.payload;
      state.currentType = Type.ALL.type;
    });
});

export { questsData };
