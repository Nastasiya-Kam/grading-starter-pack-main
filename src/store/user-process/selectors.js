import { NameSpace } from 'store/root-reducer';

const getCurrentType = (state) => state[NameSpace.User].currentType;
const getCurrentItemMenu = (state) => state[NameSpace.User].currentItemMenu;

export {
  getCurrentType,
  getCurrentItemMenu
};
