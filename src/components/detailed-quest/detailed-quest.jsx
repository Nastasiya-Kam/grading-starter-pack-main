import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from 'components/common/common';
import { BookingModal } from './components/components';
import LoadingPage from 'components/loading-page/loading-page';
import NotFound from 'components/not-found/not-found';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { getType, getLevel, getPeopleCountTemplate } from 'utils/utils';
import { fetchQuestAction } from 'store/api-actions';
import { getCurrentQuest, getLoadingStatus } from 'store/selectors';
import * as S from './detailed-quest.styled';

const DetailedQuest = ({id}) => {
  const quest = useSelector(getCurrentQuest);
  const isLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  useEffect(() => {
    dispatch(fetchQuestAction(id))
  }, [id, dispatch]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!quest) {
    return <NotFound />;
  }

  const {title, description, coverImg, type, level, peopleCount, duration } = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{getType(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{getPeopleCountTemplate(peopleCount)}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getLevel(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onClose={setIsBookingModalOpened} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
