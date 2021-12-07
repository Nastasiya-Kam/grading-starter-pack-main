import { APIRoute, REPLACED_ID } from 'const/const';
import { isDataLoading, isQuestLoading, loadQuest, loadQuests } from './actions';

const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    dispatch(isDataLoading(true));
    try {
      const {data} = await api.get(APIRoute.Quests);
      dispatch(loadQuests(data));
    } catch {
      dispatch(loadQuests([]));
    }
    dispatch(isDataLoading(false));
  };

const fetchQuestAction = (id) =>
  async (dispatch, _getState, api) => {
    dispatch(isQuestLoading(true));
    try {
      const {data} = await api.get(APIRoute.Quest.replace(REPLACED_ID, String(id)));
      dispatch(loadQuest(data));
    } catch {
      dispatch(loadQuest(null));
    }
    dispatch(isQuestLoading(false));
  };

const postOrderAction = ({name, peopleCount, phone, isLegal}, setIsSending, onClose) =>
  async (dispatch, _getState, api) => {
    try {
      setIsSending(true);
      await api.post(APIRoute.Order, {name, peopleCount, phone, isLegal});
      onClose(false);
    } catch (error) {
      setIsSending(false);
      throw (error);
    }
  }

export { fetchQuestsAction, fetchQuestAction, postOrderAction };
