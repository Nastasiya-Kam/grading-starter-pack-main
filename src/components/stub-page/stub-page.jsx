import {
  MainLayout,
  PageHeading,
} from 'components/common/common';
import * as S from './stub-page.styled';

const StubPage = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <S.PageText>Пока здесь ничего нет</S.PageText>
      <S.PageText>Но скоро мы всё нарисуем!</S.PageText>
      <S.PageText>А пока можешь <S.Link to="/">вернуться на главную страницу</S.Link></S.PageText>
    </S.Main>
  </MainLayout>
);

export default StubPage;
