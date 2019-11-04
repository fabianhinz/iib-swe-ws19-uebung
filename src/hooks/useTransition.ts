import { useState } from 'react'

export const TRANSITION_DURATION = 500

export const useTransition = () => {
    const [transition, setTransition] = useState(true)

    /*
     * der custom hook liefert ein Objekt mit zwei keys (transition, transitionChange) zurück.
     * transition kann als 'in'-Prop für Transtition Komponenten verwendet werden https://material-ui.com/components/transitions/#transitions
     * transitionChange bietet die Möglichkeit asynchron die Transtition zu "deaktivieren". Dies führt zu "transition out"
     */
    return {
        transition,
        transitionChange: () =>
            new Promise(resolve => {
                setTransition(prev => !prev)
                setTimeout(resolve, TRANSITION_DURATION)
            }),
    }
}
