import React from 'react';
import style from './Style.module.css'
import {Pagination} from "@mantine/core";
import {Vacancy} from "./vacancy/Vacancy";
import {VacancyResponseType} from "../../store/reducers/vacanciesReducer";
import {SearchInput} from "../searchInput/SearchInput";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";


export const Vacancies = () => {
    const vacancies = useSelector<AppRootStateType, VacancyResponseType[]>(state => state.vacancies.objects)
    return (
        <div className={style.vacancies}>
            <SearchInput/>
            {vacancies.map((vacancy: VacancyResponseType) => (<Vacancy vacancy={vacancy} key={vacancy.id}/>))}
            <Pagination total={3} className={style.pagination}/>
        </div>
    );
};

