import React from 'react';
import {Header} from "../../components/header/Header";
import style from './Style.module.css'
import {List, Title} from "@mantine/core";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {Vacancy} from "../../components/vacancies/vacancy/Vacancy";
import {VacancyResponseType} from "../../store/reducers/vacanciesReducer";
import {useSelector} from "react-redux";


export const FullVacancy = () => {
    const vacancy = useSelector<AppRootStateType, VacancyResponseType>(state => state.vacancy.currentVacancy);
    return (
        <div>
            <Header/>
            <div className={style.vacancy}>
                <Vacancy vacancy={vacancy}/>
            </div>
            <div className={style.vacancy}>
                <Title order={4} color={'#000000'}>Обязанности:</Title>
                <List>
                    <List.Item>Разработка дизайн-макетов для наружной и интерьерной рекламы, полиграфии, сувенирной
                        продукци</List.Item>
                    <List.Item>Подготовка и верстка макетов в CorelDraw, Adobe Photoshop</List.Item>
                    <List.Item>Создание дизайна логототипов и брендбуков</List.Item>
                    <List.Item>Управленческая функция: обучение, адаптация дизайнеров, их контроль, оцеsнкаы</List.Item>
                </List>
            </div>
            <div className={style.vacancy}>
                <Title order={4} color={'#000000'}>Требования:</Title>
                <List>
                    <List.Item>Разработка дизайн-макетов для наружной и интерьерной рекламы, полиграфии, сувенирной
                        продукци</List.Item>
                    <List.Item>Подготовка и верстка макетов в CorelDraw, Adobe Photoshop</List.Item>
                    <List.Item>Создание дизайна логототипов и брендбуков</List.Item>
                    <List.Item>Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценкаы</List.Item>
                </List>
            </div>
            <div className={style.vacancy}>
                <Title order={4} color={'#000000'}>Условия:</Title>
                <List>
                    <List.Item>Оформление по контракту</List.Item>
                    <List.Item>Полный социальный пакет</List.Item>
                    <List.Item>Премирование по результатам работы</List.Item>
                </List>
            </div>
        </div>
    );
};

