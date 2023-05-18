import React, {useEffect} from 'react';
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {setVacanciesTC, VacancyResponseType} from "../../store/reducers/vacanciesReducer";
import {useSelector} from "react-redux";
import {Vacancies} from "./Vacancies";

export const VacanciesContainer = () => {

    const dispatch = useAppDispatch()
    const vacancies: VacancyResponseType[] = useSelector<AppRootStateType, VacancyResponseType[]>(state => state.vacancies.objects)
    useEffect(() => {
        dispatch(setVacanciesTC())
    }, []);

    return (
        <Vacancies vacancies={vacancies}/>
    );
};

