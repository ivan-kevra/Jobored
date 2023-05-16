import React from 'react';
import style from './Style.module.css'
import {Main} from "../components/main/Main";
import {Route, Routes, Navigate} from "react-router-dom";
import {FullVacancy} from "../components/fullVacancy/FullVacancy";
import {Favorites} from "../components/favorites/Favorites";
import {Empty} from "../components/empty/Empty";

function App() {
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
