import {
    Badge,
    Card,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/DeleteTwoTone'
import FavoriteIcon from '@material-ui/icons/FavoriteTwoTone'
import React, { memo } from 'react'

import { Joke as JokeType, JokesDispatch } from './JokesReducer'

type JokeProps = JokeType & JokesDispatch

const Joke = ({ likes, value, dispatch, id }: JokeProps) => (
    <Grid item xs={12}>
        <Card>
            <CardContent>
                <Typography variant="h6">{value}</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={() => dispatch({ type: 'deleteJoke', id })}>
                    <DeleteIcon />
                </IconButton>
                <Badge badgeContent={likes} color="secondary">
                    <IconButton onClick={() => dispatch({ type: 'likeJoke', id })}>
                        <FavoriteIcon />
                    </IconButton>
                </Badge>
            </CardActions>
        </Card>
    </Grid>
)

export default memo(Joke, (prev, next) => prev.likes === next.likes && prev.value === next.value)
