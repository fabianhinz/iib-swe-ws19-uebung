import 'typeface-roboto'

import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { render } from 'react-dom'

import { App } from './App'

render(
    <React.Fragment>
        <CssBaseline />
        <App />
    </React.Fragment>,
    document.getElementById('root')
)
