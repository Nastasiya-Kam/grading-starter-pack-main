import logo from 'assets/img/logo.svg';
import { Contact, menuItems } from 'const';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentItemMenu } from 'store/actions';
import { getCurrentItemMenu } from 'store/selectors';
import * as S from './header.styled';

const Header = () => {
  const currentMenuItem = useSelector(getCurrentItemMenu);

  const dispatch = useDispatch();
  const onCurrentItemMenuChange = (item) => {
    dispatch(changeCurrentItemMenu(item));
  };

  return (<S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo href="/">
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          {menuItems.map((item, index) => {
            const key = `${index}-${item.name}`;

            return (<S.LinkItem key={key}>
              <S.Link
                $isActiveLink={item.name === currentMenuItem}
                onClick={() => onCurrentItemMenuChange(item.name)}
                to={item.route}
              >
                {item.name}
              </S.Link>
            </S.LinkItem>);
          })}
        </S.Links>
      </S.Navigation>
      <S.Phone href={Contact.PHONE.href}>{Contact.PHONE.text}</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);}

export default Header;
