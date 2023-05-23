import React, {useState} from 'react';
import style from './Style.module.css'
import {Loader, Pagination} from "@mantine/core";
import {Vacancy} from "./vacancy/Vacancy";
import {vacanciesLoadingStatusAC, VacancyResponseType} from "../../store/reducers/vacanciesReducer";
import {SearchInput} from "../searchInput/SearchInput";

type VacanciesPropsType = {
    vacancies: VacancyResponseType[]
    searchVacancies: (keyword: string) => void
    keyword: string
    setVacanciesPage: (page: number) => void
    vacanciesLoadingStatus: boolean
}
export const Vacancies: React.FC<VacanciesPropsType> = ({
                                                            vacancies,
                                                            searchVacancies,
                                                            keyword,
                                                            setVacanciesPage,
                                                            vacanciesLoadingStatus
                                                        }) => {

    return (
        <div className={style.vacancies}>
            <SearchInput searchVacancies={searchVacancies} keyword={keyword}/>
            {vacanciesLoadingStatus
                ? vacancies.map((vacancy: VacancyResponseType) => (
                    <Vacancy vacancy={vacancy} key={vacancy.id}/>))
                : <Loader/>}
            <Pagination total={3} className={style.pagination} onChange={setVacanciesPage}/>
        </div>
    );
};

