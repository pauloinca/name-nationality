import styled from "styled-components";
import { CountryFlag } from "../countryFlag/CountryFlag";

export const Nationality = ({ country, prob }) => {
    return (
        <Content>
            <CountryFlag size="160" country={country}></CountryFlag>
            <h2>{prob}</h2>
        </Content>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: black;
    height: auto;
    width: 100%;

    h2 {
        margin-left: calc(2vh + 1vw);
    }
`;
