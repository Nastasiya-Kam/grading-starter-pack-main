import {
  MainLayout,
  PageHeading,
  HomeLink
} from 'components/common/common';
import * as S from './stub-page.styled';

const StubPage = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <S.PageText>Пока здесь ничего нет</S.PageText>
      <S.PageText>Но скоро мы всё нарисуем!</S.PageText>
      <S.PageText>А пока можешь <HomeLink /></S.PageText>
    </S.Main>
  </MainLayout>
);

export default StubPage;
