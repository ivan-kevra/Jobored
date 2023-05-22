import React, {ChangeEvent, useState} from 'react';
import {Button, Input} from "@mantine/core";
import style from "../vacancies/Style.module.css";

type SearchInputPropsType = {
    searchVacancies: (keyword: string) => void
    keyword: string
}
export const SearchInput: React.FC<SearchInputPropsType> = ({searchVacancies, keyword}) => {

    const [searchValue, setSearchValue] = useState(keyword);
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value);

    const searchVacanciesHandler = () => {
        searchVacancies(searchValue)
    }
    return (
        <Input.Wrapper id="search" className={style.search}>
            <Input data-elem="search-input"
                   id="search" placeholder="Введите название вакансии" className={style.input}
                   value={searchValue}
                   onChange={changeHandler}/>
            <Button data-elem="search-button" radius="md" size="sm" className={style.button} onClick={searchVacanciesHandler}>
                Поиск
            </Button>
        </Input.Wrapper>
    );
};

