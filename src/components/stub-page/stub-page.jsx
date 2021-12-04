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
      <p>Пока здесь ничего нет</p>
      <p>Но скоро мы всё нарисуем!</p>
      <p>А пока можешь <S.Link to="/">вернуться на главную страницу</S.Link></p>
    </S.Main>
  </MainLayout>
);

export default StubPage;
