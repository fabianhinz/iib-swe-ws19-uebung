import 'typeface-roboto'

import { CssBaseline } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { render } from 'react-dom'

import { App } from './App'

render(
    <>
        <CssBaseline />
        <SnackbarProvider>
            <App />
        </SnackbarProvider>
    </>,
    document.getElementById('root')
)
