import { Dispatch, Reducer, useReducer } from 'react'

export interface Joke {
    value: string
    likes: number
    id: number
}

interface State {
    jokes: Joke[]
}

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

export interface JokesDispatch {
    dispatch: Dispatch<Action>
}

const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case 'addJoke':
            return { jokes: [...state.jokes, action.joke] }
        case 'deleteJoke': {
            const jokes = state.jokes.filter(joke => joke.id !== action.id)
            return { jokes }
        }
        case 'likeJoke':
            state.jokes.forEach(joke => {
                if (joke.id === action.id) ++joke.likes
            })
            return { ...state }
    }
}

const initialState: State = {
    jokes: [],
}

const useJokesReducer = () => useReducer(reducer, initialState)
export default useJokesReducer