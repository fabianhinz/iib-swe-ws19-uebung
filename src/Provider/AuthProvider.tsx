import React, { FC, useContext, useState } from 'react'

/*
 * wie soll das Objekt "aussehen" welches an Komponenten unterhalb des Providers bereitgestellt wird
 */
interface AuthContext {
    authenticated: boolean
    changeAuthenticated: () => void
}

/*
 * Erstellung eines neuen Context
 */
const Context = React.createContext<AuthContext | null>(null)

/*
 * custom hook zum einfacheren Zugriff auf den AuthContext
 */
export const useAuthContext = () => useContext(Context) as AuthContext

/*
 * Bereitstellung des Context an alle children
 */
const AuthProvider: FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)

    return (
        <Context.Provider
            /*
             * changeAuthenticated ist eine Funktion,
             * die in der LoginButton Komponente als Callback für das DOM Event click verwendet wird
             */
            value={{ authenticated, changeAuthenticated: () => setAuthenticated(prev => !prev) }}>
            {children}
        </Context.Provider>
    )
}

export default AuthProvider
