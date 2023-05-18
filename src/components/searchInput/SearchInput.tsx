import React from 'react';
import {Button, Input} from "@mantine/core";
import style from "../vacancies/Style.module.css";

export const SearchInput = () => {
    return (
        <Input.Wrapper id="search" className={style.search}>
            <Input id="search" placeholder="Введите название вакансии" className={style.input}/>
            <Button radius="md" size="sm" className={style.button}>
                Поиск
            </Button>
        </Input.Wrapper>
    );
};

