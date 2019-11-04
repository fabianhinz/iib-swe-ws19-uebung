import { Typography } from '@material-ui/core'
import React, { memo } from 'react'

/*
 * Jede Komponente geht mit einer umfangreichen Dokumentation zu ihren Props einher
 * https://material-ui.com/api/typography/#props
 */

const JokesHeader = () => (
    <Typography gutterBottom variant="h5" align="center">
        Chuck Norris Joke generator
    </Typography>
)

export default memo(JokesHeader)
