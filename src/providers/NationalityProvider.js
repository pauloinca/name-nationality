import { createContext, useState, useCallback } from "react";
import Api from "../services/Api";

export const NatioContext = createContext({
    isFirst: true,
    hasNatio: false,
    loading: false,
    name: "",
    countries: [],
});

export const NationalityProvider = ({ children }) => {
    const [natioState, setNatioState] = useState({
        isFirst: true,
        hasNatio: false,
        loading: false,
        name: undefined,
        countries: [],
    });

    const getNatios = (name) => {
        setNatioState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        Api.get(`?name=${name}`)
            .then(({ data }) => {
                let has = true;
                if (!data.country.length) has = false;

                setNatioState((prevState) => ({
                    ...prevState,
                    hasNatio: has,
                    name: data.name,
                    countries: data.country,
                }));
            })
            .finally(() => {
                setNatioState((prevState) => ({
                    ...prevState,
                    isFirst: false,
                    loading: !prevState.loading,
                }));
            });
    };

    const contextValue = {
        natioState,
        getNatios: useCallback((name) => getNatios(name), []),
    };

    return <NatioContext.Provider value={contextValue}>{children}</NatioContext.Provider>;
};
