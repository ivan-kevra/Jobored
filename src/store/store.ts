import thunkMiddleWare, {ThunkDispatch} from "redux-thunk";
import {appReducer} from "./reducers/appReducer";
import {useDispatch} from "react-redux";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {VacanciesActionsType, vacanciesReducer} from "./reducers/vacanciesReducer";
import {FilterActionsType, filterReducer} from "./reducers/filterReducer";
import {favoriteReducer, FavoritesActionsType} from "./reducers/favoriteReducer";
import {VacancyActionsType, vacancyReducer} from "./reducers/vacancyReducer";

const rootReducer = combineReducers({
    app: appReducer,
    vacancies: vacanciesReducer,
    filter: filterReducer,
    favorites: favoriteReducer,
    vacancy: vacancyReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export type AppDispatchType = ThunkDispatch<AppRootStateType, any, ActionsType>
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export type AppRootStateType = ReturnType<typeof rootReducer>

type ActionsType = FavoritesActionsType | FilterActionsType | VacanciesActionsType | VacancyActionsType