import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { quests } from 'utils/mocks';
import { getLevel } from 'utils/utils';
import { PEOPLE_COUNT_MAX, PEOPLE_COUNT_MIN } from 'const';

const QuestsCatalog = () => (
  <>
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn isActive>
          <IconAllQuests />
          <S.TabTitle>Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconAdventures />
          <S.TabTitle>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconScifi />
          <S.TabTitle>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>

    <S.QuestsList>
      {quests.map((quest) => {
        return <S.QuestItem key={quest.id}>
          <S.QuestItemLink to="/quest">
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
                    {`${quest.peopleCount[PEOPLE_COUNT_MIN]}–${quest.peopleCount[PEOPLE_COUNT_MAX]} чел`}
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

export default QuestsCatalog;
