import { Container, createStyles, makeStyles } from '@material-ui/core'
import React from 'react'

import Jokes from './Components/Jokes/Jokes'
import JokesButton from './Components/Jokes/JokesButton'
import JokesHeader from './Components/Jokes/JokesHeader'
import useJokesReducer from './Components/Jokes/JokesReducer'

const useStyles = makeStyles(theme =>
    createStyles({
        marginTop: {
            marginTop: theme.spacing(4),
        },
    })
)

export const App = () => {
    const [state, dispatch] = useJokesReducer()
    const classes = useStyles()

    return (
        <Container maxWidth="md" className={classes.marginTop}>
            <JokesHeader />
            <JokesButton dispatch={dispatch} />
            <Jokes dispatch={dispatch} jokes={state.jokes} />
        </Container>
    )
}
