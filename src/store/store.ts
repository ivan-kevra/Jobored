import thunkMiddleWare, {ThunkDispatch} from "redux-thunk";
import {appReducer} from "./reducers/appReducer";
import {useDispatch} from "react-redux";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {vacanciesReducer} from "./reducers/vacanciesReducer";
import {filterReducer} from "./reducers/filterReducer";
import {favoriteReducer} from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
    app: appReducer,
    vacancies: vacanciesReducer,
    filter: filterReducer,
    favorites: favoriteReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store