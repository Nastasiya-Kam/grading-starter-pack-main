import styled from 'styled-components';
import { Container, Link as RouterLink  } from 'components/common/common';

const Main = styled(Container)`
  max-width: 1080px;
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    max-width: initial;
    padding-left: 32px;
    padding-right: 33px;
  }
`;

const Link = styled(RouterLink)`
  display: block;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

const PageText = styled.p`
  margin: 0;
  margin-bottom: 9px;
  padding: 0;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;

  color: ${({ theme }) => theme.color.whiteSmoke};
`;

export {
  Main,
  Link,
  PageText
};
