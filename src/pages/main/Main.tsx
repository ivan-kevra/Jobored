import React from 'react';
import {Grid} from "@mantine/core";
import {Header} from "../../components/header/Header";
import {VacanciesContainer} from "../../components/vacancies/VacanciesContainer";
import {FilterContainer} from "../../components/filter/FilterContainer";

export const Main = () => {

    return (
        <Grid justify="center">
            {/*<Grid.Col span={12}><Header/></Grid.Col>*/}
            <Grid.Col span={3}><FilterContainer/></Grid.Col>
            {/*<Grid.Col span={6}><VacanciesContainer/></Grid.Col>*/}
        </Grid>
    );
};

