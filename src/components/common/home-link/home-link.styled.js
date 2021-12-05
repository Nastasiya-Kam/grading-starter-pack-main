import styled from 'styled-components';
import { Link as RouterLink } from 'components/common/common';

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

export {
  Link
};
