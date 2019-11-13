/*
 * Komponenten von https://material-ui.com/
 */
import { Container, createStyles, makeStyles } from '@material-ui/core'
import React from 'react'

/*
 * Eigene Komponenten als Default export, da Aufruf von React.memo(...)
 */
import Jokes from './Components/Jokes/Jokes'
import JokesButton from './Components/Jokes/JokesButton'
import JokesHeader from './Components/Jokes/JokesHeader'
import useJokesReducer from './Components/Jokes/JokesReducer'
import LoginButton from './Components/LoginButton'

/*
 * Erstellung von eigenen styles. makeStyles kann sowohl von @material-ui/core
 * als auch von @material-ui/styles importiert werden. Richtig ist der Import von @material-ui/core
 */
const useStyles = makeStyles(theme =>
    createStyles({
        marginTop: {
            marginTop: theme.spacing(4),
        },
    })
)

export const App = () => {
    /*
     * Der Aufruf von Hooks kann nur in "FunctionComponents" stattinden.
     * Per Konvention jedoch zu Beginn der Komponente
     */
    const [state, dispatch] = useJokesReducer()
    const classes = useStyles()

    return (
        /*
         * Container ist eine simple Komponente um den Inhalt zu zentrieren
         * über die Prop 'className' werden einzelne Komponenten oder html tags mit css Klassen versehen
         */
        <Container maxWidth="md" className={classes.marginTop}>
            <JokesHeader />
            <JokesButton dispatch={dispatch} />
            <LoginButton />
            <Jokes dispatch={dispatch} jokes={state.jokes} />
        </Container>
    )
}
