import { NameSpace } from 'store/root-reducer';
import { getTypeQuests } from 'utils/utils';

const getCurrentQuest = (state) => state[NameSpace.Quests].quest;
const getLoadingStatus = (state) => state[NameSpace.Quests].isQuestLoading;
const getQuestsByType = (state) => getTypeQuests(state[NameSpace.Quests].quests, state[NameSpace.User].currentType);
const getDataLoadingStatus = (state) => state[NameSpace.Quests].isDataLoading;

export {
  getCurrentQuest,
  getLoadingStatus,
  getQuestsByType,
  getDataLoadingStatus,
};
