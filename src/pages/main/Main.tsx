import React, {useEffect} from 'react';
import {Grid} from "@mantine/core";
import {FilterContainer} from "../../components/filter/FilterContainer";
import {useAppDispatch} from "../../store/store";
import {setVacanciesTC} from "../../store/reducers/vacanciesReducer";
import {Vacancies} from "../../components/vacancies/Vacancies";
import {fetchCataloguesTC} from "../../store/reducers/filterReducer";
import {Header} from "../../components/header/Header";

export const Main = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setVacanciesTC())
        dispatch(fetchCataloguesTC())
    }, []);

    return (
        <Grid justify="center">
            <Grid.Col span={12}><Header/></Grid.Col>
            <Grid.Col span={3}>
                <FilterContainer/>
            </Grid.Col>
            <Grid.Col span={6}><Vacancies/></Grid.Col>
        </Grid>
    );
};

