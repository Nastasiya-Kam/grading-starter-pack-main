import {
  MainLayout,
  PageHeading,
} from 'components/common/common';
import * as S from './not-found.styled';

const NotFound = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <p>404 Страница не найдена</p>
      <S.Link to="/">Вернуться на главную страницу</S.Link>
    </S.Main>
  </MainLayout>
);

export default NotFound;
