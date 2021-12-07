import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_MENU_SELECTED, Type } from 'const/const';
import { changeCurrentItemMenu, changeType } from 'store/actions';

const initialState = {
  currentType: Type.ALL.type,
  currentItemMenu: DEFAULT_MENU_SELECTED,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeType, (state, action) => {
      state.currentType = action.payload;
    })
    .addCase(changeCurrentItemMenu, (state, action) => {
      state.currentItemMenu = action.payload;
      state.currentType = Type.ALL.type;
    });
});

export { userProcess };
