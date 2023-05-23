import {Dispatch} from "redux";
import {api} from "../../api/api";
import {getVacanciesAC} from "./vacanciesReducer";

const initialState: FilterStateType = {
    filterParams: {
        catalogue: null,
        payment_from: 0,
        payment_to: 0,
        keyword: '',
        page: 1,
        count: 4
    },
    catalogues: []
}

export const filterReducer = (state: FilterStateType = initialState, action: FilterActionsType): FilterStateType => {
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
        case "SET-FILTER-PARAMS" :
            return {
                ...state,
                filterParams: {
                    ...state.filterParams,
                    catalogue: action.params.catalogue,
                    payment_from: action.params.payment_from,
                    payment_to: action.params.payment_to
                }
            }
        default:
            return state
    }
}

//actions
const getCataloguesAC = (catalogues: CatalogueResponseType[]) => ({type: 'GET-CATALOGUES', catalogues} as const);
export const setCatalogueAC = (catalogue: string | null) => ({type: 'SET-CATALOGUE', catalogue} as const);
export const setPaymentFromAC = (payment_from: number) => ({type: 'SET-PAYMENT-FROM', payment_from} as const);
export const setPaymentToAC = (payment_to: number) => ({type: 'SET-PAYMENT-TO', payment_to} as const);
export const resetFilterAC = () => ({type: 'RESET-FILTER'} as const)
export const setFilterParamsAC = (params: FilterParamsType) => ({type: 'SET-FILTER-PARAMS', params} as const);

export const fetchCataloguesTC = () => (dispatch: Dispatch<FilterActionsType>) => {
    api.getCatalogues().then(catalogues => {
            dispatch(getCataloguesAC(catalogues.data))
        }
    )
}
export const resetFiltersTC = () => (dispatch: Dispatch<FilterActionsType>) => {
    const data = {
        catalogue: null,
        payment_from: 0,
        payment_to: 0,
        keyword: '',
        page: 1,
        count: 4
    }
    api.getVacancies(data).then(catalogues => {
            dispatch(resetFilterAC())
            dispatch(getVacanciesAC(catalogues.data.objects))
        }
    )
}

//types
export type FilterActionsType =
    ReturnType<typeof getCataloguesAC>
    | ReturnType<typeof setCatalogueAC>
    | ReturnType<typeof setPaymentFromAC>
    | ReturnType<typeof setPaymentToAC>
    | ReturnType<typeof resetFilterAC>
    | ReturnType<typeof setFilterParamsAC>
    | ReturnType<typeof getVacanciesAC>
export type FilterParamsType = {
    catalogue: string | null
    payment_from: number
    payment_to: number
    keyword: string
    page: number
    count: number
}
export type CatalogueResponseType = {
    title: string
    key: number
}
export type FilterStateType = {
    filterParams: FilterParamsType,
    catalogues: CatalogueResponseType[]
}