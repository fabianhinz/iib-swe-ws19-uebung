import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core'
import React from 'react'

interface Props {
    open: boolean
    onDeleteConfirme: () => void
    onDeleteAbort: () => void
}

export const JokeDeleteDialog = ({ open, onDeleteConfirme, onDeleteAbort }: Props) => (
    <Dialog open={open} onClose={onDeleteAbort}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
            <DialogContentText>
                this operation cannot be undone. The joke will be lost
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button color="secondary" onClick={onDeleteConfirme}>
                yes
            </Button>
            <Button onClick={onDeleteAbort}>No</Button>
        </DialogActions>
    </Dialog>
)
