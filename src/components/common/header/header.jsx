import logo from 'assets/img/logo.svg';
import { DEFAULT_MENU_SELECTED, menuItems, Type } from 'const';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeType } from 'store/actions';
import * as S from './header.styled';

const Header = () => {
  const [currentMenu, setCurrentMenu] = useState(DEFAULT_MENU_SELECTED);

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(changeType(Type.ALL.type));
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
                $isActiveLink={item.name === currentMenu}
                // TODO додедлать. Поместить в глобальный store?
                onClick={() => {
                  setCurrentMenu(item.name);
                  onClick();
                }}
                to={item.route}
              >
                {item.name}
              </S.Link>
            </S.LinkItem>);
          })}
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);}

export default Header;
