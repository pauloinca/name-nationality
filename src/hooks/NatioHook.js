import { useContext } from "react";
import { NatioContext } from "../providers/NationalityProvider";

export const useNatio = () => {
    const { natioState, getNatios } = useContext(NatioContext);

    return { natioState, getNatios };
};
