import { APIRoute, REPLACED_ID } from 'const';
import { isQuestLoading, loadQuest, loadQuests } from './actions';

const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.Quests);

    dispatch(loadQuests(data));
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

const postOrderAction = ({name, peopleCount, phone, isLegal}) =>
  async (dispatch, _getState, api) => {
    await api.post(APIRoute.Order, {name, peopleCount, phone, isLegal});
  }

export { fetchQuestsAction, fetchQuestAction, postOrderAction };
