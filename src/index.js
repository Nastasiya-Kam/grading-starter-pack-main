import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from 'components/app/app';
import { createAPI } from 'services/api';
import { fetchQuestsAction } from 'store/api-actions';
import { questsData } from 'store/reducer';

const api = createAPI();

const store = configureStore({
  reducer: questsData,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
})

store.dispatch(fetchQuestsAction());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

export { store };
