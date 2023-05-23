import React from 'react';
import style from './Style.module.css'
import {Text, Title} from "@mantine/core";
import point from '../../../assets/img/point.svg'
import location from '../../../assets/img/location.svg'
import {VacancyResponseType} from "../../../store/reducers/vacanciesReducer";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../../store/store";
import {addToFavoriteAC, removeFromFavoriteAC} from "../../../store/reducers/favoriteReducer";
import favoriteStar from '../../../assets/img/star.svg'
import star from '../../../assets/img/star2.svg'
import {NavLink} from "react-router-dom";
import {setCurrentVacancyTC} from "../../../store/reducers/vacancyReducer";

type VacancyPropsType = {
    vacancy: VacancyResponseType
}
export const Vacancy: React.FC<VacancyPropsType> = ({vacancy}) => {
    const dispatch = useAppDispatch();
    const favoritesVacancies = useSelector<AppRootStateType, VacancyResponseType[]>(state => state.favorites.favoriteVacancies);
    const value = favoritesVacancies.find(v => v.id === vacancy.id);
    const addToFavorites = () => dispatch(addToFavoriteAC(vacancy))
    const removeFromFavorites = () => dispatch(removeFromFavoriteAC(vacancy.id))
    const getVacancyHandler = () => dispatch(setCurrentVacancyTC(vacancy.id))

    return (
        <div className={style.vacancy}>
            <div className={style.title}>
                <NavLink to='/fullVacancy'>
                    <Title order={4} color={'#5E96FC'} onClick={getVacancyHandler}>{vacancy.profession}</Title>
                </NavLink>
                {value
                    ? <img src={favoriteStar} alt={'star'} onClick={removeFromFavorites}
                           data-elem={`vacancy-${vacancy.id}_-shortlist-button`}/>
                    : <img src={star} alt={'star'} onClick={addToFavorites}
                           data-elem={`vacancy-${vacancy.id}_-shortlist-button`}/>}
            </div>
            <div className={style.salary}>
                {(vacancy.payment_from !== 0 && vacancy.payment_from !== 0) ?
                    <Text fw={700}>з/п
                        {vacancy.payment_from !== 0 && ' от ' + vacancy.payment_from}
                        {vacancy.payment_to !== 0 && ' до ' + vacancy.payment_to}
                        {vacancy.currency}</Text>
                    : <Text fw={700}>з/п не указана</Text>}

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



