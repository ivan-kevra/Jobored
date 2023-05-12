import React from 'react';
import style from './Style.module.css'
import {Rating, Text, Title} from "@mantine/core";
import point from '../../../assets/img/point.svg'
import location from '../../../assets/img/location.svg'

export const Vacancy = () => {
    return (
        <div className={style.vacancy}>
            <div className={style.title}>
                <Title order={4} color={'#5E96FC'}>Менеджер-дизайнер</Title>
                <Rating count={1}/>
            </div>

            <div className={style.salary}>
                <Text fw={700}>з/п от 70000 rub</Text>
                <img src={point} alt='point'/>
                <Text>Полный рабочий день</Text>
            </div>
            <div className={style.location}>
                <img src={location} alt='location'/>
                <Text>Новый Уренгой</Text>
            </div>

        </div>
    );
};

