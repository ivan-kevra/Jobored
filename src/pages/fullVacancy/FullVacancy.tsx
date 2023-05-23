import React from 'react';
import {Header} from "../../components/header/Header";
import style from './Style.module.css'
import {Text, Title} from "@mantine/core";
import {AppRootStateType} from "../../store/store";
import {Vacancy} from "../../components/vacancies/vacancy/Vacancy";
import {VacancyResponseType} from "../../store/reducers/vacanciesReducer";
import {useSelector} from "react-redux";


export const FullVacancy = () => {
    const vacancy = useSelector<AppRootStateType, VacancyResponseType>(state => state.vacancy.currentVacancy);
    return (
        <div data-elem={`vacancy-${vacancy.id}`}>
            <Header/>
            <div className={style.vacancy}>
                <Vacancy vacancy={vacancy}/>
            </div>
            <div className={style.vacancy}>
                <Title order={4} color={'#000000'}>Обязанности:</Title>
                <Text dangerouslySetInnerHTML={{__html: vacancy.vacancyRichText}} className={style.text}/>
            </div>
        </div>
    );
};

