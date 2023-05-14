import React from 'react';
import style from './Style.module.css'
import {Main} from "../components/main/Main";
import {Route, Routes} from "react-router-dom";
import {FullVacancy} from "../components/fullVacancy/FullVacancy";

function App() {
    return (
        <div className={style.app}>
            <Routes>
                <Route path='/main' element={<Main/>}/>
                <Route path='/fullVacancy' element={<FullVacancy/>}/>
            </Routes>
        </div>
    );
}

export default App;
