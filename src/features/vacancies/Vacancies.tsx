import React from 'react';
import style from './Style.module.css'
import {Button, Input} from "@mantine/core";
import {Vacancy} from "./vacancy/Vacancy";

export const Vacancies = () => {
    return (
        <div className={style.vacancies}>
            <Input.Wrapper id="search" className={style.search}>
                <Input id="search" placeholder="Введите название вакансии" className={style.input}/>
                <Button radius="md" size="sm" className={style.button}>
                    Поиск
                </Button>
            </Input.Wrapper>

            <Vacancy/>
            <Vacancy/>
            <Vacancy/>
            <Vacancy/>
        </div>
    );
};

