import { getTypeQuests } from 'utils/utils';

const getCurrentType = (state) => (state.currentType);
const getQuestsByType = (state) => getTypeQuests(state.quests, state.currentType);
const getCurrentItemMenu = (state) => (state.currentItemMenu)

export { getCurrentType, getQuestsByType, getCurrentItemMenu };
