import {
    Badge,
    Card,
    CardActions,
    CardContent,
    Grid,
    Grow,
    IconButton,
    Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/DeleteTwoTone'
import FavoriteIcon from '@material-ui/icons/FavoriteTwoTone'
import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'

import { TRANSITION_DURATION } from '../../../hooks/useTransition'
import { Joke, JokesDispatch } from '../JokesReducer'

interface Props extends Joke, JokesDispatch {
    onDialogChange: () => void
    zoomIn: boolean
}

export const JokeCard = ({
    zoomIn,
    value,
    id,
    likes,
    skeleton,
    dispatch,
    onDialogChange,
}: Props) => (
    <Grid item xs={12}>
        <Grow in={zoomIn} timeout={TRANSITION_DURATION}>
            <Card>
                <CardContent>
                    {skeleton && (
                        <>
                            <Skeleton width="100%" height={12} variant="text" />
                            <Skeleton width="80%" height={12} variant="text" />
                        </>
                    )}
                    <Typography variant="h6">{value}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={onDialogChange}>
                        {skeleton ? (
                            <Skeleton width={24} height={24} variant="circle" />
                        ) : (
                            <DeleteIcon />
                        )}
                    </IconButton>
                    <Badge badgeContent={likes} color="secondary">
                        <IconButton onClick={() => dispatch({ type: 'likeJoke', id })}>
                            {skeleton ? (
                                <Skeleton width={24} height={24} variant="circle" />
                            ) : (
                                <FavoriteIcon />
                            )}
                        </IconButton>
                    </Badge>
                </CardActions>
            </Card>
        </Grow>
    </Grid>
)
