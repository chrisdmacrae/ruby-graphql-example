import {createContext} from "react";

export type PlaidContext = {
    open: Function
    exit: Function
    ready: boolean
    authenticated: boolean
    error?: Error
}

export const Context = createContext<PlaidContext>({
    open: () => null,
    exit: () => null,
    authenticated: false,
    ready: false
})