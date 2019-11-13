import { createStyles, Fab, makeStyles } from '@material-ui/core'
import UserIcon from '@material-ui/icons/VerifiedUserRounded'
import React, { memo } from 'react'

import { useAuthContext } from '../Provider/AuthProvider'

const useStyles = makeStyles(theme =>
    createStyles({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
        },
    })
)

const LoginButton = () => {
    const { changeAuthenticated } = useAuthContext()
    const classes = useStyles()

    return (
        <Fab className={classes.fab} color="secondary" onClick={changeAuthenticated}>
            <UserIcon />
        </Fab>
    )
}

export default memo(LoginButton)
