import { useState } from 'react'

export const TRANSITION_DURATION = 500

export const useTransition = () => {
    const [transition, setTransition] = useState(true)

    return {
        transition,
        transitionChange: () =>
            new Promise(resolve => {
                setTransition(prev => !prev)
                setTimeout(resolve, TRANSITION_DURATION)
            }),
    }
}
