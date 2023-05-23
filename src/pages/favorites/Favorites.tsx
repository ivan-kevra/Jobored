import React from 'react';
import style from './Style.module.css'
import {Vacancy} from "../../components/vacancies/vacancy/Vacancy";
import {Pagination} from "@mantine/core";
import {Header} from "../../components/header/Header";
import {AppRootStateType} from "../../store/store";
import {useSelector} from "react-redux";
import {VacancyResponseType} from "../../store/reducers/vacanciesReducer";
import {Empty} from "../empty/Empty";

export const Favorites = () => {
    const favoritesVacancies = useSelector<AppRootStateType, VacancyResponseType[]>(state => state.favorites.favoriteVacancies);
    const page = useSelector<AppRootStateType, number>(state => state.favorites.page);
    return favoritesVacancies.length === 0
        ? <Empty/>
        : <>
            <Header/>
            <div className={style.vacancies}>
                {favoritesVacancies.map((vacancy) => <Vacancy vacancy={vacancy} key={vacancy.id}/>)}
                <Pagination total={3} className={style.pagination} value={page}/>
            </div>
        </>
};

