import { getTypeQuests } from 'utils/utils';

const getCurrentType = (state) => (state.currentType);
const getQuestsByType = (state) => getTypeQuests(state.quests, state.currentType);

export { getCurrentType, getQuestsByType };
