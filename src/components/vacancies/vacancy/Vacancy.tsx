import React from 'react';
import style from './Style.module.css'
import {Rating, Text, Title} from "@mantine/core";
import point from '../../../assets/img/point.svg'
import location from '../../../assets/img/location.svg'
import {VacancyResponseType} from "../../../store/reducers/vacanciesReducer";

type VacancyPropsType = {
    vacancy: VacancyResponseType
}
export const Vacancy: React.FC<VacancyPropsType> = ({vacancy}) => {
    return (
        <div className={style.vacancy}>
            <div className={style.title}>
                <Title order={4} color={'#5E96FC'}>{vacancy.profession}</Title>
                <Rating count={1}/>
            </div>
            <div className={style.salary}>
                {(vacancy.payment_from !== 0 && vacancy.payment_from !== 0) &&
                    <Text fw={700}>з/п
                        {vacancy.payment_from !== 0 && ' от ' + vacancy.payment_from}
                        {vacancy.payment_to !== 0 && ' до ' + vacancy.payment_to}
                        {vacancy.currency}</Text>}

                <img src={point} alt='point'/>
                <Text>{vacancy.type_of_work.title}</Text>
            </div>
            <div className={style.location}>
                <img src={location} alt='location'/>
                <Text>{vacancy.town.title}</Text>
            </div>

        </div>
    );
};



