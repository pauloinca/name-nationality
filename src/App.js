import "./App.css";
import styled from "styled-components";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { MainContent } from "./components/MainContent/MainContent";
import { useNatio } from "./hooks/NatioHook";
import { Loader } from "./components/Loader/Loader";

function App() {
    const { natioState } = useNatio();

    return (
        <Layout>
            <SearchWrapper>
                <SearchBar />
            </SearchWrapper>
            {natioState.isFirst ? (
                <></>
            ) : (
                <MainWrapper>
                    {natioState.hasNatio ? (
                        <>{natioState.loading ? <Loader /> : <MainContent />}</>
                    ) : (
                        <h1>Nome não encontrado</h1>
                    )}
                </MainWrapper>
            )}
        </Layout>
    );
}

const Layout = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: 25%;
    height: 10%;
`;

const MainWrapper = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        text-transform: uppercase;
        color: white;
    }
`;

export default App;
