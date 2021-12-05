import { createReducer } from '@reduxjs/toolkit';
import { Type } from 'const';
import { changeType, loadQuest, loadQuests, postOrder } from './actions';

const initialState = {
  currentType: Type.ALL.type,
  quests: [],
  quest: {},
  order: {},
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
    .addCase(postOrder, (state, action) => {
      state.order = action.payload;
    });
});

export { questsData };
