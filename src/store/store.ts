import {
    AnyAction,
    applyMiddleware,
    combineReducers,
    legacy_createStore,
    ThunkAction,
    ThunkDispatch
} from "@reduxjs/toolkit";
import thunkMiddleWare from "redux-thunk";
import {ActionsType, appReducer} from "./reducers/appReducer";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    app: appReducer,

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsType>

// @ts-ignore
window.store = store