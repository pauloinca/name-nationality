import styled from "styled-components";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import { useNatio } from "../../hooks/NatioHook";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
    const { getNatios } = useNatio();
    const [nameForSearch, setNameForSearch] = useState();

    const submitName = () => {
        if (!nameForSearch) return;
        return getNatios(nameForSearch);
    };

    return (
        <>
            <InputWrapper>
                <Input
                    type="text"
                    onChange={(event) => setNameForSearch(event.target.value)}
                    placeholder="Buscar nome"
                />
            </InputWrapper>
            <Button type="submit" onClick={submitName}>
                <FaSearch />
            </Button>
        </>
    );
};

const InputWrapper = styled.div`
    width: 100%;
`;
