import {VacancyResponseType} from "./vacanciesReducer";

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

        default:
            return state
    }
}
export const addToFavoriteAC = (vacancy: VacancyResponseType) => ({type: 'ADD-TO-FAVORITES', vacancy} as const)
export const removeFromFavoriteAC = (id: number) => ({type: 'REMOVE-FROM-FAVORITES', id} as const)


type FavoritesInitialState = {
    favoriteVacancies: VacancyResponseType[]
    page: number
}
type FavoritesActionsType = addToFavoriteACType | removeFromFavoriteACType
type addToFavoriteACType = ReturnType<typeof addToFavoriteAC>
type removeFromFavoriteACType = ReturnType<typeof removeFromFavoriteAC>