import { createReducer } from '@reduxjs/toolkit';
import { isDataLoading, isQuestLoading, loadQuest, loadQuests } from 'store/actions';

const initialState = {
  quests: [],
  isDataLoading: false,
  quest: null,
  isQuestLoading: true,
};

const questsData = createReducer(initialState, (builder) => {
  builder
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
    });
});

export { questsData };
