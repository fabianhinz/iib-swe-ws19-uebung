import { Button } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import React, { memo, useEffect, useState } from 'react'

import { Joke, JokesDispatch } from './JokesReducer'

const LOADING_JOKE_KEY = 'JOKE_KEY'

export const JokesButton = ({ dispatch }: JokesDispatch) => {
    const [loadingJoke, setLoadingJoke] = useState(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    useEffect(() => {
        if (loadingJoke) {
            enqueueSnackbar('Loading new joke', { key: LOADING_JOKE_KEY, variant: 'info' })
        } else {
            closeSnackbar(LOADING_JOKE_KEY)
        }
    }, [closeSnackbar, enqueueSnackbar, loadingJoke])

    const handleAddBtnClick = async () => {
        setLoadingJoke(true)

        const joke: Joke = { value: '', likes: 0, id: new Date().getTime(), skeleton: true }
        dispatch({ type: 'addJoke', joke })

        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const json = await response.json()

        setTimeout(() => {
            setLoadingJoke(false)
            dispatch({
                type: 'addJoke',
                joke: { ...joke, value: json.value, skeleton: false },
            })
        }, 1000)
    }

    return (
        <Button
            disabled={loadingJoke}
            onClick={handleAddBtnClick}
            fullWidth
            variant="contained"
            color="primary">
            Add Joke
        </Button>
    )
}

export default memo(JokesButton)
