import React, {useEffect} from 'react';
import style from './Style.module.css'
import {Main} from "../pages/main/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import {FullVacancy} from "../pages/fullVacancy/FullVacancy";
import {Favorites} from "../pages/favorites/Favorites";
import {Empty} from "../pages/empty/Empty";
import {useAppDispatch} from "../store/store";
import {isAuthTC} from "../store/reducers/appReducer";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(isAuthTC())
    }, [])

    return (
        <div className={style.app}>


            <Routes>
                <Route element={<Main/>} path='/main'/>
                <Route element={<FullVacancy/>} path='/fullVacancy'/>
                <Route element={<Favorites/>} path='/favorites'/>
                <Route element={<Empty/>} path='/empty'/>
                <Route element={<Navigate to={'/main'}/>} path={'*'}/>
            </Routes>
        </div>
    );
}

export default App;
