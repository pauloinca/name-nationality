import styled from "styled-components";
import { Nationality } from "./Nationality/Nationality";
import { useNatio } from "../../hooks/NatioHook";

export const MainContent = () => {
    const { natioState } = useNatio();

    return (
        <Content>
            <h1>{natioState.name}</h1>
            {natioState.countries.map((item, index) => {
                return (
                    <ElementWrapper key={index}>
                        <Nationality
                            country={item.country_id.toLowerCase()}
                            prob={item.probability.toFixed(5)}
                        ></Nationality>
                    </ElementWrapper>
                );
            })}
        </Content>
    );
};

const ElementWrapper = styled.div`
    margin-bottom: 2rem;
    background-color: #f2f2f0;
    padding: 1.5rem 2rem;
    border-radius: 5px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 10px 40px;
    border-radius: 5px;
    border: 1px solid #777;
    box-shadow: 0 10px 10px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);

    h1 {
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 5rem;
        color: white;
    }
`;
