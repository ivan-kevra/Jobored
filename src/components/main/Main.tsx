import React from 'react';
import {Grid} from "@mantine/core";
import {Header} from "../../features/header/Header";
import {Filter} from "../../features/filter/Filter";
import {Vacancies} from "../../features/vacancies/Vacancies";

export const Main = () => {
    return (
        <Grid justify="center">
            <Grid.Col span={12}><Header/></Grid.Col>
            <Grid.Col span={3}><Filter/></Grid.Col>
            <Grid.Col span={6}><Vacancies/></Grid.Col>
        </Grid>
    );
};

