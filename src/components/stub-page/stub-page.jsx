import {
  MainLayout,
  PageHeading,
  HomeLink
} from 'components/common/common';
import { useDispatch } from 'react-redux';
import { changeCurrentItemMenu } from 'store/actions';
import * as S from './stub-page.styled';

const StubPage = ({page}) => {
  const dispatch = useDispatch();

  dispatch(changeCurrentItemMenu(page));

  return (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <S.PageText>Пока здесь ничего нет</S.PageText>
      <S.PageText>Но скоро мы всё нарисуем!</S.PageText>
      <S.PageText>А пока можешь <HomeLink /></S.PageText>
    </S.Main>
  </MainLayout>
)};

export default StubPage;
