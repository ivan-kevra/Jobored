import React from 'react';
import {Vacancies} from "../../features/vacancies/Vacancies";
import {Header} from "../../features/header/Header";
import style from './Style.module.css'
import {Vacancy} from "../../features/vacancies/vacancy/Vacancy";
import {Pagination} from "@mantine/core";

export const Favorites = () => {
    return (
        <>
            <Header/>
            <div className={style.vacancies}>
                <Vacancy/>
                <Vacancy/>
                <Vacancy/>
                <Vacancy/>

                <Pagination total={3} className={style.pagination}/>
            </div>

        </>

    );
};

