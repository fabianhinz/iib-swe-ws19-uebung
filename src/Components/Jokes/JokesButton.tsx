import { Button } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import React, { memo, useEffect, useState } from 'react'

import { Joke, JokesDispatch } from './JokesReducer'

/*
 * Wichtig bei der Entwicklung von Anwendungen ist das Einhalten eines einheitlichen Casing
 * https://www.chaseadams.io/most-common-programming-case-types/#javascript-conventions
 *
 * 'Camel case for variables and methods.' --> exampleCase
 * 'Pascal case for types and classes (and functions) in JavaScript.' --> ExampleCase
 * 'Upper case snake case for constants.' --> EXAMPLE_CASE
 */
const LOADING_JOKE_KEY = 'JOKE_KEY'

export const JokesButton = ({ dispatch }: JokesDispatch) => {
    /*
     * Je nach Hook destructering von Objekten oder Arrays
     */
    const [loadingJoke, setLoadingJoke] = useState(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    /*
     * das zweite Argument bei useEffect ist der sogennante "Dependency Array"
     * Ändert sich der Wert eines dieser Einträge, so wird die Funktion aufgerufen,
     * die als erstes Argument übergeben wurde
     */
    useEffect(() => {
        if (loadingJoke) {
            enqueueSnackbar('Loading new joke', { key: LOADING_JOKE_KEY, variant: 'info' })
        } else {
            closeSnackbar(LOADING_JOKE_KEY)
        }
    }, [closeSnackbar, enqueueSnackbar, loadingJoke])

    const handleAddBtnClick = async () => {
        setLoadingJoke(true)

        const joke: Joke = {
            value: '',
            likes: 0,
            id: new Date().getTime(),
            skeleton: true,
            created: new Date(),
        }
        dispatch({ type: 'addJoke', joke })

        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const json = await response.json()

        /*
         * "Verzögerung" der Stateänderung durch setTimeout, um die Snackbar länger anzuzeigen
         */
        setTimeout(() => {
            setLoadingJoke(false)
            dispatch({
                type: 'addJoke',
                joke: {
                    ...joke,
                    value: json.value,
                    skeleton: false,
                    created: new Date(json.created_at),
                },
            })
        }, 2000)
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
