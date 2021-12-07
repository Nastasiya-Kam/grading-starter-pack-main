import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useEffect, useRef, useState } from 'react';
import { checkPhone, pressEscKey } from 'utils/utils';
import { useDispatch } from 'react-redux';
import { postOrderAction } from 'store/api-actions';
import { EMPTY_LENGTH, ErrorMessage, User } from 'const/const';
import * as S from './booking-modal.styled';

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

  // Отображение сообщений об ошибках при валидировании формы взято из видеоролика Ulbi TV
  // https://www.youtube.com/watch?v=WADswtZB-qg

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [legal, setLegal] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [peopleCountDirty, setPeopleCountDirty] = useState(false);
  const [legalDirty, setLegalDirty] = useState(false);

  const [nameError, setNameError] = useState(ErrorMessage.NameEmpty);
  const [phoneError, setPhoneError] = useState(ErrorMessage.PhoneEmpty);
  const [peopleCountError, setPeopleCountError] = useState(ErrorMessage.PeopleCountEmpty);
  const [legalError, setLegalError] = useState(ErrorMessage.LegalEmpty);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || phoneError || peopleCountError || legalError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, phoneError, peopleCountError, legalError]);

  const nameHandler = (evt) => {
    const name = evt.currentTarget.value;

    setName(name);
    if (name.length === EMPTY_LENGTH) {
      setNameError(ErrorMessage.NameEmpty);
    } else {
      setNameError(ErrorMessage.Correct);
    }
  };

  const phoneHandler = (evt) => {
    const phone = evt.currentTarget.value;

    setPhone(phone);
    if (checkPhone(phone)) {
      setPhoneError(ErrorMessage.Correct);
    } else {
      setPhoneError(ErrorMessage.PhoneSymbols)
    }

    if (phone.length === EMPTY_LENGTH) {
      setPhoneError(ErrorMessage.PhoneEmpty)
    }
  };

  const peopleCountHandler = (evt) => {
    const peopleCount = evt.currentTarget.value;

    setPeopleCount(peopleCount);
    if (peopleCount.length === EMPTY_LENGTH) {
      setPeopleCountError(ErrorMessage.PeopleCountEmpty);
    } else {
      setPeopleCountError(ErrorMessage.Correct);
    }
  };

  const legalHandler = (evt) => {
    const legal = evt.currentTarget.checked;

    setLegal(legal);
    if (!legal) {
      setLegalError(ErrorMessage.LegalEmpty);
    } else {
      setLegalError(ErrorMessage.Correct);
    }
  };

  const blurHandler = (evt) => {
    switch (evt.currentTarget.name) {
      case User.Name:
        setNameDirty(true);
        break;
      case User.Phone:
        setPhoneDirty(true);
        break;
      case User.PeopleCount:
        setPeopleCountDirty(true);
        break;
      case User.Legal:
        setLegalDirty(true);
        break;
      default:
        break;
    }
  };

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
          <S.BookingFieldError>{(nameDirty && nameError) && nameError}</S.BookingFieldError>
          <S.BookingInput
            disabled={isSending}
            ref={nameRef}
            onBlur={blurHandler}
            onChange={nameHandler}
            value={name}
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
          <S.BookingFieldError>{(phoneDirty && phoneError) && phoneError}</S.BookingFieldError>
          <S.BookingInput
            disabled={isSending}
            ref={phoneRef}
            onBlur={blurHandler}
            onChange={phoneHandler}
            value={phone}
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
          <S.BookingFieldError>{(peopleCountDirty && peopleCountError) && peopleCountError}</S.BookingFieldError>
          <S.BookingInput
            disabled={isSending}
            ref={peopleCountRef}
            onBlur={blurHandler}
            onChange={peopleCountHandler}
            value={peopleCount}
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
          />
        </S.BookingField>
        <S.BookingSubmit
          disabled={!formValid || isSending}
          type="submit">
          Отправить заявку
        </S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingFieldError>{(legalDirty && legalError) && legalError}</S.BookingFieldError>
          <S.BookingCheckboxInput
            disabled={isSending}
            ref={isLegalRef}
            onBlur={blurHandler}
            onChange={legalHandler}
            value={legal}
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
