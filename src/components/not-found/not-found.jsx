import {
  MainLayout,
  PageHeading,
  HomeLink
} from 'components/common/common';
import * as S from './not-found.styled';

const NotFound = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <S.PageText>404 Страница не найдена</S.PageText>
      <HomeLink />
    </S.Main>
  </MainLayout>
);

export default NotFound;
