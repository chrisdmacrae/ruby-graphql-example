import {useContext} from "react";
import {Context} from "./context";

export const usePlaid = () => {
    return useContext(Context)
}