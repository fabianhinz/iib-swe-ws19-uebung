import { Box, Grid } from '@material-ui/core'
import React from 'react'

import Joke from './Joke/Joke'
import { Joke as JokeType, JokesDispatch } from './JokesReducer'

interface JokesProps extends JokesDispatch {
    jokes: JokeType[]
}

const Jokes = ({ jokes, dispatch }: JokesProps) => (
    <Box paddingTop={2}>
        <Grid container spacing={2}>
            {jokes.map(joke => (
                <Joke key={joke.id} dispatch={dispatch} {...joke} />
            ))}
        </Grid>
    </Box>
)

export default Jokes
