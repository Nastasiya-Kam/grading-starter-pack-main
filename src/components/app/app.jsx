import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFound from 'components/not-found/not-found';
import StubPage from 'components/stub-page/stub-page';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute, Menu } from 'const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route
          exact
          path={AppRoute.DetailedQuest}
          render={(routerProps) => {
            const id = parseInt(routerProps?.match?.params?.id, 10);
            return <DetailedQuest id={id} />;
          }}
        >
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route exact path={AppRoute.Beginners}>
          <StubPage page={Menu.BEFINNERS.name} />
        </Route>
        <Route exact path={AppRoute.Reviews}>
          <StubPage page={Menu.REVIEWS.name} />
        </Route>
        <Route exact path={AppRoute.Stocks}>
          <StubPage page={Menu.STOCKS.name} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
