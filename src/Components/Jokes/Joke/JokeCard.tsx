import {
    Badge,
    Card,
    CardActions,
    CardContent,
    CardHeader,
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

/*
 * mit extend werden die Member eines Interface in das neue Interface kopiert --> DRY
 */
interface Props extends Joke, JokesDispatch {
    onDialogChange: () => void
    zoomIn: boolean
}

export const JokeCard = ({
    created,
    zoomIn,
    value,
    id,
    likes,
    skeleton,
    dispatch,
    onDialogChange,
}: Props) => (
    /*
     * Mithilfe der Grid Komponente lassen sich komplexe, gridartige Layouts definieren
     * xs, md, xl sind hierbei Breakpoints, die ab einer von Material-ui definierten Breite
     * des Viewports greifen.
     * Die Zahl die den Breakpoints übergeben wird sollte immer durch 12 teilbar sein:
     * "Material Design’s responsive UI is based on a 12-column grid layout"
     * https://material-ui.com/components/grid/#grid
     */
    <Grid item xs={12} md={6} xl={4}>
        <Grow in={zoomIn} timeout={TRANSITION_DURATION}>
            <Card>
                <CardHeader
                    title={
                        skeleton ? (
                            <Skeleton width="30%" height={24} variant="text" />
                        ) : (
                            created.toLocaleDateString()
                        )
                    }
                />
                <CardContent>
                    {skeleton && (
                        <>
                            {/* Skeletons sind Platzhalterkomponenten, dem Anwender wird Inhalt vorgetäuscht*/}
                            <Skeleton width="100%" height={12} variant="text" />
                            <Skeleton width="80%" height={12} variant="text" />
                        </>
                    )}
                    <Typography variant="subtitle1">{value}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton disabled={skeleton} onClick={onDialogChange}>
                        {skeleton ? (
                            <Skeleton width={24} height={24} variant="circle" />
                        ) : (
                            <DeleteIcon />
                        )}
                    </IconButton>
                    <Badge badgeContent={likes} color="secondary">
                        <IconButton
                            disabled={skeleton}
                            onClick={() => dispatch({ type: 'likeJoke', id })}>
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
