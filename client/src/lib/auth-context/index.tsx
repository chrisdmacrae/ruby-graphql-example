import React, {createContext, PropsWithChildren, useContext} from "react";

export type AuthContext = {
    currentUser: any
    xsrfToken: string
}

const Context = createContext<AuthContext>({
    currentUser: null,
    xsrfToken: ''
})

export type AuthProviderProps = PropsWithChildren<{
    currentUser: any
    xsrfToken: string
}>

export const AuthProvider: React.FC<AuthProviderProps> = ({ currentUser, xsrfToken, children }) => (
    <Context.Provider value={{currentUser, xsrfToken}}>
        {children}
    </Context.Provider>
)

export const useAuth = () => {
    const context = useContext(Context)

    return context
}