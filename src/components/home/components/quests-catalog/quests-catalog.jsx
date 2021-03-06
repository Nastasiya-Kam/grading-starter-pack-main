import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { getLevel, getIcon, getPeopleCountTemplate } from 'utils/utils';
import { genres, REPLACED_ID } from 'const/const';
import { useDispatch, useSelector } from 'react-redux';
import { changeType } from 'store/actions';
import { getCurrentType } from 'store/user-process/selectors';
import { getDataLoadingStatus, getQuestsByType } from 'store/quests-data/selectors';
import * as S from './quests-catalog.styled';
import { AppRoute } from 'const/routes';

const QuestsCatalog = () => {
  const type = useSelector(getCurrentType);
  const quests = useSelector(getQuestsByType);
  const isLoading = useSelector(getDataLoadingStatus);

  const dispatch = useDispatch();
  const onTypeChange = (type) => {
    dispatch(changeType(type));
  };

  if (isLoading) {
    return <S.PageText>Загрузка списка самых интересных предложений...</S.PageText>;
  }

  return (
    <>
      <S.Tabs>
        {genres.map((genre, index) => {
          const key = `${index}-${genre.type}`;

          return <S.TabItem key={key}>
            <S.TabBtn
              isActive={type === genre.type}
              onClick={() => onTypeChange(genre.type)}
            >
              {getIcon(genre.type)}
              <S.TabTitle>{genre.name}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        })}
      </S.Tabs>

      <S.QuestsList>
        {quests.map((quest) => {
          return <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={AppRoute.DetailedQuest.replace(REPLACED_ID, String(quest.id))}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width="344"
                  height="232"
                  alt={`квест ${quest.title}`}
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {getPeopleCountTemplate(quest.peopleCount)}
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {getLevel(quest.level)}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        })}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
