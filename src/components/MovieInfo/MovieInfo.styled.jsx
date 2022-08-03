import styled from '@emotion/styled';

export const MovieInfoBox = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px;
`;

export const MovieInfoList = styled.div`
  margin-left: 15px;
`;

export const MovieGenresList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MovieGenresItem = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
