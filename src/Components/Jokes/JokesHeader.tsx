import { Typography } from '@material-ui/core'
import React, { memo } from 'react'

import { useAuthContext } from '../../Provider/AuthProvider'

/*
 * Jede Komponente geht mit einer umfangreichen Dokumentation zu ihren Props einher
 * https://material-ui.com/api/typography/#props
 */

const JokesHeader = () => {
    /*
     * authentifizierten Nutzer wilkommen heißen
     */
    const { authenticated } = useAuthContext()

    return (
        <Typography gutterBottom variant="h5" align="center">
            Chuck Norris Joke generator {authenticated && 'Willkommen zurück'}
        </Typography>
    )
}

export default memo(JokesHeader)
