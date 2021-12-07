import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import { InteractiveMap } from './components/components';
import contactsMap from 'assets/img/contacts-map.jpg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeCurrentItemMenu } from 'store/actions';
import { Contact, Menu } from 'const/const';
import * as S from './contacts.styled';

const Contacts = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  dispatch(changeCurrentItemMenu(Menu.CONTACTS.name));

  return (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Контакты</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        <S.Contacts>
          <S.ContactsList>
            <S.ContactTitle>Адрес</S.ContactTitle>
            <S.ContactValue>
              <S.ContactAddress>
                Санкт-Петербург,
                <br />
                Набережная реки Карповка, д 5
              </S.ContactAddress>
            </S.ContactValue>

            <S.ContactTitle>Режим работы</S.ContactTitle>
            <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

            <S.ContactTitle>Телефон</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href={Contact.PHONE.href}>
              {Contact.PHONE.text}
              </S.ContactLink>
            </S.ContactValue>

            <S.ContactTitle>E-mail</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href={Contact.EMAIL.href}>
              {Contact.EMAIL.text}
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>

          <S.ContactsMap>
            {!isLoaded && <S.ContactsMapImage
              src={contactsMap}
              alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
              width="649"
              height="336"
            />}
            <InteractiveMap onLoaded={setIsLoaded} />
          </S.ContactsMap>
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
)};

export default Contacts;
