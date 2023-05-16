import {Dispatch} from 'redux'
import {api} from "../../api/api";

const initialState = {
    isAuth: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'IS-AUTH':
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}

//actions
export const isAuthAC = (isAuth: boolean) => ({type: 'IS-AUTH', isAuth} as const)


//thunks
export const isAuthTC = () => (dispatch: Dispatch<ActionsType>) => {
    api.auth()
        .then(res => {
            dispatch(isAuthAC(true))
        })
        .catch((error) => {
            console.log(error)
        })
}


//types
type InitialStateType = typeof initialState
export type ActionsType = isAuthACType
type isAuthACType = ReturnType<typeof isAuthAC>