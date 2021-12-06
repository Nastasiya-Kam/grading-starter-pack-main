import { combineReducers } from 'redux';
import { questsData } from './quests-data/quests-data';
import { userProcess } from './user-process/user-process';

const NameSpace = {
  Quests: 'QUESTS',
  User: 'USER',
};

const rootReducer = combineReducers({
  [NameSpace.Quests]: questsData,
  [NameSpace.User]: userProcess,
});

export { NameSpace, rootReducer };
