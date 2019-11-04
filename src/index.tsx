/*
 * Typeface "installiert" die notwendige font-family https://github.com/KyleAMathews/typefaces/tree/master/packages/roboto
 */
import 'typeface-roboto'

import { CssBaseline } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
/*
 * Default export aus der Bibliothek react
 */
import React from 'react'
import { render } from 'react-dom'

/*
 * Named Export aus der Datei App.tsx
 */
import { App } from './App'

/*
 * <>...</> ist gleichbedeutend mit <React.Fragment>...</React.Fragment>
 * CssBaseline sorgt für einheitliches Styling von <html> und <body> https://material-ui.com/components/css-baseline/#css-baseline
 * SnackbarProvider macht die Snackbars/Toasts für alle Child-Components verfügbar https://iamhosseindhv.com/notistack
 */
render(
    <>
        <CssBaseline />
        <SnackbarProvider>
            <App />
        </SnackbarProvider>
    </>,
    /*
     * Der Einstiegspunkt für die React App liegt unterhalb von <div id="root"></div>
     */
    document.getElementById('root')
)
