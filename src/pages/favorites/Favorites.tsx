import React from 'react';
import style from './Style.module.css'
import {Vacancy} from "../../components/vacancies/vacancy/Vacancy";
import {Pagination} from "@mantine/core";
import {Header} from "../../components/header/Header";

export const Favorites = () => {
    return (
        <>
            <Header/>
            <div className={style.vacancies}>
                {/*<Vacancy/>*/}
                {/*<Vacancy/>*/}
                {/*<Vacancy/>*/}
                {/*<Vacancy/>*/}

                <Pagination total={3} className={style.pagination}/>
            </div>

        </>

    );
};

