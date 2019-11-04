import { Dispatch, Reducer, useReducer } from 'react'

/*
 * Export eines Typs
 */
export interface Joke {
    value: string
    created: Date
    likes: number
    id: number
    skeleton: boolean
}

interface State {
    jokes: Joke[]
}

/*
 * Ein Objekt vom Typ 'Action' kann eine der drei Typdefinitionen annehmen
 */
type Action =
    | {
          type: 'addJoke'
          joke: Joke
      }
    | {
          type: 'deleteJoke'
          id: number
      }
    | {
          type: 'likeJoke'
          id: number
      }

/*
 * Den generischen Typ Dispatch<T> durch den eigenen Typ 'Action' spezifizieren
 */
export interface JokesDispatch {
    dispatch: Dispatch<Action>
}

/*
 * Die Signatur eines Reducers von React sieht wie folgt aus:
 * type Reducer<S, A> = (prevState: S, action: A) => S;
 * Es gilt daher immer eine Funktion mit zwei Parametern zu schreiben
 */
const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case 'addJoke': {
            const toUpdate = state.jokes.findIndex(({ id }) => id === action.joke.id)

            if (toUpdate !== -1) state.jokes[toUpdate] = action.joke
            else state.jokes.push(action.joke)

            return { jokes: state.jokes }
        }
        case 'deleteJoke': {
            const jokes = state.jokes.filter(joke => joke.id !== action.id)
            return { jokes }
        }
        case 'likeJoke': {
            state.jokes.forEach(joke => {
                if (joke.id === action.id) ++joke.likes
            })
            return { ...state }
        }
    }
}

const initialState: State = {
    jokes: [],
}

const useJokesReducer = () => useReducer(reducer, initialState)
/*
 * Default Export des useJokesReducer hook für bestmögliche Kapselung
 */
export default useJokesReducer
