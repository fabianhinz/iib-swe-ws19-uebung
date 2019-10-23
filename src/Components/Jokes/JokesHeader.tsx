import { Typography } from '@material-ui/core'
import React, { memo } from 'react'

const JokesHeader = () => (
    <Typography gutterBottom variant="h4" align="center">
        Chuck Norris Joke generator
    </Typography>
)

export default memo(JokesHeader)
