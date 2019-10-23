import { Button } from '@material-ui/core'
import React, { memo } from 'react'

import { JokesDispatch } from './JokesReducer'

export const JokesButton = ({ dispatch }: JokesDispatch) => {
    const handleAddBtnClick = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const joke = await response.json()
        dispatch({
            type: 'addJoke',
            joke: { value: joke.value, likes: 0, id: new Date().getTime() },
        })
    }

    return (
        <Button onClick={handleAddBtnClick} fullWidth variant="contained" color="primary">
            Add Joke
        </Button>
    )
}

export default memo(JokesButton)
