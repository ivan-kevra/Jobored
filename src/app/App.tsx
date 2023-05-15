import React, {useCallback, useEffect} from 'react';
import style from './Style.module.css'
import {Main} from "../components/main/Main";
import {Route, Routes} from "react-router-dom";
import {FullVacancy} from "../components/fullVacancy/FullVacancy";
import {Favorites} from "../components/favorites/Favorites";
import {Empty} from "../components/empty/Empty";
import {useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {authAction, authThunk} from "../store/reducers/appReducer";

function App() {

    const dispatch = useAppDispatch();
    const isAuth = useSelector<any, boolean>(state => state.app.isAuth);
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
                <Route path='*' element={<Main/>}/>
                <Route path='/Main' element={<Main/>}/>
                <Route path='/fullVacancy' element={<FullVacancy/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='/empty' element={<Empty/>}/>

            </Routes>
        </div>
    );
}

export default App;
