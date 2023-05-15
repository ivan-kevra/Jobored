import React, {useCallback, useEffect} from 'react';
import style from './Style.module.css'
import {Main} from "../components/main/Main";
import {Route, Routes, Navigate} from "react-router-dom";
import {FullVacancy} from "../components/fullVacancy/FullVacancy";
import {Favorites} from "../components/favorites/Favorites";
import {Empty} from "../components/empty/Empty";
import {RootState, useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {authAction, authThunk} from "../store/reducers/appReducer";

function App() {

    const dispatch = useAppDispatch();
    const isAuth = useSelector<RootState, boolean>(state => state.app.isAuth);
    const auth = useCallback(() => !isAuth && dispatch(authThunk()), [dispatch, isAuth]);
    const logout = useCallback(() => isAuth && dispatch(authAction({isAuth: false})), [dispatch, isAuth]);

    useEffect(() => {
        auth();
        return () => {
            logout();
        }
    }, [auth]);

    return (
        <div className={style.app}>
            <Routes>
                <Route element={<Navigate to={'/main'}/>} path={'*'}/>
                <Route element={<Main/>} path='/main'/>
                <Route element={<FullVacancy/>} path='/fullVacancy'/>
                <Route element={<Favorites/>} path='/favorites'/>
                <Route element={<Empty/>} path='/empty'/>

            </Routes>
        </div>
    );
}

export default App;
