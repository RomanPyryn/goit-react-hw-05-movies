import styled from "@emotion/styled";

export const MovieAdditionalInfoBox = styled.div`
    padding-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px;
`;

export const MovieAdditionalInfoList = styled.ul`
    list-style: none;
    font-weight: 500;
`;

export const MovieAdditionalInfoItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 5px;
    };

    & a {
        text-decoration: none;
    }
`;