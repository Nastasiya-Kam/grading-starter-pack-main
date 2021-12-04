import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadQuest, loadQuests, postOrder } from './actions';

const initialState = {
  currentGenre: null,
  quests: [],
  quest: {},
  order: {},
};

const questsData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
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
