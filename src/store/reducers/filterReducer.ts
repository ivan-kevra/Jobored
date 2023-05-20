import {Dispatch} from "redux";
import {api} from "../../api/api";

type initialStateType = {
    filterParams: FilterParamsType,
    catalogues: CatalogueResponseType[]
}
const initialState: initialStateType = {
    filterParams: {
        catalogue: null,
        payment_from: 0,
        payment_to: 0,
    },
    catalogues: []
}

export const filterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'GET-CATALOGUES':
            return {...state, catalogues: action.catalogues}
        case 'SET-CATALOGUE':
            return {...state, filterParams: {...state.filterParams, catalogue: action.catalogue}}

        case 'SET-PAYMENT-FROM':
            return {...state, filterParams: {...state.filterParams, payment_from: action.payment_from}}
        case 'SET-PAYMENT-TO':
            return {...state, filterParams: {...state.filterParams, payment_to: action.payment_to}}

        case "RESET-FILTER" :
            return {...state, filterParams: {...state.filterParams, catalogue: null, payment_from: 0, payment_to: 0}}
        default:
            return state
    }
}

const getCataloguesAC = (catalogues: CatalogueResponseType[]) => ({
    type: 'GET-CATALOGUES',
    catalogues
} as const);
export const setCatalogueAC = (catalogue: number | null) => ({type: 'SET-CATALOGUE', catalogue} as const);
export const setPaymentFromAC = (payment_from: number) => ({type: 'SET-PAYMENT-FROM', payment_from} as const);
export const setPaymentToAC = (payment_to: number) => ({type: 'SET-PAYMENT-TO', payment_to} as const);
export const resetFilterAC = () => ({type: 'RESET-FILTER'} as const)

export const fetchCataloguesTC = () => (dispatch: Dispatch<ActionsType>) => {
    api.getCatalogues().then(catalogues => {
            dispatch(getCataloguesAC(catalogues.data))
        }
    )
}
export const resetFiltersTC = () => (dispatch: Dispatch<ActionsType>) => {
    api.getCatalogues().then(catalogues => {
            dispatch(resetFilterAC())
        }
    )
}


type ActionsType =
    ReturnType<typeof getCataloguesAC>
    | ReturnType<typeof setCatalogueAC>
    | ReturnType<typeof setPaymentFromAC>
    | ReturnType<typeof setPaymentToAC>
    | ReturnType<typeof resetFilterAC>
export type FilterParamsType = {
    catalogue: number | null
    payment_from: number
    payment_to: number
}
export type CatalogueResponseType = {
    title: string
    key: number
}