import React, { memo, useState } from 'react'

import { useTransition } from '../../../hooks/useTransition'
import { Joke as JokeType, JokesDispatch } from '../JokesReducer'
import { JokeCard } from './JokeCard'
import { JokeDeleteDialog } from './JokeDeleteDialog'

const Joke = (jokeProps: JokeType & JokesDispatch) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const { transition, transitionChange } = useTransition()

    const handleDialogChange = () => setDialogOpen(prev => !prev)

    const handleAbort = () => {
        handleDialogChange()
    }

    const handleDelete = async () => {
        handleDialogChange()
        await transitionChange()
        jokeProps.dispatch({ type: 'deleteJoke', id: jokeProps.id })
    }

    return (
        <>
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
