import styled from '@emotion/styled';

export const HomeList = styled.ul`
  list-style: none;
  font-weight: 500;
`;

export const HomeListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }

  & a {
    text-decoration: none;
    /* color: inherit; */
  }
`;
