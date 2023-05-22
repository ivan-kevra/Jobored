import {toggleFavoriteJobAC, VacancyResponseType} from "./vacanciesReducer";


const initialState: FavoritesInitialState = {
    favoriteVacancies: [],
    page: 1
}

export const favoriteReducer = (state: FavoritesInitialState = initialState, action: FavoritesActionsType) => {
    switch (action.type) {
        case 'ADD-TO-FAVORITES': {
            return {...state, favoriteVacancies: [...state.favoriteVacancies, action.vacancy]}
        }
        case 'REMOVE-FROM-FAVORITES': {
            return {...state, favoriteVacancies: state.favoriteVacancies.filter(v => v.id !== action.id)}
        }
        case "SHOW-FAVORITE-VACANCIES":
            return {...state, favoriteVacancies: [...action.favoriteVacancies]}
        default:
            return state
    }
}
export const addToFavoriteAC = (vacancy: VacancyResponseType) => ({type: 'ADD-TO-FAVORITES', vacancy} as const)
export const removeFromFavoriteAC = (id: number) => ({type: 'REMOVE-FROM-FAVORITES', id} as const)
const showFavoritesAC = (favoriteVacancies: VacancyResponseType[]) => ({
    type: 'SHOW-FAVORITE-VACANCIES',
    favoriteVacancies
} as const)


type FavoritesInitialState = {
    favoriteVacancies: VacancyResponseType[]
    page: number
}
type FavoritesActionsType =
    addToFavoriteACType
    | removeFromFavoriteACType
    | addFavoritesACType
    | ReturnType<typeof toggleFavoriteJobAC>
type addToFavoriteACType = ReturnType<typeof addToFavoriteAC>
type removeFromFavoriteACType = ReturnType<typeof removeFromFavoriteAC>
type addFavoritesACType = ReturnType<typeof showFavoritesAC>