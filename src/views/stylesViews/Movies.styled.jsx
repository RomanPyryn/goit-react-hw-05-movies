import styled from "@emotion/styled";

export const MoviesList = styled.ul`
    list-style: none;
    font-weight: 500;
`;

export const MoviesListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 5px;
    };

    & a {
        text-decoration: none;
        /* color: inherit; */
    }
`;