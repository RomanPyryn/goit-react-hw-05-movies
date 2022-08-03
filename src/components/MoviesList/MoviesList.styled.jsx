import styled from '@emotion/styled';

export const MoviesListUl = styled.ul`
  list-style: none;
  font-weight: 500;
`;

export const MoviesListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  & img {
    margin-right: 10px;
    border-radius: 50%;
  }
`;