import { getTypeQuests } from 'utils/utils';

const getCurrentType = (state) => state.currentType;
const getCurrentQuest = (state) => state.quest;
const getLoadingStatus = (state) => state.isQuestLoading;
const getQuestsByType = (state) => getTypeQuests(state.quests, state.currentType);
const getDataLoadingStatus = (state) => state.isDataLoading;
const getCurrentItemMenu = (state) => state.currentItemMenu;

export {
  getCurrentType,
  getCurrentQuest,
  getLoadingStatus,
  getQuestsByType,
  getDataLoadingStatus,
  getCurrentItemMenu
};
