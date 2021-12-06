import { AppRoute, DEFAULT_MENU_SELECTED } from 'const';
import { useDispatch } from 'react-redux';
import { changeCurrentItemMenu } from 'store/actions';
import * as S from './home-link.styled';

const HomeLink = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(changeCurrentItemMenu(DEFAULT_MENU_SELECTED));
  }

  return (
  <S.Link
    to={AppRoute.Home}
    onClick={() => onClick()}
  >
    Вернуться на главную страницу
  </S.Link>
)};

export default HomeLink;
