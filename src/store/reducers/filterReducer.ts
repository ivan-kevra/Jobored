import {Dispatch} from "redux";
import {api} from "../../api/api";

type initialStateType = {
    filterParams: FilterParamsType,
    catalogues: CatalogueResponseType[]
}
const initialState: initialStateType = {
    filterParams: {
        catalogue: 0,
        payment_from: 0,
        payment_to: 0,
    },
    catalogues: []
}

export const filterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'GET-CATALOGUES': {
            return {...state, catalogues: action.catalogues}
        }
        case 'SET-CATALOGUE': {
            return {...state, filterParams: {...state.filterParams, catalogue: action.filterParams.catalogue}}
        }
        // case 'SET-PAYMENT-FROM': {
        //     return {...state, params: {...state.params, payment_from: action.params.payment_from}}
        // }
        // case 'SET-PAYMENT-TO': {
        //     return {...state, params: {...state.params, payment_to: action.params.payment_to}}
        // }
        // case "RESET-FILTER":
        //     return {...state, params: {...state.params, catalogues: 0, payment_from: 0, payment_to: 0}}
        default:
            return state
    }
}

const getCataloguesAC = (catalogues: CatalogueResponseType[]) => ({
    type: 'GET-CATALOGUES',
    catalogues
} as const);
const setCatalogueAC = (filterParams: FilterParamsType) => ({type: 'SET-CATALOGUE', filterParams} as const);
// const setPaymentFromAC = (params: VacancyRequestType) => ({type: 'SET-PAYMENT-FROM', params} as const);
// const setPaymentToAC = (params: VacancyRequestType) => ({type: 'SET-PAYMENT-TO', params} as const);
// const resetFilterAC = () => ({type: 'RESET-FILTER'} as const)

export const fetchCatalogues = () => (dispatch: Dispatch<ActionsType>) => {
    api.getCatalogues().then(catalogues => {
            dispatch(getCataloguesAC(catalogues.data))
        }
    )
}


type ActionsType =
    ReturnType<typeof getCataloguesAC>
    | ReturnType<typeof setCatalogueAC>
// | ReturnType<typeof setPaymentFromAC>
// | ReturnType<typeof setPaymentToAC>
// | ReturnType<typeof resetFilterAC>
export type FilterParamsType = {
    catalogue: number
    payment_from: number
    payment_to: number
}
export type CatalogueResponseType = {
    title: string
    key: number
}