import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useEffect, useRef, useState } from 'react';
import { pressEscKey } from 'utils/utils';
import { useDispatch } from 'react-redux';
import { postOrderAction } from 'store/api-actions';

const BookingModal = ({onClose}) => {
  const [isSending, setIsSending] = useState(false);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const peopleCountRef = useRef(null);
  const isLegalRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', pressEscKey(onClose), false);

    return () => {
      document.removeEventListener('keydown', pressEscKey(onClose), false);
    };
  }, [onClose]);

  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn>
        <IconClose
          width="16"
          height="16"
          onClick={() => onClose(false)}
        />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        method="post"
        id="booking-form"
        onSubmit={(evt) => {
          evt.preventDefault();

          dispatch(postOrderAction(
            {
              name: nameRef.current.value,
              peopleCount: Number(peopleCountRef.current.value, 10),
              phone: phoneRef.current.value,
              isLegal: isLegalRef.current.checked,
            },
            setIsSending,
            onClose
          ));
        }}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            disabled={isSending}
            ref={nameRef}
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            disabled={isSending}
            ref={phoneRef}
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            disabled={isSending}
            ref={peopleCountRef}
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
          />
        </S.BookingField>
        <S.BookingSubmit
          disabled={isSending}
          type="submit">
          Отправить заявку
        </S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            disabled={isSending}
            ref={isLegalRef}
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
)};

export default BookingModal;
