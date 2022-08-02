import styled from "@emotion/styled";

export const MovieInfoBox = styled.div`
    display: flex;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: solid 1px #2c2c2c;
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

export const MovieAdditionalInfoBox = styled.div`
    padding-bottom: 10px;
    border-bottom: solid 1px #2c2c2c;
`;