import {
  MainLayout,
  PageHeading
} from 'components/common/common';
import * as S from './loading-page.styled';

const LoadingPage = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <S.PageText>Загрузка...</S.PageText>
    </S.Main>
  </MainLayout>
);

export default LoadingPage;
