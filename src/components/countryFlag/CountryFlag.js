import styled from "styled-components";

export const CountryFlag = ({ size, country }) => {
    return (
        <Content>
            <img src={`https://flagcdn.com/w${size}/${country}.png`}></img>
        </Content>
    );
};

const Content = styled.div`
    img {
        height: auto;
        max-width: 100%;
        min-width: 60px;
        object-fit: contain;
    }
`;
