import React, { memo, useState } from 'react'

import { useTransition } from '../../../hooks/useTransition'
import { Joke as JokeType, JokesDispatch } from '../JokesReducer'
import { JokeCard } from './JokeCard'
import { JokeDeleteDialog } from './JokeDeleteDialog'

/*
 * es ist keine Pflicht Props explizit als separaten Typ zu definieren
 * ggf. verbessert sich dabei jedoch die Lesbarkeit
 */
const Joke = (jokeProps: JokeType & JokesDispatch) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const { transition, transitionChange } = useTransition()

    const handleDialogChange = () => setDialogOpen(prev => !prev)

    const handleAbort = () => {
        handleDialogChange()
    }

    const handleDelete = async () => {
        handleDialogChange()
        /*
         * Der Promise von transitionChange ist nach TRANSITION_DURATION (0,5 Sekunden) im Status 'resolved'
         * Danach erst den Joke aus dem Array entfernen
         */
        await transitionChange()
        jokeProps.dispatch({
            type: 'deleteJoke',
            id: jokeProps.id,
        })
    }

    return (
        <>
            {/* Die Spread Syntax sorgt für bessere Lesbarkeit des Codes */}
            <JokeCard zoomIn={transition} onDialogChange={handleDialogChange} {...jokeProps} />

            <JokeDeleteDialog
                open={dialogOpen}
                onDeleteAbort={handleAbort}
                onDeleteConfirme={handleDelete}
            />
        </>
    )
}

export default memo(Joke, (prev, next) => prev.likes === next.likes && prev.value === next.value)
